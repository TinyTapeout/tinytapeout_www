---
hidden: true
title: "54 7 segment seconds"
weight: 55
---

## 54 : 0b 000 110 110 : 7 segment seconds

{{< tt-scanchain-switches "000110110" >}}

* Author: Matt Venn
* Description: Count up to 10, one second at a time.
* [GitHub repository](https://github.com/tinytapeout/tt03-verilog-demo)
* [Most recent GDS build](https://github.com/TinyTapeout/tt03-verilog-demo/actions/runs/4731585945)
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
