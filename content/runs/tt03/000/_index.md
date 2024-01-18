---
hidden: true
title: "0 Test Inverter Project"
weight: 1
---

## 0 : 0b 000 000 000 : Test Inverter Project

{{< tt-scanchain-switches "000000000" >}}

* Author: Matt Venn
* Description: Inverts every line. This project is also used to fill any empty design spaces.
* [GitHub repository](https://github.com/TinyTapeout/tt03-test-invert)
* [Most recent GDS build](https://github.com/TinyTapeout/tt03-test-invert/actions/runs/4669952692)
* [Wokwi](https://wokwi.com/projects/361728533238569985) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Uses 8 inverters to invert every line.


### How to test

Setting the input switch to on should turn the corresponding LED off.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | a  | segment a |
| 1 | b  | segment b |
| 2 | c  | segment c |
| 3 | d  | segment d |
| 4 | e  | segment e |
| 5 | f  | segment f |
| 6 | g  | segment g |
| 7 | dot  | dot |
