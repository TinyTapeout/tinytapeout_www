---
hidden: true
title: "64 FP4 x 8-bit matrix multiplier"
weight: 234
---

## 64 : FP4 x 8-bit matrix multiplier

* Author: ReJ aka Renaldas Zioma
* Description: 4-bit floating point (E3M0) x 8-bit matrix multiplier block
* [GitHub repository](https://github.com/rejunity/tiny-asic-4bit-matrix-mul)
* [GDS submitted](https://github.com/rejunity/tiny-asic-4bit-matrix-mul/actions/runs/8756604313)
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
| 0 | 2nd FP4 weight LSB  | result LSB  | (in) activations LSB        |
| 1 | 2nd FP4 weight  | result   | (in) activations        |
| 2 | 2nd FP4 weight  | result   | (in) activations        |
| 3 | 2nd FP4 weight MSB  | result   | (in) activations        |
| 4 | 1st FP4 weight LSB  | result   | (in) activations        |
| 5 | 1st FP4 weight  | result   | (in) activations        |
| 6 | 1st FP4 weight  | result   | (in) activations        |
| 7 | 1st FP4 weight MSB  | result MSB  | (in) activations MSB        |


### Chip location

{{< shuttle-map "tt06" "64" >}}
