---
hidden: true
title: "72 7-segment-FUN"
weight: 227
---

## 72 : 7-segment-FUN

* Author: Armin Hartl
* Description: Many different Animations on an 7-Segment-Display
* [GitHub repository](https://github.com/akaArmin/jku-tt06-7-segment-FUN)
* [GDS submitted](https://github.com/akaArmin/jku-tt06-7-segment-FUN/actions/runs/8630208928)
* HDL project
* [Extra docs](None)
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Simplified is this project just a counter, which speed can be changed, combined with animations for a 7-segment display, which also can be switched trough.

### How to test

The default setting should display the numbers 0 to 9, which should change every second. The design can be tested by pressing the different input buttons and seeing if the speed respectively the animation changes.

### External hardware

You might need a breadboard and buttons for the controls, as well as a 7-segment display if not available.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | btn1_incAni | segment a1 |  |
| 1 | btn2_decAni | segment b2 |  |
| 2 | btn3_incSpeed | segment c3 |  |
| 3 | btn4_decSpeed | segment d4 |  |
| 4 |  | segment e5 |  |
| 5 |  | segment f6 |  |
| 6 |  | segment g7 |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "72" >}}
