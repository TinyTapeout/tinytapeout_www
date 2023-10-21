---
hidden: true
title: "68 Breathing LED"
weight: 69
---

## 68 : 0b001000100 : Breathing LED

* Author: argunda
* Description: Use the pwm output to drive an LED and it should look like it's breathing.
* [GitHub repository](https://github.com/argunda/tt02-breathing-led)
* [Most recent GDS build](https://github.com/argunda/tt02-breathing-led/actions/runs/3529467681)
* HDL project
* [Extra docs]()
* Clock: 4000 Hz
* External hardware: Clock source and external LED circuit.



### How it works

A triangle wave is generated and used to determine duty cycle of pwm.

### How to test

After reset, pwm should automatically be generated. The duty counter is output for debug purposes.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | breathing_pwm |
| 1 | reset  | duty[0] |
| 2 | none  | duty[1] |
| 3 | none  | duty[2] |
| 4 | none  | duty[3] |
| 5 | none  | duty[4] |
| 6 | none  | duty[5] |
| 7 | none  | duty[6] |
