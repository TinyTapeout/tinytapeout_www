---
hidden: true
title: "905 VGA Experiments in Tennis"
weight: 58
---

## 905 : VGA Experiments in Tennis

* Author: Tom Keddie
* Description: Simple Game
* [GitHub repository](https://github.com/TomKeddie/tinytapeout-2024-tt06a)
* [GDS submitted](https://github.com/TomKeddie/tinytapeout-2024-tt06a/actions/runs/8660857832)
* HDL project
* [Extra docs](None)
* Clock: 25175000 Hz

### How it works

VGA game using paddles attached to input.

### How to test

Attach VGA pmod and connect to monitor.  Use the inputs to move the paddles

### External Hardware

Digilent VGA PMOD or mole99 vga pmod.
Buttons to play game on in0-in3


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | left paddle up | r1/r0 (mole99/digilent) | g0 |
| 1 | left paddle down | g1/r1 (mole99/digilent) | g1 |
| 2 | right paddle up | b1/r2 (mole99/digilent) | g2 |
| 3 | right paddle down | vsync/r3 (mole99/digilent) | g3 |
| 4 | score reset | r0/b0 (mole99/digilent) | hsync |
| 5 | Speed LSB | g0/b1 (mole99/digilent) | vsync |
| 6 | Speed MSB | b0/b2 (mole99/digilent) | tied low |
| 7 | pmod sel (high=mole99, low=digilent) | hsync/b3 (mole99/digilent) | tied low |

### Chip location

{{< shuttle-map "tt06" "905" >}}
