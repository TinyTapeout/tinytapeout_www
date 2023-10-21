---
hidden: true
title: "87 BCD to 7-Segment Decoder"
weight: 88
---

## number : 0b001010111 : BCD to 7-Segment Decoder

* Author: JinGen Lim
* Description: Converts a BCD input into a 7-segment display output
* [GitHub repository](https://github.com/jglim/tt02-bcd-7seg)
* [Most recent GDS build](https://github.com/jglim/tt02-bcd-7seg/actions/runs/3562022687)
* [Wokwi](https://wokwi.com/projects/349546262775726676) project
* [Extra docs](https://github.com/jglim/tt02-bcd-7seg/blob/main/README.md)
* Clock: 0 Hz
* External hardware: 7-segment display

![picture](images/ds.svg)

### How it works

The IC accepts four binary-coded decimal input signals, and generates a corresponding 7-segment output signal

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
