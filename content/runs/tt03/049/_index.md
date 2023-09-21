---
hidden: true
title: "49 Brightness control of LED with PWM"
weight: 50
---

## 49 : Brightness control of LED with PWM

* Author: Ioannis G. Intzes
* Description: Increase and Decrease the PWM (Pulse-Width) to dim a LED.
* [GitHub repository](https://github.com/IoannisIn/tt03-verilog-pwm)
* [Most recent GDS build](https://github.com/IoannisIn/tt03-verilog-pwm/actions/runs/4742370395)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: 



### How it works

This Verilog code implements a simple PWM (Pulse-Width Modulation) controller module that takes an input clock signal of 12500 Hz and generates a PWM output signal based on the input from two buttons to increase or decrease the PWM duty cycle. The module also includes debouncing functionality for the button inputs to eliminate any bouncing that may occur when the button is pressed. The PWM output is controlled by a duty cycle variable that is updated based on the button inputs and ranges from 0% to 100%. The module also includes output signals that indicate when the maximum and minimum duty cycle values have been reached and a 1 Hz clock signal.


### How to test

After reset, the counter should increase by one every second.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | inled |
| 1 | btn_incrPWM  | deled |
| 2 | btn_decrPWM  | led |
| 3 | none  | clock_1Hz |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
