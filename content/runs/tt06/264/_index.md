---
hidden: true
title: "264 TinyRV1 CPU"
weight: 70
---

## 264 : TinyRV1 CPU

* Author: Prof. Dr. Matthias Jung, Jonathan Hager, Philipp Wetzstein
* Description: TinyRV1 compliant CPU that has to be attached to an external SPI memory. The ISA is described in the documentation
* [GitHub repository](https://github.com/CEJMU/tt06_tinyrv1)
* [GDS submitted](https://github.com/CEJMU/tt06_tinyrv1/actions/runs/8758341719)
* HDL project
* [Extra docs]()
* Clock: 12000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The project consist of a RISC-V VHDL Model and supports the [Tiny RV1 ISA](https://github.com/cbatten/ece4750-tinyrv-isa) without MUL. In addition AND and XOR are supported.

#### How to test

To test our design you will need to use external hardware.

#### External hardware

To use our design you will need to use the provided spi_slave_tt06_with_memory and synthesize it for an 12 MHz FPGA.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | SPI MISO  | SPI MOSI  |      |
| 1 | unused  | SPI SCLK  |      |
| 2 | unused  | SPI CS  |      |
| 3 | unused  | Register_1(0)  |      |
| 4 | unused  | Register_1(1)  |      |
| 5 | unused  | Register_1(2)  |      |
| 6 | unused  | Register_1(3)  |      |
| 7 | unused  | Register_1(4)  |      |


### Chip location

{{< shuttle-map "tt06" "264" >}}
