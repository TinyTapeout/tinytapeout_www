---
hidden: true
title: "226 multimac"
weight: 182
---

## 226 : multimac

* Author: Jonny Edwards
* Description: a multi use multi-hit dot product accelerator
* [GitHub repository](https://github.com/Fountaincoder/multimac)
* [GDS submitted](https://github.com/Fountaincoder/multimac/actions/runs/8630222082)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

### How it works

This is a simple circuit to calculate:

- a vector dot product ie the sum of `w_i*x_i` where `i` can be anything up to about 40 (`insn=2`)
- Minimum of a list of data (`insn=0`)
- Maximum of a list of data (`insn=1`)

It has been designed as a coprocessor. The data is first added by setting `load=1` and then supplying the data
for the dot product the `index` and `data`. Each set is a `w`,`x` pair. Its a 4 bit system and runs when `run=1` and needs at least 16 clock cycles produce the answer. The answer is 12 bit value.

### How to test

I've tested this using a verilator simulation included below - I like the `cpp` workbench for this. The testing has been mainly for numerical stability.

### External hardware

I intend for this to be driven by the RP2040 and to work as a "coprocessor" for vector calculations
Other.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | index[0] | out[0] | out[8] |
| 1 | index[1] | out[1] | out[9] |
| 2 | index[2] | out[2] | out[10] |
| 3 | index[3] | out[3] | out[11] |
| 4 | data[0] | out[4] | instruction [0] |
| 5 | data[1] | out[5] | instruction [1] |
| 6 | data[2] | out[6] | load |
| 7 | data[3] | out[7] | run |

### Chip location

{{< shuttle-map "tt06" "226" >}}
