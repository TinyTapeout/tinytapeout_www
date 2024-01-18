---
hidden: true
title: "211 Multiple seven-segment digit buffer"
weight: 212
---

## 211 : 0b 011 010 011 : Multiple seven-segment digit buffer

{{< tt-scanchain-switches "011010011" >}}

* Author: Zach Mason
* Description: Storage and variable speed readback segment digits
* [GitHub repository](https://github.com/zymason/tt02-zymason)
* [Most recent GDS build](https://github.com/zymason/tt02-zymason/actions/runs/3598834837)
* HDL project
* [Extra docs](None)
* Clock: 6250 Hz
* External hardware: None

Image path is broken

### How it works

Stores 12 seven-segment display digits in registers in write mode. In read mode, the values are sequentially displayed back, with a variable cycle rate. The segment inputs are 4-3 multiplexed and a clock divider is used to slow down the output rate. The user is responsible for tracking how many digits have been set.


### How to test

First set in1-in7 low, and then reset by toggling in1 high then low. In read mode (in2 high), the decimal point will be illuminated and the first 4 segments can be changed with in4-in7. When the desired configuration is set, sel (in3) can be switched high and the remaining 3 segments can be set with in4-in6. Once the desired configuration is set, you can move to the next digit by bringing sel (in3) low. Alternatively, read mode can be entered by bringing RW (in2) low. At this point, the stored values will begin reading sequentially at a rate given by in4-in7. The base period is about 81.9ms, with in4-in7 specifying the multiplication factor for the real display rate. The slowest period is about 2.62s, where in7-in4 are all high. If in read mode, bringing in3 low will stop the cycling and keep displaying the current digit. This can be useful for changing a single digit since one could cycle through at a slow rate to find the target, enter write mode, change the stored digit, and then exit back to read mode.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | RW mode  | segment c |
| 3 | sel, read_clk_en  | segment d |
| 4 | pin0, clkspd0  | segment e |
| 5 | pin1, clkspd1  | segment f |
| 6 | pin2, clkspd2  | segment g |
| 7 | pin3, clkspd3  | segment dp |
