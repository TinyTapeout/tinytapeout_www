---
hidden: true
title: "165 TinyPID"
weight: 166
---

## 165 : 0b 010 100 101 : TinyPID

{{< tt-scanchain-switches "010100101" >}}

* Author: Aidan Medcalf
* Description: Tiny PID controller with SPI configuration channel, SPI ADC and DAC driver
* [GitHub repository](https://github.com/AidanMedcalf/tt02-pid)
* [Most recent GDS build](https://github.com/AidanMedcalf/tt02-pid/actions/runs/3599278703)
* HDL project
* [Extra docs](https://github.com/AidanMedcalf/tt02-pid/blob/main/README.md)
* Clock: 1 Hz
* External hardware: One shift register / ADC for PV read, one shift register / DAC for stimulus output.



### How it works

TinyPID reads from a shift register, calculates error and PID values, and writes to a shift register. All parameters of this process are configurable.

### How to test

Shift in config, then shift in PV input and see what happens. There are three bytes of configuration (setpoint, kp, ki), which are zero on startup.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | pv_in_clk |
| 1 | reset  | pv_in_cs |
| 2 | none  | out_clk |
| 3 | cfg_clk  | out_mosi |
| 4 | cfg_mosi  | out_cs |
| 5 | none  | none |
| 6 | cfg_cs  | none |
| 7 | pv_in_miso  | none |
