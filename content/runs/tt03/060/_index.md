---
hidden: true
title: "60 MMM Lab's Micro-robot Control Module"
weight: 61
---

## 60 : 0b 000 111 100 : MMM Lab's Micro-robot Control Module

{{< tt-scanchain-switches "000111100" >}}

* Author: Kevin Guan
* Description: Ring Oscillator, Final State Machine, and PWM
* [GitHub repository](https://github.com/kevinwguan/tt03-mmm-verilog)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Look at pins for further information.


### How to test

Look at pins for further information.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | reset  | clk out |
| 1 | dc[2]  | counter[2] |
| 2 | dc[1]  | counter[1] |
| 3 | dc[0]  | counter[0] |
| 4 | sel  | dut fsm right |
| 5 | ext clk  | dut fsm left |
| 6 | right sensor  | right motor |
| 7 | left sensor  | left motor |
