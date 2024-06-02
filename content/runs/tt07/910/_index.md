---
hidden: true
title: "910 Tiniest GPU"
weight: 113
---

## 910 : Tiniest GPU

* Author: Matt Pongsagon
* Description: A GPU that can render only a triangle
* [GitHub repository](https://github.com/pongsagon/tt07-tiniest-gpu)
* [GDS submitted](https://github.com/pongsagon/tt07-tiniest-gpu/actions/runs/9280686674)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

A tiniest GPU that can render only 1 triangle

### How to test

Plugin a TinyVGA PMOD, connect at the port uio.
Send UART command to control the GPU via serial console

### External hardware

1. TinyVGA PMOD, connect at the port uio
2. serial console UART to USB at the port
   ui_in[3] - RX


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   | R1        |
| 1 |   |   | G1        |
| 2 |   |   | B1        |
| 3 | RX  |   | vsync        |
| 4 |   |   | R0        |
| 5 |   |   | G0        |
| 6 |   |   | B0        |
| 7 |   |   | hsync        |


### Chip location

{{< shuttle-map "tt07" "910" >}}
