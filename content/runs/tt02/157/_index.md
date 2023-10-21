---
hidden: true
title: "157 7 segment seconds"
weight: 158
---

## number : 0b010011101 : 7 segment seconds

* Author: Matt Venn
* Description: count up to 10, one second at a time
* [GitHub repository](https://github.com/TinyTapeout/tt02-verilog-demo)
* [Most recent GDS build](https://github.com/TinyTapeout/tt02-verilog-demo/actions/runs/3594376534)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

uses a register and some combinational logic

### How to test

after reset, the counter should increase by one every second

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
| 7 | none  | none |
