---
hidden: true
title: "903 sn74169"
weight: 157
---

## 903 : sn74169

* Author: andychip1
* Description: up down counter
* [GitHub repository](https://github.com/andychip1/sn74169)
* [GDS submitted](https://github.com/andychip1/sn74169/actions/runs/8746609882)
* HDL project
* [Extra docs]()
* Clock: 1000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Verilog model of the SN74169.

### How to test

ui_in[3:0] = A[3:0] 4b parallel load

ui_in[4] = ENPB

ui_in[5] = ENTB

ui_in[6] = LOADB

ui_in[7] = UP/DOWNB

uo_out[3:0] = Q[3:0] 4b output

uo_out[4] = RCOB

uo_out[5] = !ui_in[0]  - for debugging

clk = system clock

### External hardware

Oscilloscope to observe the outputs.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | A0  | Q0  |      |
| 1 | A1  | Q1  |      |
| 2 | A2  | Q2  |      |
| 3 | A3  | Q3  |      |
| 4 | ENPB  | RCOB  |      |
| 5 | ENTB  |   |      |
| 6 | LOADB  |   |      |
| 7 | UP  |   |      |


### Chip location

{{< shuttle-map "tt06" "903" >}}
