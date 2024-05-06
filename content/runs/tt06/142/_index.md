---
hidden: true
title: "142 Ternary 1.58-bit x 8-bit matrix multiplier"
weight: 131
---

## 142 : Ternary 1.58-bit x 8-bit matrix multiplier

* Author: ReJ aka Renaldas Zioma
* Description: Matrix multiplication block for 1.58 bit aka TERNARY weight LLMs
* [GitHub repository](https://github.com/rejunity/tiny-asic-1_58bit-matrix-mul)
* [GDS submitted](https://github.com/rejunity/tiny-asic-1_58bit-matrix-mul/actions/runs/8756435823)
* HDL project
* [Extra docs]()
* Clock: 48000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Matrix multiplication is implemented using a systolic array architecture.

### How to test

Every cycle feed packed weight data to Input pins and input data to Bidirectional pins.
Strobe Enable pin to start receiving results of the matrix multiplication on the Output pins.

### External hardware

MCU is necessary to feed weights and input data into the accelerator and fetch the results.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | packed weights LSB  | result LSB  |      |
| 1 | packed weights  | result   |      |
| 2 | packed weights  | result   |      |
| 3 | packed weights  | result   |      |
| 4 | packed weights  | result   |      |
| 5 | packed weights  | result   |      |
| 6 | packed weights  | result   |      |
| 7 | packed weights MSB  | result MSB  |      |


### Chip location

{{< shuttle-map "tt06" "142" >}}
