---
hidden: true
title: "213 Multi stage path for delay measurements."
weight: 87
---

## 213 : Multi stage path for delay measurements.

* Author: Daniel Mundo, Noel Prado, Victor Vanegas
* Description: Verilog coding for cascaded not gates connected as a ring oscillator. After running the flow it is observed that the synthesizer does not support combinatorial feedback and that it collapsed several cascaded not gates into buffers. The original purpose for the ring oscillator will not be achieved but it is observed that synthesized circuit is still useful for measuring some gate delays that can be compared to theoretical calculations for educational purposes.
* [GitHub repository](https://github.com/mun19508/tt04-measure_delay)
* [GDS submitted](https://github.com/mun19508/tt04-measure_delay/actions/runs/6075854471)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The ui_in signals first two bits are used to control the transmission of the input signal thru the gates all the way to the several external outputs that are taps to different gate stages as to measure different stage delays for educational purposes.


### How to test

One can put a square wave generator in the inputs and use a scope to measure the delay of the gates. The delay can be compared with theoretical calculations.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | EN (ui_in[0])  | Tap 1 (uo_out[0]) | none |
| 1 | EN_2 (ui_in[1])  | Tap 2 (uo_out[1]) | none |
| 2 | none  | Tap 3 (uo_out[2]) | none |
| 3 | none  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
