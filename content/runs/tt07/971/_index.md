---
hidden: true
title: "971 secret L"
weight: 75
---

## 971 : secret L

* Author: stuart childs
* Description: basic first test - secret code on input displays a letter as output
* [GitHub repository](https://github.com/saladss/TT-secret-L)
* [GDS submitted](https://github.com/saladss/TT-secret-L/actions/runs/9063873082)
* [Wokwi](https://wokwi.com/projects/397774697322214401) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Uses a pair of inverters and a pair of AND gates

### How to test

Use the DIP switches to input a secret code - then the display will show a letter. Basic test in order to learn more about the TT process

### External hardware

Not needed


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input0  |   |         |
| 1 | input1  |   |         |
| 2 | input2  |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "971" >}}
