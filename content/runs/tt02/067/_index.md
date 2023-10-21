---
hidden: true
title: "67 SQRT1 Square Root Engine"
weight: 68
---

## 67 : 0b 001 000 011 : SQRT1 Square Root Engine

* Author: Davit Margarian (UDXS)
* Description: Computes 4.2 fixed-point square root for any 7-bit integer
* [GitHub repository](https://github.com/UDXS/sqrt-tt02)
* [Most recent GDS build](https://github.com/UDXS/sqrt-tt02/actions/runs/3527098409)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: Optionally, binary to BCD converter for output



### How it works

This uses Newton's method to solve sqrt in 3 cycles.

### How to test

Set a 7-bit input value and toggle clock 3 times. After, the output will be correct, rounded down to the nearest 4th.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | frac1 |
| 1 | i1  | frac2 |
| 2 | i2  | whole1 |
| 3 | i3  | whole2 |
| 4 | i4  | whole3 |
| 5 | i5  | whole4 |
| 6 | i6  | none |
| 7 | i7  | none |
