---
hidden: true
title: "235 Basic 4 bit cpu "
weight: 236
---

## 235 : 0b 011 101 011 : Basic 4 bit cpu 

{{< tt-scanchain-switches "011101011" >}}

* Author: Noah Gaertner
* Description: 4-bit CPU that does add, subtract, multiply, left and right shifts, conditional jump based on external signal, logical and bitwise AND and OR, equality and inequality checking, bitwise inversion, and logical NOT
* [GitHub repository](https://github.com/noahgaertner/tt02-verilog-demo)
* HDL project
* [Extra docs](https://github.com/noahgaertner/tt02-verilog-demo/blob/main/README.md)
* Clock: 50K (or lower, whatever) Hz
* External hardware: test pattern generator, output reader (will probably work with just an arduino for both)

![picture](images/pic.png)

### How it works

Implements a highly reduced ISA that fits on the limited allowed space, and uses a 4-bit bus to get the program and data values in and out of the chip, in addition to a two bit bus to tell it what to do at any given time, as well as a clock and reset signal

### How to test

Write a program for the ISA and try to run it! Remember you need to synchronously RESET and then SETRUNPT to the proper value before you try to do anything!

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | program counter |
| 1 | reset  | program counter |
| 2 | instruction  | program counter |
| 3 | instruction  | program counter |
| 4 | data  | output data |
| 5 | data  | output data |
| 6 | data  | output data |
| 7 | data  | output data |
