---
hidden: true
title: "8 The McCoy 8-bit Microprocessor"
weight: 9
---

## 8 : The McCoy 8-bit Microprocessor

* Author: Aidan Good
* Description: Custom RISC-V inspired microprocessor capable of simple arithmatic, branching, and jumps through a custom ISA.
* [GitHub repository](https://github.com/AidanGood/tt02-McCoy)
* [Most recent GDS build](https://github.com/AidanGood/tt02-McCoy/actions/runs/3616269229)
* HDL project
* [Extra docs](https://github.com/cpldcpu/tinytapeout_mcpu5/blob/main/README.md)
* Clock: None Hz
* External hardware: Any source that allows for 16 GPIO pins. 8 to set the input pins, 8 to read the output pins.

Image path is broken

### How it works

This chip contains an opcode decoder, 8-bit ALU, 7 general purpose and 3 special purpose 6-bit registers, branch target selector, and other supporting structures all connected together to make a 1-stage microprocessor

### How to test

To put the processor in a valid state, hold the reset pin high for one clock cycle. Instructions can begin to be fed into the processor at the beginning of the next cycle when reset is set low. When the clock signal is high, the PC will be output. When the clock signal is low, the x8 register will be output. There are example programs in the testbench folder and a more thourough explaination in the project readme.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | out0 |
| 1 | reset  | out1 |
| 2 | in0  | out2 |
| 3 | in1  | out3 |
| 4 | in2  | out4 |
| 5 | in3  | out5 |
| 6 | in4  | out6 |
| 7 | in5  | out7 |
