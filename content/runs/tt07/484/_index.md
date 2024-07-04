---
hidden: true
title: "484 AY-8193 single channel DAC"
weight: 94
---

## 484 : AY-8193 single channel DAC

* Author: ReJ aka Renaldas Zioma
* Description: Logarithmic 4-bit DAC for AY-8193 sound generator
* [GitHub repository](https://github.com/rejunity/tt07-analog-dac-ay8913)
* [GDS submitted](https://github.com/rejunity/tt07-analog-dac-ay8913/actions/runs/9210996292)
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

Current steering DAC.

### How to test

Set one of the input / bidir pins to regulate current.

### External hardware

Measure with osciloscope or use amplifier and speakers.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   | db        |
| 1 | db  |   | db        |
| 2 | db  |   | db        |
| 3 | db  |   | db        |
| 4 | db  |   | db        |
| 5 | db  |   | db        |
| 6 | db  |   | db        |
| 7 | db  |   | db        |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 5 | output           |

### Chip location

{{< shuttle-map "tt07" "484" >}}
