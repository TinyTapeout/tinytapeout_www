---
hidden: true
title: "74 VGA Snake Game"
weight: 95
---

## 74 : VGA Snake Game

* Author: Barak Hoffer
* Description: Snake game with vga output
* [GitHub repository](https://github.com/barakhoffer/tt07-vga-snake)
* [GDS submitted](https://github.com/barakhoffer/tt07-vga-snake/actions/runs/9331930231)
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

A simple snake game with vga output and left,right,up,down buttons.

### How to test

Connect to a VGA monitor. Change left,right,up,down (ui_in[0:3]) buttons to change movement.

### External hardware

[TinyVGA PMOD](https://github.com/mole99/tiny-vga)


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | left  | R1  |         |
| 1 | right  | G1  |         |
| 2 | up  | B1  |         |
| 3 | down  | VSync  |         |
| 4 |   | R0  |         |
| 5 |   | G0  |         |
| 6 |   | B0  |         |
| 7 |   | HSync  |         |


### Chip location

{{< shuttle-map "tt07" "74" >}}
