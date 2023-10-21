---
hidden: true
title: "42 XLS: bit population count"
weight: 43
---

## 42 : 0b000101010 : XLS: bit population count

* Author: proppy
* Description: Count bits set in the input.
* [GitHub repository](https://github.com/proppy/tt02-xls-popcount)
* [Most recent GDS build](https://github.com/proppy/tt02-xls-popcount/actions/runs/3540723892)
* HDL project
* [Extra docs](https://github.com/proppy/tt02-xls-popcount/blob/main/README.md)
* Clock: 0 Hz
* External hardware: LEDs and resistors

![picture](images/popcount.svg)

### How it works

https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel

### How to test

Pull up input bits, check that output bits represent the count.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | bit0  | count0 |
| 1 | bit1  | count1 |
| 2 | bit2  | count2 |
| 3 | bit3  | count3 |
| 4 | bit4  | count4 |
| 5 | bit5  | count5 |
| 6 | bit6  | count6 |
| 7 | bit7  | count7 |
