---
hidden: true
title: "224 Keypad controller"
weight: 4
---

## 224 : Keypad controller

* Author: Ian Tawileh
* Description: Reads a keypad and displays the number on the 7 segment
* [GitHub repository](https://github.com/mattvenn/tt06-ian-keypad-controller)
* [GDS submitted](https://github.com/mattvenn/tt06-ian-keypad-controller/actions/runs/8621402325)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This Project works by driving power to the Cols Columns one by one, then waits for any changes on the Rows (triggered by Human Input) and scans a case to find the combination between the row and col columns before finding the right combination and recording the corresponding key.

This key is passed on to a decode module that finds the correct Seven Segment combination and then passes it on to the 1 digit seven Segment Display where it is displayed.

### How to test

Connect your keypad to the PMOD pins and experiment by clicking some buttons and seeing their outputs!

### External hardware

Keypad PMOD: https://t.ly/lTZF0


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | row0  | 7 segment display outputs  |      |
| 1 | row1  |   |      |
| 2 | row2  |   |      |
| 3 | row3  |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "224" >}}
