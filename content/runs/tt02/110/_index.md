---
hidden: true
title: "110 Rotary Encoder Counter"
weight: 111
---

## 110 : 0b 001 101 110 : Rotary Encoder Counter

{{< tt-scanchain-switches "001101110" >}}

* Author: Vaishnav Achath
* Description: Count Up/Down on the 7-segment accouring to rotary encoder input
* [GitHub repository](https://github.com/vaishnavachath/tt02-submission-rotary-encoder-counter)
* [Most recent GDS build](https://github.com/vaishnavachath/tt02-submission-rotary-encoder-counter/actions/runs/3595979401)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: Rotary Encoder



### How it works

uses a register and some combinational logic

### How to test

Provides test mode enable to use input clock and inverted ip/clock as emulated encoder CLK/Data

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset_rotary_SW  | segment b |
| 2 | rotary_outa  | segment c |
| 3 | rotary_outb  | segment d |
| 4 | test_mode_enable  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
