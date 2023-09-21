---
hidden: true
title: "58 ro-based_tempsense"
weight: 59
---

## 58 : ro-based_tempsense

* Author: Jorge Marin, Daniel Arevalos
* Description: Ring oscillator whose frecuency depends on temperature.
* [GitHub repository](https://github.com/JorgeMarinN/tt03_ac3e-usm_ro-based_tempsens)
* [Most recent GDS build](https://github.com/JorgeMarinN/tt03_ac3e-usm_ro-based_tempsens/actions/runs/4789239141)
* HDL project
* [Extra docs]()
* Clock: 10000 Hz
* External hardware: 



### How it works

Uses counters to determine the number of cycles of the ring oscillator within a clock period, wich will then be sent through the UART to determine the temperature vs frecuency caracteristic.


### How to test

After reset and enable are set, the ring oscillator should start and then when a START code is received by UART, a value is sent back.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk_internal  | tx |
| 1 | clk_external  | sum[8] |
| 2 | clk_sel  | sum[10] |
| 3 | enable_inv_osc  | sum[13] |
| 4 | enable_nand_osc  | sum[15] |
| 5 | reset  | sum[17] |
| 6 | rx  | sum[19] |
| 7 | osc_sel  | sum[21] |
