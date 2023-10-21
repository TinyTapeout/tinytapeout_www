---
hidden: true
title: "26 RGB LED Matrix Driver"
weight: 27
---

## 26 : 0b 000 011 010 : RGB LED Matrix Driver

* Author: Matt M
* Description: Drives a simple animation on SparkFun's RGB LED 8x8 matrix backpack
* [GitHub repository](https://github.com/mm21/tinytapeout2-led-matrix)
* [Most recent GDS build](https://github.com/mm21/tinytapeout2-led-matrix/actions/runs/3452839947)
* HDL project
* [Extra docs]()
* Clock: 6250 Hz
* External hardware: RGB LED matrix backpack from SparkFun: https://www.sparkfun.com/products/retired/760



### How it works

Implements an SPI master to drive an animation with overlapping green/blue waves and a moving white diagonal. Some 7-segment wires are used for a 'sanity check' animation.

### How to test

Wire accordingly and use a clock up to 12.5 KHz. Asynchronous reset is synchronized to the clock.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | SCLK |
| 1 | reset  | MOSI |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | nCS |
| 6 | none  | segment g |
| 7 | none  | none (always high) |
