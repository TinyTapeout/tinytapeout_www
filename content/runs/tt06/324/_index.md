---
hidden: true
title: "324 SiliconJackets_Systolic_Array"
weight: 112
---

## 324 : SiliconJackets_Systolic_Array

* Author: SiliconJackets
* Description: a tiny systolic array capable of row stationary operation
* [GitHub repository](https://github.com/SiliconJackets/tt06-verilog-template)
* [GDS submitted](https://github.com/SiliconJackets/tt06-verilog-template/actions/runs/8731442471)
* HDL project
* [Extra docs]()
* Clock: 25000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a systolic array capable of matrix multiplication and 2D convolution using 9 processing elements

### How to test

this project needs to be connected to an external FPGA to feed in the data to compute on

### External hardware

FPGA connected to all 24 IO


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | readA[0]  | write[0]  |      |
| 1 | readA[1]  | write[1]  |      |
| 2 | readA[2]  | write[2]  |      |
| 3 | readA[3]  | write[3]  |      |
| 4 | readA[4]  | write[4]  |      |
| 5 | readA[5]  | write[5]  |      |
| 6 | readA[6]  | write[6]  |      |
| 7 | readA[7]  | write[7]  |      |


### Chip location

{{< shuttle-map "tt06" "324" >}}
