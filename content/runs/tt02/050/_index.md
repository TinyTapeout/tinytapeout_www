---
hidden: true
title: "50 TinyTapeout2 multiplexed segment display timer."
weight: 51
---

## 50 : 0b000110010 : TinyTapeout2 multiplexed segment display timer.

* Author: Tholin
* Description: Measures time up to 99 minutes and 59 seconds by multiplexing 4 seven-segment displays.
* [GitHub repository](https://github.com/89Mods/tt2-multiplexed-counter)
* [Most recent GDS build](https://github.com/AvalonSemiconductors/tt2-multiplexed-counter/actions/runs/3603952664)
* HDL project
* [Extra docs]()
* Clock: 1024 Hz
* External hardware: 4 sevent segment displays, plus some 74-series chips to build the select logic.



### How it works

TODO

### How to test

TODO

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | CLK  | A |
| 1 | RST  | B |
| 2 | NC  | C |
| 3 | NC  | D |
| 4 | NC  | E |
| 5 | NC  | F |
| 6 | NC  | G |
| 7 | NC  | SEL |
