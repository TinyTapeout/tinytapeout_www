---
hidden: true
title: "617 4 bit RAM"
weight: 152
---

## 617 : 4 bit RAM

* Author: Alejandro Silva Juarez
* Description: Is a Memory RAM (4 bits)
* [GitHub repository](https://github.com/asilvaj1/tt04-submission_silva_ram)
* [GDS submitted](https://github.com/asilvaj1/tt04-submission_silva_ram/actions/runs/8514227731)
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

It is a 4 bit RAM

### How to test

It is tested with 4 inputs, the clock, the write enable input and the 4-bit input data, the output is 4 bits as well.

### External hardware

The chip may need a Microcontroller, Raspberry, Arduino or FPGA for data inputs and memory addresses or 8 switches can be placed for data inputs and memory addresses.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Memory entry address [0] | Memory output data [0] | RAM write enable input |
| 1 | Memory entry address [1] | Memory output data [1] |  |
| 2 | Memory entry address [2] | Memory output data [2] |  |
| 3 | Memory entry address [3] | Memory output data [3] |  |
| 4 | Memory input data [0] |  |  |
| 5 | Memory input data [1] |  |  |
| 6 | Memory input data [2] |  |  |
| 7 | Memory input data [3] |  |  |

### Chip location

{{< shuttle-map "tt06" "617" >}}
