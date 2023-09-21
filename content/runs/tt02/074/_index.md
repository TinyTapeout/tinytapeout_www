---
hidden: true
title: "74 hex shift register"
weight: 75
---

## 74 : hex shift register

* Author: Eric Smith
* Description: six 40-bit shift registers
* [GitHub repository](https://github.com/brouhaha/tt02-hex-sr)
* [Most recent GDS build](https://github.com/brouhaha/tt02-hex-sr/actions/runs/3530029132)
* HDL project
* [Extra docs](https://github.com/brouhaha/tt02-hex-sr/blob/main/README.md)
* Clock:  Hz
* External hardware: 



### How it works

Six 40-bit shift registers. A multiplexer selects input data or recirulating output data.

### How to test

on each clock n, six bits are shifted in, and the six bits that were input at clock n-4 are output

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | none |
| 1 | recirc  | none |
| 2 | data_in[0]  | data_out[0] |
| 3 | data_in[1]  | data_out[1] |
| 4 | data_in[2]  | data_out[2] |
| 5 | data_in[3]  | data_out[3] |
| 6 | data_in[4]  | data_out[4] |
| 7 | data_in[5]  | data_out[5] |
