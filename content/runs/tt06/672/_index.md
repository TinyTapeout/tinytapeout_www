---
hidden: true
title: "672 4-Bit Full Adder and Subtractor with Hardware Trojan"
weight: 31
---

## 672 : 4-Bit Full Adder and Subtractor with Hardware Trojan

* Author: Jeremy Hong
* Description: Externally triggered hardware trojan in a 4-bit full adder and subtractor
* [GitHub repository](https://github.com/hongselectronics/FA_SUB_HWT)
* [GDS submitted](https://github.com/hongselectronics/FA_SUB_HWT/actions/runs/8755641343)
* [Wokwi](https://wokwi.com/projects/395567106413190145) project
* [Extra docs](None)
* Clock: 100000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

4-Bit Full Adder and Subtractor with hardware trojan inserted in the critical path

### How to test

Use DIP Switches, provide external input for last B input bit and hardware trojan trigger signal.

### External hardware

Pattern Generator and logic analyzer


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Add/Subtract | 7 Segment Display | Input - B3 |
| 1 | A0 | 7 Segment Display | Input - Hardware Trojan Trigger |
| 2 | B0 | 7 Segment Display | Output - LFSR 1 |
| 3 | A1 | 7 Segment Display | Output - LFSR 2 |
| 4 | B1 | 7 Segment Display | Output - LFSR 3 |
| 5 | A2 | 7 Segment Display | Input - LFSR 3 |
| 6 | B2 | 7 Segment Display | Input - LFSR 4 |
| 7 | A3 | 7 Segment Display | Output - LFSR 7 |

### Chip location

{{< shuttle-map "tt06" "672" >}}
