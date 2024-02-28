---
hidden: true
title: "199 Rotary Encoder Counter"
weight: 200
---

## 199 : 0b 011 000 111 : Rotary Encoder Counter

{{< tt-scanchain-switches "011000111" >}}

* Author: Vaishnav Achath
* Description: Count Up/Down on the 7-segment accouring to rotary encoder input
* [GitHub repository](https://github.com/vaishnavachath/tt02-submission-rotary-encoder-counter)
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
