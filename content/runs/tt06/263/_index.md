---
hidden: true
title: "263 Crossbar Array"
weight: 177
---

## 263 : Crossbar Array

* Author: Kevin Guan
* Description: Analog Matrix Multiplication with 64x64 array
* [GitHub repository](https://github.com/kevinwguan/tt06-kevinwguan)
* [GDS submitted](https://github.com/kevinwguan/tt06-kevinwguan/actions/runs/8756444254)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is an analog crossbar array used as a placeholder for future ReRAM projects. Poly Resistors are used instead of ReRAM between Met1 and Met2. Thus, this project has a fixed weight matrix. This project performs 4x4 matrix multiplication in one run.

### How to test

6 analog pins and 8-bit digital input bus are used. First 4 analog pins (i.e. ua[3:0]) are used as inputs to the crossbar. The ua[4] is the supply voltage 0-1.8V (default: keep at 1.8V). The ua[5] is the output analog pin used for observing the output current (summing junction). First 4 digital input pins (i.e. ui_in[3:0]) control the 4 4-bit muxes on the input side. The ui_in[4:7] is used to control the column selection.

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any

This project will need external off-the-shelf DACs and ADCs including a TIA or ADC that can convert output current into a readable voltage.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | bit control 1  |   |         |
| 1 | bit control 2  |   |         |
| 2 | bit control 3  |   |         |
| 3 | bit control 4  |   |         |
| 4 | write/select control 1  |   |         |
| 5 | write/select control 2  |   |         |
| 6 | write/select control 3  |   |         |
| 7 | write/select control 4  |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | bit 1           |
| 1 | 6 | bit 2           |
| 2 | 10 | bit 3           |
| 3 | 7 | bit 4           |
| 4 | 9 | write 1           |
| 5 | 8 | select 1           |

### Chip location

{{< shuttle-map "tt06" "263" >}}
