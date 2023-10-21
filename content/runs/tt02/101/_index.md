---
hidden: true
title: "101 BCD to Hex 7-Segment Decoder"
weight: 102
---

## number : 0b001100101 : BCD to Hex 7-Segment Decoder

* Author: JinGen Lim
* Description: Converts a 4-bit BCD input into a hexadecimal 7-segment display output
* [GitHub repository](https://github.com/jglim/tt02-bcd-hex7seg-hdl)
* [Most recent GDS build](https://github.com/jglim/tt02-bcd-hex7seg-hdl/actions/runs/3580984729)
* HDL project
* [Extra docs](https://github.com/jglim/tt02-bcd-hex7seg-hdl/blob/main/README.md)
* Clock: 0 Hz
* External hardware: 7-segment display



### How it works

The IC accepts four binary-coded decimal input signals, and generates a corresponding hexadecimal 7-segment output signal. Segment outputs may be inverted with the INVERT pin to support both common cathode/anode displays.

### How to test

Connect the segment outputs to a 7-segment display. Configure the input (IN0:0, IN1:2, IN2:4, IN3:8). The input value will be shown on the 7-segment display

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | input 1 (BCD 1)  | segment a |
| 1 | input 2 (BCD 2)  | segment b |
| 2 | input 3 (BCD 4)  | segment c |
| 3 | input 4 (BCD 8)  | segment d |
| 4 | decimal dot (passthrough)  | segment e |
| 5 | output invert  | segment f |
| 6 | none  | segment g |
| 7 | none  | segment dot |
