---
hidden: true
title: "590 TinyTPU"
weight: 69
---

## 590 : TinyTPU

* Author: Refik
* Description: TPU Unit with 2x2 matrix multiplication support
* [GitHub repository](https://github.com/Revenantx86/tt07-tinytpu)
* [GDS submitted](https://github.com/Revenantx86/tt07-tinytpu/actions/runs/9121665069)
* HDL project
* [Extra docs]()
* Clock: 50000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The tiny TPU is a accelerator board for multiplying matricies. This version only supports 2x2 matrix multiplication. However, I will be updating the project to muhc more complex computations.

### How to test

You can run the test file and see how random two 2x2 matricies are multiplied and passed out.

### External hardware

There arent any hardware required for this project. However, you do need a driver to convert matricies and push as an input, then read as a output. I will be providing a simple driver once im done with the RTL design


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui_in[0]  | uo_out[0]  |         |
| 1 | ui_in[1]  | uo_out[1]  |         |
| 2 | ui_in[2]  |   |         |
| 3 | ui_in[3]  |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "590" >}}
