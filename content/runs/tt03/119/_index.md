---
hidden: true
title: "119 tiny egg timer"
weight: 120
---

## 119 : 0b 001 110 111 : tiny egg timer

{{< tt-scanchain-switches "001110111" >}}

* Author: yubex
* Description: tiny egg timer is a configurable small timer
* [GitHub repository](https://github.com/yubex/tt02-tiny_egg_timer)
* HDL project
* [Extra docs]()
* Clock: 10000 Hz
* External hardware: no external hw requrired



### How it works

Its a simple FSM with 3 states (Idle, Waiting and Alarm) and counters regarding clk_cycles, seconds and minutes...

### How to test

Set the clock to 10kHz, set the wait time you want (in minutes) by setting io_in[7:3], set the start switch to 1, the timer should be running, the dot of the 7segment display should toggle each second. If the time is expired, an A for alarm should be displayed. You can stop the alarm by setting the start switch to 0 again.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | start  | segment c |
| 3 | wait time in minutes [0]  | segment d |
| 4 | wait time in minutes [1]  | segment e |
| 5 | wait time in minutes [2]  | segment f |
| 6 | wait time in minutes [3]  | segment g |
| 7 | wait time in minutes [4]  | dot |
