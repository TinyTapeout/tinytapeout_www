---
hidden: true
title: "205 Simple_Timer-MBA"
weight: 93
---

## 205 : Simple_Timer-MBA

* Author: Morteza Biglari-Abhari
* Description: Count up to the specified value (between 01 to 99), one second at a time. Time_Out will be '1' when reaches the expected value
* [GitHub repository](https://github.com/mabhari/tt05-my_simple_timer)
* [GDS submitted](https://github.com/mabhari/tt05-my_simple_timer/actions/runs/6688220044)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

This is a two-digits timer, which can count from 00 to 99 in seconds. The time to stop counting is
given through 8 input switches (ui_in) as two BCD numbers (which can be from 00 to 99). This number
is loaded into an internal register when input Load is '1'. Then when input Start is '1' the counting
begins. The timer stops when it reaches the specified count number and then output Time_Out will become '1'.
Seconds (either Ones or Tens) is displayed on 7-Seg display depending on uio_in[3].


### How to test

After reset, when Start and Load inputs are activated the counter should increase by one every second with a 10MHz input clock.
Experiment by changing the inputs to count different number of seconds


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Timeout (in Seconds) bits 7 to 0  | segment a | Load bit 0 (uio_in[0]) |
| 1 | n/a  | segment b | Start bit 1 (uio_in[1]) |
| 2 | n/a  | segment c | Tens or Ones select bit 3 (uio_in[3]) |
| 3 | n/a  | segment d | Time_Out uio_out[7] |
| 4 | n/a  | segment e | n/a |
| 5 | n/a  | segment f | n/a |
| 6 | n/a  | segment g | n/a |
| 7 | n/a  | dot | n/a |
