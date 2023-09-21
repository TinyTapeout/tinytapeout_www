---
hidden: true
title: "356 Simple TMR"
weight: 78
---

## 356 : Simple TMR

* Author: Piotr Kuligowski
* Description: Simple TMR (triple modular redundancy) voters with error injection option.
* [GitHub repository](https://github.com/pkuligowski/tt04-simple-tmr)
* [GDS submitted](https://github.com/pkuligowski/tt04-simple-tmr/actions/runs/6125731978)
* [Wokwi](https://wokwi.com/projects/375326293008530433) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It is a simple implementation of one D-flip-flop, three D-flip-flops with TMRed outputs and a single TMRed D-flip-flop that allows to inject errors.


### How to test

Set inputs, trigger clock and observe outputs


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | FF0_D_SINGLE  | Q0_SINGLE | none |
| 1 | FF1_D_TMRed_WITH_INJECTION  | FF1_OUT0 | none |
| 2 | FF2_D_TMRed_OR_INJECT_IN0_OF_D1  | FF1_OUT1 | none |
| 3 | FF3_D_TMRed_OR_INJECT_IN1_OF_D1  | FF1_OUT2 | none |
| 4 | FF4_D_TMRed_OR_INJECT_IN2_OF_D1  | FF1_TMRed_OUT | none |
| 5 | FF1_FF2_FF3_FF4_EN  | FF2_TMRed_OUT | none |
| 6 | FF1_INJECT  | FF3_TMRed_OUT | none |
| 7 | CLK  | FF4_TMRed_OUT | none |
