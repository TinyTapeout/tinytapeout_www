---
hidden: true
title: "51 XLS: 8-bit counter"
weight: 52
---

## 51 : 0b000110011 : XLS: 8-bit counter

* Author: proppy
* Description: Increment output bits
* [GitHub repository](https://github.com/proppy/tt02-xls-counter)
* [Most recent GDS build](https://github.com/proppy/tt02-xls-counter/actions/runs/3728611750)
* HDL project
* [Extra docs](https://github.com/proppy/tt02-xls-counter/blob/main/README.md)
* Clock: 10 Hz
* External hardware: LEDs, pull-up/down resistors

![picture](images/counter.svg)

### How it works

Implement a simple counter using https://google.github.io/xls/tutorials/intro_to_procs/

### How to test

Set the reset bit once, toggle the clock once, unset the reset bit and keep toggling the clock

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | count0 |
| 1 | reset  | count1 |
| 2 | none  | count2 |
| 3 | none  | count3 |
| 4 | none  | count4 |
| 5 | none  | count5 |
| 6 | none  | count6 |
| 7 | none  | count7 |
