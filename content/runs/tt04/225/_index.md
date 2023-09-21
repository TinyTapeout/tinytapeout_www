---
hidden: true
title: "225 CLK Frequency Divider"
weight: 99
---

## 225 : CLK Frequency Divider

* Author: Ramon Sarmiento
* Description: Generates several frequency clock signals from a user-selected M module
* [GitHub repository](https://github.com/RamonSsc/tt04-submission-Vfreq)
* [GDS submitted](https://github.com/RamonSsc/tt04-submission-Vfreq/actions/runs/6075778670)
* HDL project
* [Extra docs]()
* Clock:  Hz
* External hardware: 



### How it works

The frequency divider consists of a counter module M chosen by the user as an input to the project. When the counter reaches the value M-1, a signal is enabled which will function as a clock of another 7-bit counter and each output of this counter can be used as a clock signal, each signal is divided by 2 in frequency. The pulse of the M module counter was enabled as output but it is not recommended to use it as clock signal, but it can be used in other applications.


### How to test

To test the design you only need to choose the M module with the switches on the dedicated inputs.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Modulo[0]  | segment a | CLK 1/2 |
| 1 | Modulo[1]  | segment b | CLK 1/4 |
| 2 | Modulo[2]  | segment c | CLK 1/8 |
| 3 | Modulo[3]  | segment d | CLK 1/16 |
| 4 | Modulo[4]  | segment e | CLK 1/32 |
| 5 | Modulo[5]  | segment f | CLK 1/64 |
| 6 | Modulo[6]  | segment g | CLK 1/128 |
| 7 | Modulo[7]  | dot | Modulo M signal |
