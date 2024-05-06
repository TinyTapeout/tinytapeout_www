---
hidden: true
title: "485 CSIT-Luks"
weight: 4
---

## 485 : CSIT-Luks

* Author: CSIT Team (Jan Furlan, Jurica Gašpar, Marko Marinović, Tin Sorić, Ivan Štignedec, Dino Terman, Jurica Kundrata)
* Description: Camera lighting settings recommender.
* [GitHub repository](https://github.com/jk2102/tt06-csit-luks)
* [GDS submitted](https://github.com/jk2102/tt06-csit-luks/actions/runs/8723959561)
* HDL project
* [Extra docs](None)
* Clock: 1000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project implements a settings recommender for photography. The ISO, shutter speed and focal ratio values are inputed using a rotational encoder and a four-digit seven-segment display. After inputing the values, an external luxmeter is read via SPI interface and all of the values are used to retrieve the recommended setting from a LUT in an SPI Flash. The recommended value is displayed on the four-digit seven-segment display.

### How to test

This project uses a user interface consisting of a rotational encoder and four-digit seven-segment display. After reset or power-up, first the ISO value is selected by rotating the encoder. The current value is displayed on the four-digit seven-segment display and it is confirmed by a short press on the rotational encoder. Next, the shutter speed is selected by rotating and confirmed by a short press of the encoder. Finally, the focal ratio is selected by rotating the encoder and it is confirmed by a medium press of the encoder. After reading the luxmeter and the flash-based LUT, the recommended settings value is shown on the four-digit seven-segment display.

### External hardware

External hardware comprises of a rotational encoder, a four-digit seven-segment display, SPI luxmeter (e.g. Pmod ALS) and SPI flash (e.g. MX25L3233FMI-08G).


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | A (rot_encoder) | a (seven_seg) | an[0] (seven_seg) |
| 1 | B (rot_encoder) | b (seven_seg) | an[1] (seven_seg) |
| 2 | PB (rot_encoder) | c (seven_seg) | an[2] (seven_seg) |
| 3 | MISO (spi_flash) | d (seven_seg) | an[3] (seven_seg) |
| 4 | MISO (spi_sensor) | e (seven_seg) | SCLK (spi_flash, spi_sensor) |
| 5 |  | f (seven_seg) | SS (spi_flash) |
| 6 |  | g (seven_seg) | SS (spi_sensor) |
| 7 |  | dp (seven_seg) | MOSI (spi_flash) |

### Chip location

{{< shuttle-map "tt06" "485" >}}
