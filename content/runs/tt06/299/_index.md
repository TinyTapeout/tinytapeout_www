---
hidden: true
title: "299 Inverters"
weight: 34
---

## 299 : Inverters

* Author: James Meech
* Description: A set of inverters
* [GitHub repository](https://github.com/JamesTimothyMeech/TT06-beta)
* [GDS submitted](https://github.com/JamesTimothyMeech/TT06-beta/actions/runs/8680786206)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project contains a set of inverters of different sizes connected between the input and output pins. Input and output zero is a D Flip Flop.

### How to test

Apply inputs to the inverters with a square wave or other signal generator and measure the output.

### External hardware

TT06 printed circuit board, signal generator, something to measure the output.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | D Flip Flop Input | D Flip Flop output | Bidirectional inverter 1 input |
| 1 | Inverter 1 input | Inverter 1 output | Bidirectional inverter 1 output |
| 2 | Inverter 2 input | Inverter 2 output | Bidirectional inverter 2 input |
| 3 | Inverter 3 input | Inverter 3 output | Bidirectional inverter 2 output |
| 4 | Inverter 4 input | Inverter 4 output | Bidirectional inverter 3 input |
| 5 | Inverter 5 input | Inverter 5 output | Bidirectional inverter 3 output |
| 6 | Inverter 6 input, also the output enable for all bidirectional pins connected to inverter inputs | Inverter 6 output | Bidirectional inverter 4 input |
| 7 | Inverter 7 input, also the output enable for all bidirectional pins connected to inverter output | Inverter 7 output | Bidirectional inverter 4 output |

### Chip location

{{< shuttle-map "tt06" "299" >}}
