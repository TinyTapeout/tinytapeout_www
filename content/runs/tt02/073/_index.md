---
hidden: true
title: "73 7-channel PWM driver controlled via SPI bus"
weight: 74
---

## 73 : 7-channel PWM driver controlled via SPI bus

* Author: Ivan Krasin
* Description: PWM driver with 7 channels and 256 PWM levels from 0 to 1
* [GitHub repository](https://github.com/krasin/tt02-verilog-spi-7-channel-pwm-driver)
* [Most recent GDS build](https://github.com/krasin/tt02-verilog-spi-7-channel-pwm-driver/actions/runs/3538860132)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

uses a 8-bit counter to drive PWM on 7 output channels. Each channel is controlled by a dedicated 8-bit register that specifies its PWM level: 0 means always off, 1 is for 1/255 on, 5 is for 5/255 on and 255 is 255/255 (always on)

### How to test

after reset, all output pins will be low. Use SPI writes with register addresses (0..6) to set 8-bit PWM levels. The corresponding pin will start oscillating between 0 and 1 according to the clock and the set level.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | out0 |
| 1 | reset  | out1 |
| 2 | cs  | out2 |
| 3 | sclk  | out3 |
| 4 | mosi  | out4 |
| 5 | reserved  | out5 |
| 6 | reserved  | out6 |
| 7 | reserved  | miso |
