---
hidden: true
title: "107 REBEL-2 Balanced Ternary ALU"
weight: 57
---

## 107 : REBEL-2 Balanced Ternary ALU

* Author: Ole Christian Moholth and Steven Bos
* Description: This 2-trit balanced ternary ALU is part of the REBEL-2 balanced ternary logic CPU
* [GitHub repository](https://github.com/aiunderstand/tt05-REBEL2-balanced-ternary-ALU)
* [GDS submitted](https://github.com/aiunderstand/tt05-REBEL2-balanced-ternary-ALU/actions/runs/6752116681)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

WIP. This balanced ternary ALU has several operations based on a novel REBEL-2 ISA. Operations include MIN,MAX,ADD,SUB,MUL,CMP,SHFT and can be done trit-wise or word-wise. This project is designed, generated and verified with Mixed Radix Circuit Synthesizer (MRCS).


### How to test

There are many automated test included for MRCS. A verilog testbench for FPGA and FPGA constraint file is WIP.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ui_in[7]  func2H  | uo_out[7] carryH | uio_in[7] b0H |
| 1 | ui_in[6]  func2L  | uo_out[6] carryL | uio_in[6] b0L |
| 2 | ui_in[5]  func1H  | uo_out[5] out1H | uio_in[5] a1H |
| 3 | ui_in[4]  func1L  | uo_out[4] out1L | uio_in[4] a1L |
| 4 | ui_in[3]  func0H  | uo_out[3] out0H | uio_in[3] a0H |
| 5 | ui_in[2]  func0L  | uo_out[2] out0L | uio_in[2] a0L |
| 6 | ui_in[1]  b1H  | uo_out[1] unused | uio_in[1] unused |
| 7 | ui_in[0]  b1L  | uo_out[0] unused | uio_in[0] unused |

### Chip location

{{< shuttle-map "tt05" "107" >}}
