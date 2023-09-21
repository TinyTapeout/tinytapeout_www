---
hidden: true
title: "23 RGB Mixer"
weight: 59
---

## 23 : RGB Mixer

* Author: Matt Venn
* Description: Use 3 rotary encoder to control 3 PWM generators
* [GitHub repository](https://github.com/mattvenn/tt04-rgb-mixer)
* [GDS submitted](https://github.com/mattvenn/tt04-rgb-mixer/actions/runs/5937194261)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

3 PWM generators are fed by 3 debounced encoder peripherals.


### How to test

Connect 3 digital rotary encoders to the first 6 inputs. Changing the encoders will change the PWM outputs on the first 3 outputs.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | encoder 0 pin a  | pwm 0 | n/a |
| 1 | encoder 0 pin b  | pwm 1 | n/a |
| 2 | encoder 1 pin a  | pwm 2 | n/a |
| 3 | encoder 1 pin b  | n/a | n/a |
| 4 | encoder 2 pin a  | n/a | n/a |
| 5 | encoder 2 pin b  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
