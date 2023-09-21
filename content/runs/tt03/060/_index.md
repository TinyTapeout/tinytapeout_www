---
hidden: true
title: "60 7 segment seconds"
weight: 61
---

## 60 : 7 segment seconds

* Author: Matt Venn
* Description: Count up to 10, one second at a time.
* [GitHub repository](https://github.com/kevinwguan/tt03-mmm-verilog)
* [Most recent GDS build](https://github.com/kevinwguan/tt03-mmm-verilog/actions/runs/4790256160)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Uses a set of registers to divide the clock, and then some combinational logic
to convert from binary to decimal for the display.

Puts a slower square wave output on output 7.


### How to test

After reset, the counter should increase by one every second.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | slow clock output |
