---
hidden: true
title: "45 Flappy Bird"
weight: 224
---

## 45 : Flappy Bird

* Author: Robin Hohensinn
* Description: Flappy Bird
* [GitHub repository](https://github.com/RobinH08/JKU-TT06-FlappyBird)
* [GDS submitted](https://github.com/RobinH08/JKU-TT06-FlappyBird/actions/runs/8632170515)
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

The design of the chip allows playing a simplified version of Flappy Bird on an 8x8 LED matrix. For peripheral hardware, only two buttons for controlling the bird's position and an 8x8 LED matrix are required. After successful software testing using Waveform, the design was synthesized in a Github repository. Following successful Waveform testing, the circuit was verified for functionality using an FPGA chip.

The 8-bit outputs act as the "High" signals for the LED matrix, while another set of 8-bit outputs serve as the "LOW" signals, forming a grid pattern conceptually.
This setup enables individual LEDs to be lit up through precise control of one row and one colomn.
Ensuring correct installation of the LED matrix and using appropriately sized resistors for protection is essential.

### How to test

To test this version use waveform tests or an oscilloscop.

### External hardware

two buttons and a 8x8 Led Matrix
https://de.aliexpress.com/item/32857281704.html?gatewayAdapt=glo2deu


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | up-Button  | row of display-Matrix  |      |
| 1 | down-Button  | row of display-Matrix  |      |
| 2 | not used  | row of display-Matrix  |      |
| 3 | not used  | row of display-Matrix  |      |
| 4 | not used  | row of display-Matrix  |      |
| 5 | not used  | row of display-Matrix  |      |
| 6 | not used  | row of display-Matrix  |      |
| 7 | not used  | row of display-Matrix  |      |


### Chip location

{{< shuttle-map "tt06" "45" >}}
