---
hidden: true
title: "172 Die Roller"
weight: 233
---

## 172 : Die Roller

* Author: Nathan Gross
* Description: Generates a random number when rolled with input 1-99
* [GitHub repository](https://github.com/nathangross1/tt06-verilog-template)
* [GDS submitted](https://github.com/nathangross1/tt06-verilog-template/actions/runs/8207055176)
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

Takes binary input die size from user and generates a random number from 1-die_size when input to roll is received. Uses clock counter for random number.

### How to test

Select die size with inputs 0-6, see that die size is displaying. roll die with input 7 repeatedly, noting random numbers from 1 to die size.

### External hardware

PMOD output splitter
PMOD dual 7-segment display


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Die Size bit 0 | Dual 7 segment data 0 |  |
| 1 | Die Size bit 1 | Dual 7 segment data 1 |  |
| 2 | Die Size bit 2 | Dual 7 segment data 2 |  |
| 3 | Die Size bit 3 | Dual 7 segment data 3 |  |
| 4 | Die Size bit 4 | Dual 7 segment data 4 |  |
| 5 | Die Size bit 5 | Dual 7 segment data 5 |  |
| 6 | Die Size bit 6 | Dual 7 segment data 6 |  |
| 7 | Die Roll | Source selection |  |

### Chip location

{{< shuttle-map "tt06" "172" >}}
