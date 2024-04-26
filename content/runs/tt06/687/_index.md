---
hidden: true
title: "687 UACJ-Wallace multiplier"
weight: 98
---

## 687 : UACJ-Wallace multiplier

* Author: UACJ Group A
* Description: Wallace multiplier
* [GitHub repository](https://github.com/HHRB98/UACJ-MIE-Wallace)
* [GDS submitted](https://github.com/HHRB98/UACJ-MIE-Wallace/actions/runs/8733795721)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project is center in the implementation of Verilog code for 4 bit Wallace tree multiplier. The design uses half adder and full adder Verilog designs. These modules will be instantiated for the implementation 4 bit Wallace multiplier.

### How to test

Under test file, a wallace_tb.v code is located, this code is the testbench

### External hardware

You do not need any special external hardware.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | ui[0] | uo [0] |  |
| 1 | ui[1] | uo [1] |  |
| 2 | ui[2] | uo [2] |  |
| 3 | ui[3] | uo [3] |  |
| 4 | ui[4] | uo [4] |  |
| 5 | ui[5] | uo [5] |  |
| 6 | ui[6] | uo [6] |  |
| 7 | ui[7] | uo [7] |  |

### Chip location

{{< shuttle-map "tt06" "687" >}}
