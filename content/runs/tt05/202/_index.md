---
hidden: true
title: "202 Miniature Programmable Interrupt Timer"
weight: 102
---

## 202 : Miniature Programmable Interrupt Timer

* Author: Steve Jenson
* Description: When the given 16-bit counter reaches 0 an interrupt pin is asserted for one clock cycle.
* [GitHub repository](https://github.com/stevej/tt05-minipit-stevej)
* [GDS submitted](https://github.com/stevej/tt05-minipit-stevej/actions/runs/6727637981)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

A minimal clone of a programmable interrupt timer. Inspried by the Intel 8253 but without most of the features or headaches. See the `README.md` for detailed documentation.


### How to test

set input pins to 0x00. pull write enable high, address line 0 low, address line 0 low.
set input pins to 0x10, pull write enable high, address line 0 low, address line 1 high.
pull bidi pin 3 (timer_start) high, count 10 clock cycles and see if the interrupt pin has pulled high for 1 cycle


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | config[0] - use a clock divider  | divider on? | /we write enable for config |
| 1 | config[1] - repeat the interrupt?  | counter set? | set config address 0 |
| 2 | config[2]  | pit active? | set config address 1 |
| 3 | config[3]  | pit in reset? | start the timer |
| 4 | config[4]  | pit currently interrupting? | none |
| 5 | config[5]  | f | none |
| 6 | config[6]  | g | none |
| 7 | config[7]  | h | none |
