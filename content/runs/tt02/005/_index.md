---
hidden: true
title: "5 Duty Controller"
weight: 6
---

## 5 : Duty Controller

* Author: Marcelo Pouso / Miguel Correia
* Description: Increase/Decrease a duty cycle of square signal.
* [GitHub repository](https://github.com/migcorre/tt02-dc)
* [Most recent GDS build](https://github.com/migcorre/tt02-dc/actions/runs/3471546682)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: A 12.5Khz clock signal generator and 2 bottoms for incremental and decremental inputs. An oscilloscope to see the output PWM 1.2KHZ signal. 



### How it works

Enter a square clock of 12.5Khz, and change its duty cycle by pressing increase or decrease bottom. The change will be in steps of 10%. The increase and decrease inputs have an internal debouncer that could be disabled with the input disable_debouncer = 1.

### How to test

Connect a signal clock (io_in[0]), reset active high signal (io_in[1]), a button to control the incremental input (io_in[2]) and another button to control the decremental input(io_in[3]), and finally forced to 0 the disable_debouncer input (io_in[4]). The output signal will be in the pwm (io_out[0]) port and the negate output in pwm_neg (io_out[1]). The signal output will have a frecuency of clk/10 = 1.2Khz. When you press the incremental input bottom then the signal will increment by 10% Its duty cycle and when you press the decremental input bottom you will see that the output signal decrement by 10%.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | pwm |
| 1 | reset  | pwm_neg |
| 2 | increase  | increase |
| 3 | decrease  | decrease |
| 4 | disable_debouncer  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
