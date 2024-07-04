---
hidden: true
title: "264 VGA Checkers"
weight: 85
---

## 264 : VGA Checkers

* Author: ReJ aka Renaldas Zioma
* Description: VGA
* [GitHub repository](https://github.com/rejunity/vga-checkers)
* [GDS submitted](https://github.com/rejunity/vga-checkers/actions/runs/9332769602)
* HDL project
* [Extra docs]()
* Clock: 25200000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

It generates patterns on VGA screen.

### How to test

Connect to VGA monitor.

### External hardware

TinyTapeout VGA PMOD, VGA monitor


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | R  |         |
| 1 |   | G  |         |
| 2 |   | B  |         |
| 3 |   | vsync  |         |
| 4 |   | R  |         |
| 5 |   | G  |         |
| 6 |   | B  |         |
| 7 |   | hsync  |         |


### Chip location

{{< shuttle-map "tt07" "264" >}}
