---
hidden: true
title: "651 Neptune guitar tuner (proportional window, version b, debug output on bidir pins, larger set of frequencies)"
weight: 16
---

## 651 : Neptune guitar tuner (proportional window, version b, debug output on bidir pins, larger set of frequencies)

* Author: Pat Deegan
* Description: It's a guitar tuner!  and so much more... 
* [GitHub repository](https://github.com/psychogenic/tt04-neptune)
* [GDS submitted](https://github.com/psychogenic/tt04-neptune/actions/runs/6519352258)
* HDL project
* [Extra docs](https://inductive-kickback.com/projects/neptune/)
* Clock: 1000 Hz
* External hardware: Digital input required: may need massaging if looking at actual guitar signals... see documentation

Image path is broken

### How it works

The rising edge of the input is counted over a set period of time
and attempt is made to tell if this count is at, or near, a
frequency of interest--namely the E,A,D,G,B notes of guitar
standard tuning.
In this version, the system should be capable of detecting:
E2,A2,A3,B3,D3,E3,G3,D4,E4 and G4 so from about ~80 to 400 Hz.
Clock config settings (using 3 input bits)
0: 1kHz
1: 2kHz
2: 4kHz
3: 3.277kHz
4: 10 kHz
5: 32.768kHz
6: 40kHz
7: 60kHz


### How to test

Set the clocking bits to 0b000 for a 1kHz clock input (input bits
2,3 and 4).
Input pulses are fed to input bit 5.  The raw count of pulses over
the sampling period (hard-coded here to 0.5 seconds) is output on
the bidir pins.  The output is setup to drive a dual 7-segment display, or a single 7-segment (by using the output_display bits on
the input).  In single mode, the 7-seg dot marks exact match.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | n/a  | segment a | raw input pulse count bit 0 |
| 1 | n/a  | segment b | raw input pulse count bit 1 |
| 2 | clk config 0  | segment c | raw input pulse count bit 2 |
| 3 | clk config 1  | segment d | raw input pulse count bit 3 |
| 4 | clk config 2  | segment e | raw input pulse count bit 4 |
| 5 | input pulse  | segment f | raw input pulse count bit 5 |
| 6 | output display single enable (LOW == dual)  | segment g | raw input pulse count bit 6 |
| 7 | output display select  | dot or select (for dual) | raw input pulse count bit 7 |
