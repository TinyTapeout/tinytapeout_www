---
hidden: true
title: "130 DVD Screensaver with Tiny Tapeout Logo (Tiny VGA)"
weight: 29
---

## 130 : DVD Screensaver with Tiny Tapeout Logo (Tiny VGA)

* Author: Uri Shaked
* Description: Tiny Tapeout Logo bouncing around the screen (640x480 VGA)
* [GitHub repository](https://github.com/TinyTapeout/tt07-dvd-screensaver)
* [GDS submitted](https://github.com/TinyTapeout/tt07-dvd-screensaver/actions/runs/9173015853)
* HDL project
* [Extra docs]()
* Clock: 25175000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Displays a bouncing Tiny Tapeout logo on the screen.

![Tiny Tapeout screensaver](images/screensaver.jpg)

### How to test

Connect to a VGA monitor. Set the following inputs to configure the design:

- `tile` (ui_in[0]) to repeat the logo and tile it across the screen,
- `color` (ui_in[1]) to enable color output.

### External hardware

[TinyVGA PMOD](https://github.com/mole99/tiny-vga)


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | tile  | R1  |         |
| 1 | color  | G1  |         |
| 2 |   | B1  |         |
| 3 |   | VSync  |         |
| 4 |   | R0  |         |
| 5 |   | G0  |         |
| 6 |   | B0  |         |
| 7 |   | HSync  |         |


### Chip location

{{< shuttle-map "tt07" "130" >}}
