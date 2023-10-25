---
hidden: true
title: "0 Test Inverter Project"
weight: 1
---

## 0 : 0b 000 000 000 : Test Inverter Project

{{< tt-scanchain-switches "000000000" >}}

* Author: Matt Venn
* Description: inverts every line
* [GitHub repository](https://github.com/TinyTapeout/tt02-test-invert)
* [Most recent GDS build](https://github.com/TinyTapeout/tt02-test-invert/actions/runs/3640803445)
* [Wokwi](https://wokwi.com/projects/341535056611770964) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

uses 8 inverters to invert every line

### How to test

setting the input switch to on should turn the corresponding led off

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
