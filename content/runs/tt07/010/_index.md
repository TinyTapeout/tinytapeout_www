---
hidden: true
title: "10 Gaussian Blur"
weight: 9
---

## 10 : Gaussian Blur

* Author: Alfonso Cortes
* Description: 4-bit gaussian blur filter
* [GitHub repository](https://github.com/ChipUSM/tt07-wokwi-gaussian-blur)
* [GDS submitted](https://github.com/ChipUSM/tt07-wokwi-gaussian-blur/actions/runs/9277538204)
* [Wokwi](https://wokwi.com/projects/399169514887574529) project
* [Extra docs]()
* Clock: 100000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This filter receives nine 4-bit pixels in a free-running shift register and performs a gaussian blur, returning the value of the middle pixel. The weights are as shown below.

![0 _9K4Upm5p0aBIKDS](https://github.com/ChipUSM/tt07-wokwi-gaussian-blur/assets/39561772/dc088bd7-366c-4517-bd2d-39de6a550089)

### How to test

Input the pixel value and its neighborhood (nine pixels) from left to right, top to bottom. Once the shift register is full (after nine clock cycles) the output can be sampled. The last stage of the shift register is also available at the output for testing purposes.

### External hardware

An FPGA should be useful.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | reg_in[0]  | reg_out[0]  |         |
| 1 | reg_in[1]  | reg_out[1]  |         |
| 2 | reg_in[2]  | reg_out[2]  |         |
| 3 | reg_in[3]  | reg_out[3]  |         |
| 4 |   | blur[0]  |         |
| 5 |   | blur[1]  |         |
| 6 |   | blur[2]  |         |
| 7 |   | blur[3]  |         |


### Chip location

{{< shuttle-map "tt07" "10" >}}
