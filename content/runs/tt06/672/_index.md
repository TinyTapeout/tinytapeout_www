---
hidden: true
title: "672 Array Multiplier"
weight: 194
---

## 672 : Array Multiplier

* Author: UACJ Group A
* Description: Array Multiplier
* [GitHub repository](https://github.com/HHRB98/Array-multiplier)
* [GDS submitted](https://github.com/HHRB98/Array-multiplier/actions/runs/8733464012)
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

This project is centerd in the implementation of a verilog code for 4 bit Wallace tree multiplier. The design uses half adder and full adder Verilog designs.

### How to test

On file Test, there is a testbench call wallace_tb.v Use the code to test the code.

### External hardware

You do not need any special external hardware


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | ui[0] | uo[0] |  |
| 1 | ui[1] | uo[1] |  |
| 2 | ui[2] | uo[2] |  |
| 3 | ui[3] | uo[3] |  |
| 4 | ui[4] | uo[4] |  |
| 5 | ui[5] | uo[5] |  |
| 6 | ui[6] | uo[6] |  |
| 7 | ui[7] | uo[7] |  |

### Chip location

{{< shuttle-map "tt06" "672" >}}
