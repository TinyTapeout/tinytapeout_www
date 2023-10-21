---
hidden: true
title: "147 PWM Generator"
weight: 148
---

## number : 0b010010011 : PWM Generator

* Author: Jason Lu
* Description: Generates 100 Hz PWM signal
* [GitHub repository](https://github.com/cmu-stuco-98154/f22-tt02-jxlu)
* [Most recent GDS build](https://github.com/cmu-stuco-98154/f22-tt02-jxlu/actions/runs/3600161729)
* HDL project
* [Extra docs]()
* Clock: 5000 Hz
* External hardware: 



### How it works

The duty cycle inputs run from 0 - 50 and specify a duty cycle of input * 2

### How to test

Link up switches to the duty cycle inputs and toggle them to set the duty cycle. Wire an LED to the PWM output to see the output

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | pwm output |
| 1 | reset  | none |
| 2 | duty cycle 0  | none |
| 3 | duty cycle 1  | none |
| 4 | duty cycle 2  | none |
| 5 | duty cycle 3  | none |
| 6 | duty cycle 4  | none |
| 7 | duty cycle 5  | none |
