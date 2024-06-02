---
hidden: true
title: "963 calculator"
weight: 78
---

## 963 : calculator

* Author: ZHU QUANHAO
* Description: input two number and do all kinds of calculation base on it
* [GitHub repository](https://github.com/DanielZhu123/tt07-verilog-Ztemplate)
* [GDS submitted](https://github.com/DanielZhu123/tt07-verilog-Ztemplate/actions/runs/9044638703)
* HDL project
* [Extra docs]()
* Clock: 100 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Adding, and, or, xor numbers

### How to test

By viewing the input and predict the output to see if it match with the display

### External hardware

4Nixie tube


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | bit1_XOR  | display  | display        |
| 1 | bit2_OR  | display  | display        |
| 2 | bit3_AND  | display  | display        |
| 3 | bit4_ADD  | display  | display        |
| 4 | numbersel_NOT  | display  | display        |
| 5 | positionsel_dispB  | display  | display        |
| 6 | signsel_dispA  | display  | power13        |
| 7 | modesel  | display  | power24        |


### Chip location

{{< shuttle-map "tt07" "963" >}}
