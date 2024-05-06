---
hidden: true
title: "910 KianV uLinux SoC"
weight: 51
---

## 910 : KianV uLinux SoC

* Author: Hirosh Dabui
* Description: A RISC-V ASIC that can boot μLinux.
* [GitHub repository](https://github.com/splinedrive/KianV-RV32IMA-RISC-V-uLinux-SoC)
* [GDS submitted](https://github.com/splinedrive/KianV-RV32IMA-RISC-V-uLinux-SoC/actions/runs/8672163680)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

it will work

### How to test

it will work

### External hardware

pmod flash + psram


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | uart_rx  | spi_cen0  |      |
| 1 | spi_sio1_so_miso0  | spi_sclk0  |      |
| 2 |   | spi_sio0_si_mosi0  |      |
| 3 |   | led[0]  |      |
| 4 |   | uart_tx  |      |
| 5 |   | led[1]  |      |
| 6 |   | led[2]  |      |
| 7 |   | led[3]  |      |


### Chip location

{{< shuttle-map "tt06" "910" >}}
