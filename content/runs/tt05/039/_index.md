---
hidden: true
title: "39 Matrix Multiplier"
weight: 143
---

## 39 : Matrix Multiplier

* Author: Erik Mercado
* Description: Multiple Matrices.
* [GitHub repository](https://github.com/mercadoerik1031/tt05-matrix-multiplier-demo)
* [GDS submitted](https://github.com/mercadoerik1031/tt05-matrix-multiplier-demo/actions/runs/6751243267)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

tt_um_matrix_multiplier:

This module performs a multiplication of two 2x2 matrices, where each element is an unsigned 2-bit number.
The matrices are input via 8-bit wires (ui_in and uio_in), where every 2 bits represent an element.
Error checking is done to ensure that each element is within the range [0, 2].
If there's an error, the output is set to zero; otherwise, the multiplication result is returned via uo_out and uio_out.
The module also provides a uio_oe output signal that serves as an output enable for the resultant matrix.

tb (testbench):

This is the simulation testbench for the tt_um_matrix_multiplier module.
It toggles a clock signal, initializes input values, and instantiates the tt_um_matrix_multiplier.
The testbench is set up to generate VCD files, allowing for waveform viewing using tools like GTKWave.

test.py:

This Python script uses the cocotb framework to test the matrix multiplication functionality.
Helper functions are provided to convert 2x2 matrices to binary representations and vice-versa.
A list of test matrices and expected results is present.
For each test case, the script inputs matrices, waits for the multiplication result, and checks against the expected result.
The test concludes by logging a success message if all test cases pass.


### How to test

Synthesize and Implement: Use an FPGA toolchain to synthesize the Verilog code and implement it on a suitable FPGA.
Simulation: Use a simulator compatible with Verilog (like ModelSim or Icarus Verilog) to run the testbench (tb.v). You can view the generated VCD file with a tool like GTKWave to visualize the waveform.

Cocotb Test:
Setup the cocotb environment and necessary dependencies.
Use the test.py script to run the cocotb test. Monitor the test output to ensure that all matrix tests pass.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | compare bit 11  | segment a | second counter bit 0 |
| 1 | compare bit 12  | segment b | second counter bit 1 |
| 2 | compare bit 13  | segment c | second counter bit 2 |
| 3 | compare bit 14  | segment d | second counter bit 3 |
| 4 | compare bit 15  | segment e | second counter bit 4 |
| 5 | compare bit 16  | segment f | second counter bit 5 |
| 6 | compare bit 17  | segment g | second counter bit 6 |
| 7 | compare bit 18  | dot | second counter bit 7 |

### Chip location

{{< shuttle-map "tt05" "39" >}}
