---
hidden: true
title: "322 Explorer"
weight: 93
---

## 322 : Explorer

* Author: sylefeb
* Description: none
* [GitHub repository](https://github.com/sylefeb/tt07-explorer)
* [GDS submitted](https://github.com/sylefeb/tt07-explorer/actions/runs/9256070736)
* HDL project
* [Extra docs]()
* Clock: 33000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This design performs a 2D 'voxel' raycasting of a terrain, implementing in
actual hardware the 1992 [Voxel Space](https://en.wikipedia.org/wiki/Voxel_Space) algorithm used in the Comanche game.

The chip is designed in [Silice](https://github.com/sylefeb/Silice/),
the source code is in the [main repo](https://github.com/sylefeb/Silice/tree/wip/projects/qspi_terrain).

![A terrain](images/terrain.jpg)

### How to test

A specific data file containing terrain data has to be uploaded to SPI-ram
before this can run. The plan is to do that from the RP2040 of the PCB.

Another way to test is on a IceStick HX1K. Instructions coming soon!

### External hardware

- [QSPI PSRAM PMOD from machdyne](https://machdyne.com/product/qqspi-psram32/)
- 240x320 ST7789V screen


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Button 0  |   | QSPI ram, csn (output)        |
| 1 | Button 1  | SPI screen, clock  | QSPI ram, io0 (bidir)        |
| 2 | Button 2  | SPI screen, csn  | QSPI ram, io1 (bidir)        |
| 3 | Button 3  | SPI screen, dc  | QSPI ram, clock (output)        |
| 4 |   | SPI screen, mosi  | QSPI ram, io2 (bidir)        |
| 5 |   | SPI screen, resn  | QSPI ram, io3 (bidir)        |
| 6 |   |   | QSPI ram, bank select 0 (output)        |
| 7 |   |   | QSPI ram, bank select 1 (output)        |


### Chip location

{{< shuttle-map "tt07" "322" >}}
