---
hidden: true
title: "98 Funny Blinky"
weight: 99
---

## 98 : 0b 001 100 010 : Funny Blinky

{{< tt-scanchain-switches "001100010" >}}

* Author: regymm
* Description: Blink the 8 output LEDs in a funny way.
* [GitHub repository](https://github.com/regymm/tt02-verilog-funnyblinky)
* [Most recent GDS build](https://github.com/regymm/tt02-verilog-funnyblinky/actions/runs/3565974284)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

.

### How to test

When function switch is turned off, all LEDs will be blinky. When switch is on, it works as a double 14-bit counter, to be used together with the mcpi module -- in this case we have pause switch and two output control switches to show all bits of the counters. 

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led 0 |
| 1 | reset  | led 1 |
| 2 | none  | led 2 |
| 3 | none  | led 3 |
| 4 | switch out ctrl 0  | led 4 |
| 5 | switch out ctrl 1  | led 5 |
| 6 | switch pause  | led 6 |
| 7 | switch function  | led 7 |
