---
hidden: true
title: "142 Standard cell generator and tester"
weight: 76
---

## 142 : Standard cell generator and tester

* Author: htfab
* Description: Contains a sky130 compatible standard cell generator, a few example cells generated, and a TinyTapeout design for testing them
* [GitHub repository](https://github.com/htfab/cell-tester)
* [GDS submitted](https://github.com/htfab/cell-tester/actions/runs/6756878611)
* HDL project
* [Extra docs](https://github.com/htfab/cell-tester/blob/main/README.md)
* Clock: 10000000 Hz
* External hardware: 

![picture](images/picture.pdf)

### How it works

This project consists of three parts:

- a standard cell generator for sky130, written in python using the gdstk library
- four example cells ready to drop into the openlane flow
- a digital design wrapping the example cells in an instrumentation framework

###### Cell generator

Cells are built from a discrete representation. For each layer, blocks are placed in
some tiles of a 6 &times; n grid. These blocks are then shifted and resized in fixed
increments, and certain pairs of adjacent blocks are connected to each other
as shown in figure *(a)*.

<img src="svg/skygen.svg" alt="steps of cell generation" width="800" />

Generated cells are then written to gds, lef, mag & maglef files to allow using them
in the openlane flow. Verilog models and liberty characterization data have to be
created separately. Cells are designed to be mixed-and-matched with cells from the
`sky130_fd_sc_hd` library.

The cell generator lives in the
[`pdk-gen`](https://github.com/htfab/cell-tester/tree/main/pdk-gen)
directory of the source tree.
The generator itself is in
[`skygen.py`](https://github.com/htfab/cell-tester/blob/main/pdk-gen/skygen.py)
while inputs for the example cells are in
[`cells.py`](https://github.com/htfab/cell-tester/blob/main/pdk-gen/cells.py).

###### Example cells

Four cells from the `sky130_fd_sc_hd` library were recreated using the generator.
They are shown in figure *(b)*, with more detailed images in the
[`README.md`](https://github.com/htfab/cell-tester/blob/main/README.md).

The [`pdk`](https://github.com/htfab/cell-tester/tree/main/pdk)
directory is structured in the same way as the sky130 pdk so that you can copy
its contents into
`$PDK_ROOT/sky130A/libs.ref/sky130_fd_sc_hd` to use the cells with openlane.
Just don't use them for anything serious, they are not that thoroughly tested.

The subdirectories
[`gds`](https://github.com/htfab/cell-tester/tree/main/pdk/gds),
[`lef`](https://github.com/htfab/cell-tester/tree/main/pdk/lef),
[`mag`](https://github.com/htfab/cell-tester/tree/main/pdk/mag) and
[`maglef`](https://github.com/htfab/cell-tester/tree/main/pdk/maglef)
are outputs from the generator.
Netlists in
[`spice`](https://github.com/htfab/cell-tester/tree/main/pdk/spice)
were extracted using magic while models in
[`verilog`](https://github.com/htfab/cell-tester/tree/main/pdk/verilog)
and characterization data in
[`lib`](https://github.com/htfab/cell-tester/tree/main/pdk/lib)
were just copied from the corresponding foundry cells.

There are some quick analog tests using ngspice in the
[`pdk-test`](https://github.com/htfab/cell-tester/tree/main/pdk-test)
directory.

###### TinyTapeout design

A digital design wrapping the example cells in an instrumentation framework
is included in the TinyTapeout 5 shuttle.

It contains 8 copies of the structure in figure *(c)* with the 4 foundry cells and
the 4 custom cells inserted as DUT.
The ring oscillator, clock divider and switch are shared between the copies.

<img src="svg/diagram.svg" alt="" width="800" />

For simple tests, a copy of the cell is directly attached to the inputs and one
of the outputs.

For advanced tests, a shift register is inserted in the input and output paths
that can be driven much faster than the chip IO would allow.

When mode is 0, the switch relays the trigger signal and the output shift
register performs regular rotations. This allows slow rotation from input
to output through the DUT to check the pipeline as well as preloading inputs
and reading outputs of the advanced tests.

When mode is 1, the switch gates the divided clock from the ring oscillator
using the trigger signal, and the output shift register captures the DUT output
into each of its bits according to the trigger running through a fast delay chain.
So on a trigger signal the preloaded inputs are played at the pace of the
divided clock and the DUT output is sampled into the output buffer at times
indicated by the delay chain.

Verilog sources for the design are in the
[`src`](https://github.com/htfab/cell-tester/tree/main/src)
directory, along with a cocotb testbench in
[`test.py`](https://github.com/htfab/cell-tester/blob/main/src/test.py).


### How to test

Note that the outputs are in pairs that should ideally behave in the
same way during the tests below.

###### Test 1

- Adjust inputs 0, 1 & 2 manually and check the outputs.
- Outputs 0 & 1 (`mux2i`) should equal the negation of `A0` (input 0) if `S` (input 2) is low,
  and the negation of `A1` (input 1) if `S` is high.
- Outputs 2 & 3 (`maj3`) should be high if at least two of inputs 0, 1 & 2 is high.
- Outputs 4 & 5 (`dlrtp`) should behave as a latch. If `RESET_B` (input 2) is low,
  the output should be low as well, otherwise it should relay `DATA` (input 0) if
  `GATE` (input 1) is high and keep its output when `GATE` is low.
- Outputs 6 & 7 (`dfrtp`) should behave as a flop. If `RESET_B` (input 2) is low,
  it should reset into the low state. Otherwise it should save the `DATA` (input 0)
  state when `CLK` (input 1) is low and update the output it when `CLK` is high.

###### Test 2

- Make sure the `mode` bit (input 3) is low.
- Adjust inputs 0, 1 & 2, and keep toggling the `trigger` bit (input 4).
- On each positive edge of the trigger, a set of inputs is pushed into the pipeline
  and the corresponding outputs should emerge on the bidirectional pins
  56 ticks later.

###### Test 3

- Set the `mode` bit (input 3) low.
- Preload a sequence of up to 12 inputs by adjusting pins 0, 1 & 2,
  then toggling the `trigger` bit (input 4) high and back low.
- Set the clock divider bits (inputs 5-7) as appropiate;
  zero should be fine for a first test.
- Set the `mode` bit (input 3) high.
- Toggle the `trigger` bit (input 4) high and back low.
- Set the `mode` bit (input 3) low.
- Read out the output sequence by toggling the
  `trigger` bit (input 4) up to 44 times.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | A0/A/D  | foundry mux2i direct | foundry mux2i instrumented |
| 1 | A1/B/GATE/CLK  | custom mux2i direct | custom mux2i instrumented |
| 2 | S/C/RESET_B  | foundry maj3 direct | foundry maj3 instrumented |
| 3 | mode bit  | custom maj3 direct | custom maj3 instrumented |
| 4 | trigger bit  | foundry dlrtp direct | foundry dlrtp instrumented |
| 5 | clock divider bit 0  | custom dlrtp direct | custom dlrtp instrumented |
| 6 | clock divider bit 1  | foundry dfrtp direct | foundry dfrtp instrumented |
| 7 | clock divider bit 2  | custom dfrtp direct | custom dfrtp instrumented |

### Chip location

{{< shuttle-map "tt05" "142" >}}
