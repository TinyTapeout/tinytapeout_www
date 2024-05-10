---
hidden: true
title: "41 2 Player Game"
weight: 205
---

## 41 : 2 Player Game

* Author:  Gabriel Silva, Tristan Peterson, Conner F
* Description: Count down timer game
* [GitHub repository](https://github.com/gabejessil/tt06-verilog-template)
* [GDS submitted](https://github.com/gabejessil/tt06-verilog-template/actions/runs/8207313067)
* HDL project
* [Extra docs]()
* Clock: 20000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Counting timer game! 4 buttons, start, reset, p1, p2. The goal time is seen on the screen after reset, once start is selected the timer will begin at 0.0 and go to 9.9. After 3.0 seconds the display is hidden, guess the answer!

### How to test

If you select the Player button and Start button you can see the time the player selected. THis only works after both players have answered

### External hardware

You need a PMOD 7 segment disp 1286-1065-ND, 4 button  PMOD 1286-1145-ND


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Start  |   |         |
| 1 | Reset  |   |         |
| 2 | Player 1  |   |         |
| 3 | Player 2  |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "41" >}}
