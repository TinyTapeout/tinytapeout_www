---
hidden: true
title: "322 Digital Desk Clock"
weight: 61
---

## 322 : Digital Desk Clock

* Author: Samuel Ellicott
* Description: Simple Digital Clock Project.
* [GitHub repository](https://github.com/sellicott/sellicott_tt5_digital_clock)
* [GDS submitted](https://github.com/sellicott/sellicott_tt5_digital_clock/actions/runs/6756640727)
* HDL project
* [Extra docs](https://github.com/sellicott/sellicott_tt5_digital_clock/blob/main/README.md)
* Clock: 5000000 Hz
* External hardware: shift registers, 7-segment displays



### How it works

Simple digital clock, displays hours, minutes, and seconds in either a 24h format.
Since there are not enough output pins to directly drive a 6x
7-segment displays, the data is shifted out serially using an internal 8-bit shift register.
The shift register drives 6-external 74xx596 shift registers to the displays. Clock and control
signals (`serial_clk`, `serial_latch`) are also used to shift and latch the data into the external
shift registers respectively. The time can be set using the `hours_set` and `minutes_set` inputs.
If `set_fast` is high, then the the hours or minutes will be incremented at a rate of 5Hz,
otherwise it will be set at a rate of 2Hz. Note that when setting either the minutes, rolling-over
will not affect the hours setting. If both `hours_set` and `minutes_set` are presssed at the same time
the seconds will be cleared to zero.


### How to test

Connect serial output to a 6x 8-bit shift registers to display the output on 6x 7-segment displays


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | refclk  | serial_data | none |
| 1 | use_refclk  | serial_latch | none |
| 2 | fast_set  | serial_clk | none |
| 3 | hours_set  | none | none |
| 4 | minutes_set  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
