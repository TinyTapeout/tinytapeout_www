---
hidden: true
title: "52 Neptune guitar tuner (proportional window)"
weight: 53
---

## 52 : Neptune guitar tuner (proportional window)

* Author: Pat Deegan
* Description: It's a guitar tuner!  and so much more... (TODO)
* [GitHub repository](https://github.com/psychogenic/tt03_neptune_proportional)
* [Most recent GDS build](https://github.com/psychogenic/tt03_neptune_proportional/actions/runs/4759768398)
* HDL project
* [Extra docs](https://github.com/psychogenic/neptune/blob/main/README.md)
* Clock: 1000 Hz
* External hardware: The analog input signal must be massaged into clean digital.  See the Neptune project for details https://github.com/psychogenic/neptune

![picture](images/neptuneproject.jpg)

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
| 2 | clock config A  | segment c |
| 3 | clock config B  | segment d |
| 4 | measured frequency input pulses  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | display select |
