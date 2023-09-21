---
hidden: true
title: "176 LED Matrix Driver"
weight: 64
---

## 176 : LED Matrix Driver

* Author: Michael Bella
* Description: Serial data input 8x8 common anode led matrix driver.
* [GitHub repository](https://github.com/mjbella/tt04-led-matrix-driver)
* [GDS submitted](https://github.com/mjbella/tt04-led-matrix-driver/actions/runs/6117911895)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Uses a set of registers to divide the clock, and then some combinational logic
to convert from binary to decimal for the display.

Puts the bottom 8 bits of the counter on the bidirectional outputs.

With all the inputs set to 0, the internal 24 bit compare is set to 10,000,000. This means the
counter will increment by one each second.

If any inputs are non zero, then the input will be used as an bits 11 to 18 of the 24 bit compare register.
Example: setting the inputs to 00010000 will program 16384 into the compare register.
With a 10MHz clock the counter will increment ~610 times per second.


### How to test

After reset, the counter should increase by one every second with a 10MHz input clock.
Experiment by changing the inputs to change the counting speed.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | compare bit 11  | segment a | second counter bit 0 |
| 1 | compare bit 12  | segment b | second counter bit 1 |
| 2 | compare bit 13  | segment c | second counter bit 2 |
| 3 | compare bit 14  | segment d | second counter bit 3 |
| 4 | compare bit 15  | segment e | second counter bit 4 |
| 5 | compare bit 16  | segment f | second counter bit 5 |
| 6 | compare bit 17  | segment g | second counter bit 6 |
| 7 | compare bit 18  | dot | second counter bit 7 |
