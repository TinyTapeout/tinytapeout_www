---
hidden: true
title: "613 Clock"
weight: 0
---

## 613 : Clock

* Author: Hilburn
* Description: ASIC Desktop Clock
* [GitHub repository](https://github.com/dr-skyler/tt_um_dr_skyler_clock)
* [GDS submitted](https://github.com/dr-skyler/tt_um_dr_skyler_clock/actions/runs/8746545854)
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

Generates a 1 second pulse that increments a seconds, minutes, and hours timer that then gets decoded and displayed on the 7-segment display

### How to test

Connect 7-segment display and adjust imput switches to desired clock frequency

### External hardware

PMOD, 7-segment display, breadboard


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Clock 10 MHz  | 7-seg[0]  |         |
| 1 | Clock 12 MHz  | 7-seg[1]  |         |
| 2 | Clock 14 MHz  | 7-seg[2]  |         |
| 3 | Clock 20 MHz  | 7-seg[3]  |         |
| 4 | Show Minuetes  | 7-seg[4]  |         |
| 5 | Show Hours  | 7-seg[5]  |         |
| 6 |   | 7-seg[6]  |         |
| 7 |   | 7-seg[7]  |         |


### Chip location

{{< shuttle-map "tt06" "613" >}}
