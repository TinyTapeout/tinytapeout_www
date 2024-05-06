---
hidden: true
title: "905 VGA Experiments in Tennis"
weight: 57
---

## 905 : VGA Experiments in Tennis

* Author: Tom Keddie
* Description: Simple Game
* [GitHub repository](https://github.com/TomKeddie/tinytapeout-2024-tt06a)
* [GDS submitted](https://github.com/TomKeddie/tinytapeout-2024-tt06a/actions/runs/8660857832)
* HDL project
* [Extra docs]()
* Clock: 25175000 Hz

### How it works

VGA game using paddles attached to input.

### How to test

Attach VGA pmod and connect to monitor.  Use the inputs to move the paddles

### External Hardware

Digilent VGA PMOD or mole99 vga pmod.
Buttons to play game on in0-in3


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | left paddle up  | r1/r0 (mole99/digilent)  |      |
| 1 | left paddle down  | g1/r1 (mole99/digilent)  |      |
| 2 | right paddle up  | b1/r2 (mole99/digilent)  |      |
| 3 | right paddle down  | vsync/r3 (mole99/digilent)  |      |
| 4 | score reset  | r0/b0 (mole99/digilent)  |      |
| 5 | Speed LSB  | g0/b1 (mole99/digilent)  |      |
| 6 | Speed MSB  | b0/b2 (mole99/digilent)  |      |
| 7 | pmod sel (high=mole99, low=digilent)  | hsync/b3 (mole99/digilent)  |      |


### Chip location

{{< shuttle-map "tt06" "905" >}}
