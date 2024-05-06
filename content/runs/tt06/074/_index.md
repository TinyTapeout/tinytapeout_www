---
hidden: true
title: "74 Gray scale and Sobel filter"
weight: 158
---

## 74 : Gray scale and Sobel filter

* Author: Diana Natali Maldonado Ramirez
* Description: It takes an image, converts it to grayscale, and then applies an edge detection algorithm.
* [GitHub repository](https://github.com/DianaNatali/tt06_grayscale_sobel)
* [GDS submitted](https://github.com/DianaNatali/tt06_grayscale_sobel/actions/runs/8758823349)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The project takes an image, converts it to grayscale, and then applies an edge detection algorithm.

### How to test

Using cocotb

### External hardware

Camera, screen


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | spi_sck_i  | spi_sdo_o  |      |
| 1 | spi_cs_i  | lfsr_done  |      |
| 2 | spi_sdi_i  | ena  |      |
| 3 | select_process_i[0]  | output_px[0]  |      |
| 4 | select_process_i[1]  | output_px[1]  |      |
| 5 | start_sobel_i  | output_px[2]  |      |
| 6 |   | output_px[3]  |      |
| 7 |   | output_px[4]  |      |


### Chip location

{{< shuttle-map "tt06" "74" >}}
