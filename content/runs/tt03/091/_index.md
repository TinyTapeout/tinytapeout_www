---
hidden: true
title: "91 Simple adder used for educational purposes"
weight: 92
---

## 91 : 0b 001 011 011 : Simple adder used for educational purposes

{{< tt-scanchain-switches "001011011" >}}

* Author: Francisco Brito Filho
* Description: Simple adder used for educational purposes described in VHDL and ported to verilog using ghdl plugin.
* [GitHub repository](https://github.com/staydh/tt03-verilog-adder4b)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The adder was adapted from its 8-bit version. See https://github.com/britovski/adder


### How to test

See the testbenchs on the previous github repo.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | i0[3]  | s[3] |
| 1 | i0[2]  | s[2] |
| 2 | i0[1]  | s[1] |
| 3 | i0[0]  | s[0] |
| 4 | i1[3]  | co |
| 5 | i1[2]  | none |
| 6 | i1[1]  | none |
| 7 | i1[0]  | none |
