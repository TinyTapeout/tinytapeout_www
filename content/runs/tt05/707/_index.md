---
hidden: true
title: "707 VGA clock"
weight: 48
---

## 707 : VGA clock

* Author: Matt Venn
* Description: Shows the time on a VGA screen
* [GitHub repository](https://github.com/mattvenn/tt04-vga-clock)
* [GDS submitted](https://github.com/mattvenn/tt04-vga-clock/actions/runs/6668773785)
* HDL project
* [Extra docs]()
* Clock: 31500000 Hz
* External hardware: R2R dac for the VGA signals

![picture](images/picture.jpg)

### How it works

Races the beam! Font is pre generated and loaded into registers. 6 bit colour keeps register count low.


### How to test

Hook up a VGA monitor to the outputs and provide a clock at 31.5 MHz. Connect the 6 bit colour output up with resistors to make
a R2R DAC. See the circuit here: https://github.com/mattvenn/6bit-pmod-vga


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock  | hsync | none |
| 1 | reset  | vsync | none |
| 2 | adjust hours  | r0 | none |
| 3 | adjust minutes  | r1 | none |
| 4 | adjust seconds  | g0 | none |
| 5 | none  | g1 | none |
| 6 | none  | b0 | none |
| 7 | none  | b1 | none |
