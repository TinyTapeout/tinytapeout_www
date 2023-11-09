---
hidden: true
title: "713 RGB Mixer"
weight: 97
---

## 713 : RGB Mixer

* Author: Matt Venn
* Description: Use 3 rotary encoder to control 3 PWM generators
* [GitHub repository](https://github.com/mattvenn/tt04-rgb-mixer)
* [GDS submitted](https://github.com/mattvenn/tt04-rgb-mixer/actions/runs/6533065060)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

3 PWM generators are fed by 3 debounced encoder peripherals.


### How to test

Connect 3 digital rotary encoders to the first 6 inputs. Changing the encoders will change the PWM outputs on the first 3 outputs.

Select a channel with the debug enc sel bits and that channel's encoder internal value will be output to the bidirectional outputs.
The output of the 2 debouncers will also be output.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | encoder 0 pin a  | pwm 0 | debug encoder bit 0 |
| 1 | encoder 0 pin b  | pwm 1 | debug encoder bit 1 |
| 2 | encoder 1 pin a  | pwm 2 | debug encoder bit 2 |
| 3 | encoder 1 pin b  | debug debounce a | debug encoder bit 3 |
| 4 | encoder 2 pin a  | debug debounce b | debug encoder bit 4 |
| 5 | encoder 2 pin b  | n/a | debug encoder bit 5 |
| 6 | debug encoder select bit 0  | n/a | debug encoder bit 6 |
| 7 | debug encoder select bit 1  | n/a | debug encoder bit 7 |
