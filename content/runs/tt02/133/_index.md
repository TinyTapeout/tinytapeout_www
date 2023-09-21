---
hidden: true
title: "133 Optimised Euclidean Algorithm"
weight: 134
---

## 133 : Optimised Euclidean Algorithm

* Author: Recep Said Dulger
* Description: Finding gcd of 2 4-bit number
* [GitHub repository](https://github.com/RecepSaid/tt02-euclidean-algorithm)
* [Most recent GDS build](https://github.com/RecepSaid/tt02-euclidean-algorithm/actions/runs/3602221231)
* HDL project
* [Extra docs](https://github.com/RecepSaid/tt02-euclidean-algorithm)
* Clock: 1000 Hz
* External hardware: None



### How it works

This circuit finds the gcd (greatest common divisor) of 2 4-bit numbers which are entered by dip switch and it uses the Euclidean algorithm. Result displays by seven segment display. The algorithm has been optimized by designing the control unit and datapath.

### How to test

Enter 4-bit 1st number by dip switches and set num_okey switch to 1. By doing that 1st number saved in register. Set num_okey switch to 0 and enter 2nd 4-bit number. Set num_okey switch to 0 and after that gcd result will appear in seven segment display.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | ssd_out[0] |
| 1 | number[0]  | ssd_out[1] |
| 2 | number[1]  | ssd_out[2] |
| 3 | number[2]  | ssd_out[3] |
| 4 | number[3]  | ssd_out[4] |
| 5 | none  | ssd_out[5] |
| 6 | rst  | ssd_out[6] |
| 7 | num_okey  | none |
