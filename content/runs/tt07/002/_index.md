---
hidden: true
title: "2 6 bit addr"
weight: 39
---

## 2 : 6 bit addr

* Author: Nigel Coburn, Jason Murray
* Description: 6 bit addr, with continuous assignment (no clock)
* [GitHub repository](https://github.com/njcoburn/tt07-verilog-template)
* [GDS submitted](https://github.com/njcoburn/tt07-verilog-template/actions/runs/9328040353)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

### 6 Bit Addr: Overview

2x6 bit inputs with a carry
6 bit output with a carry

### How to test

### Addition with no carry

A=0b000001
IC = 0
B=0b000001
O=0b000010
OC = 0

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | 0th bit for A input  | 0th bit for A+B  | 0th bit for B input        |
| 1 | 1st bit for A input  | 1st bit for A+B  | 1st bit for B input        |
| 2 | 2nd bit for A input  | 2nd bit for A+B  | 2nd bit for B input        |
| 3 | 3rd bit for A input  | 3rd bit for A+B  | 3rd bit for B input        |
| 4 | 4th bit for A input  | 4th bit for A+B  | 4th bit for B input        |
| 5 | 5th bit for A input  | 5th bit for A+B  | 5th bit for B input        |
| 6 | Input Carry bit  | Output Carry bit  |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "2" >}}
