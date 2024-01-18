---
hidden: true
title: "148 LEDChaser from LiteX test"
weight: 149
---

## 148 : 0b 010 010 100 : LEDChaser from LiteX test

{{< tt-scanchain-switches "010010100" >}}

* Author: Nick Østergaard
* Description: This is just a small demo of synthezing verilog from LiteX, this does not include any CPU.
* [GitHub repository](https://github.com/nickoe/tinytapeout02-verilog-gds-test)
* [Most recent GDS build](https://github.com/nickoe/tinytapeout02-verilog-gds-test/actions/runs/3595528327)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It just implements LEDChaser from the LiteX LED core demo, where io_in[3:7] is duty cycle

### How to test

Add LEDs on the outputs in a straight line -- or probe all signals on a scope and check that you get a 'moving' train of pulses.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led a |
| 1 | reset  | led b |
| 2 | pwm_width 0  | led c |
| 3 | pwm_width 1  | led d |
| 4 | pwm_width 2  | led e |
| 5 | pwm_width 3  | led f |
| 6 | pwm_width 4  | led g |
| 7 | pwm_width 5  | led h |
