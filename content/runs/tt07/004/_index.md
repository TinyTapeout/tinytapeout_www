---
hidden: true
title: "4 8-Bit Register"
weight: 97
---

## 4 : 8-Bit Register

* Author: Eric Ulteig
* Description: The 8 inputs are saved to the 8 outputs on a clock pulse
* [GitHub repository](https://github.com/Beird0/TT07_8-Bit_Register)
* [GDS submitted](https://github.com/Beird0/TT07_8-Bit_Register/actions/runs/9326537453)
* [Wokwi](https://wokwi.com/projects/399447152724198401) project
* [Extra docs]()
* Clock: 1 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

D-type flip-flops are used to store the input bits.

### How to test

The 8 inputs are saved to the 8 outputs. Use the push button to save and hold.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input1  | output1  |         |
| 1 | input2  | output2  |         |
| 2 | input3  | output3  |         |
| 3 | input4  | output4  |         |
| 4 | input5  | output5  |         |
| 5 | input6  | output6  |         |
| 6 | input7  | output7  |         |
| 7 | input8  | output8  |         |


### Chip location

{{< shuttle-map "tt07" "4" >}}
