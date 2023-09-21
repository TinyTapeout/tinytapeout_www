---
hidden: true
title: "166 Ripple-Carry Adder"
weight: 72
---

## 166 : Ripple-Carry Adder

* Author: Yannick Reiß
* Description: Add two bytes.
* [GitHub repository](https://github.com/yannickreiss/tt04-ripple-carry-adder)
* [GDS submitted](https://github.com/yannickreiss/tt04-ripple-carry-adder/actions/runs/6040188757)
* [Wokwi](https://wokwi.com/projects/374292646686728193) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 16 input devices, 8 output devices



### How it works

Combination of one half adder and 7 full adder, directly connected.


### How to test

Connect switches to set the input bytes.
Use LEDs or some other kind of output device to view the sum of the two input bytes.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | MSB Byte 1  | MSB Result | MSB Byte 2 |
| 1 | 6  | 6 | 6 |
| 2 | 5  | 5 | 5 |
| 3 | 4  | 4 | 4 |
| 4 | 3  | 3 | 3 |
| 5 | 2  | 2 | 2 |
| 6 | 1  | 1 | 1 |
| 7 | LSB Byte 1  | LSB Result | LSB Byte 2 |
