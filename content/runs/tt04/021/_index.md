---
hidden: true
title: "21 PWM audio"
weight: 5
---

## 21 : PWM audio

* Author: Yeo Kheng Meng
* Description: Takes in 8-bit audio over a parallel (port) interface then generates an analog audio signal like a Covox Speech Thing.
* [GitHub repository](https://github.com/yeokm1/tt4-pwm-audio)
* [GDS submitted](https://github.com/yeokm1/tt4-pwm-audio/actions/runs/5918254226)
* HDL project
* [Extra docs](https://github.com/yeokm1/tt4-pwm-audio/blob/main/README.md)
* Clock: 10000000 Hz
* External hardware: A 0.1uF capacitor to ground is recommended on the 2 audio output pins



### How it works

This is meant as a parallel port sound card like a Covox Speech Thing. Instead of R-2R resistors, the chip will generate the analog audio output using PWM and First-order sigma-delta modulator.


### How to test

No particular test required.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Bit 0 of Parallel port (LSB)  | Standard PWM audio output | Direct from input 0 |
| 1 | Bit 1 of Parallel port  | Sigma-delta modulator output | Direct from input 1 |
| 2 | Bit 2 of Parallel port  | From ena pin | Direct from input 2 |
| 3 | Bit 3 of Parallel port  | From clk pin | Direct from input 3 |
| 4 | Bit 4 of Parallel port  | From rst_n pin | Direct from input 4 |
| 5 | Bit 5 of Parallel port  | Static 1 | Direct from input 5 |
| 6 | Bit 6 of Parallel port  | Static 0 | Direct from input 6 |
| 7 | Bit 7 of Parallel port (MSB)  | Static 1 | Direct from input 7 |
