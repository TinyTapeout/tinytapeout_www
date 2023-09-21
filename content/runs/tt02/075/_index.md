---
hidden: true
title: "75 Ring OSC Speed Test"
weight: 76
---

## 75 : Ring OSC Speed Test

* Author: Eric Smith
* Description: Make two rings with the same number of stages but measure how their frequency differs.  Measure if they can influence eachother.
* [GitHub repository](https://github.com/ericsmi/tt02-verilog-ring-osc-demo)
* [Most recent GDS build](https://github.com/ericsmi/tt02-verilog-ring-osc-demo/actions/runs/3597983245)
* HDL project
* [Extra docs]()
* Clock: 6000 Hz
* External hardware: Something to sequence nrst, ring_en, trig and the sel bits

![picture](images/tt_speed_test.pdf)

### How it works

uses a register and some combinational logic

### How to test

after reset, assert trigger.  Use sel bits to get result

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | out[0] |
| 1 | nreset  | out[1] |
| 2 | trig  | out[2] |
| 3 | sel[0]  | out[3] |
| 4 | sel[1]  | out[4] |
| 5 | sel[2]  | out[5] |
| 6 | ring_en[0]  | out[6] |
| 7 | ring_en[1]  | out[7] |
