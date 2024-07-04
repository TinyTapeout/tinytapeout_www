---
hidden: true
title: "260 VGA Perlin Noise"
weight: 100
---

## 260 : VGA Perlin Noise

* Author: Uri Shaked
* Description: Simple animated perlin noise for TinyVGA PMod
* [GitHub repository](https://github.com/urish/tt07-vga-perlin)
* [GDS submitted](https://github.com/urish/tt07-vga-perlin/actions/runs/9148764103)
* HDL project
* [Extra docs]()
* Clock: 31500000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Generates an animated [perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) pattern on the screen. The perlin noise code was created with the help of the [Tiny Tapeout AI Assist GPT](https://chatgpt.com/g/g-NDGYkKtDy-tiny-tapeout-ai-assist).

### How to test

Connect to a VGA monitor. Change pattern_sel (ui_in[0]) to choose between two different patterns.

### External hardware

[TinyVGA PMOD](https://github.com/mole99/tiny-vga)


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | pattern_sel  | R1  |         |
| 1 |   | G1  |         |
| 2 |   | B1  |         |
| 3 |   | VSync  |         |
| 4 |   | R0  |         |
| 5 |   | G0  |         |
| 6 |   | B0  |         |
| 7 |   | HSync  |         |


### Chip location

{{< shuttle-map "tt07" "260" >}}
