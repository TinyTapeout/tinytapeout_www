---
hidden: true
title: "486 Double Inverter"
weight: 145
---

## 486 : Double Inverter

* Author: Matt Venn
* Description: A little inverter followed by a bigger one
* [GitHub repository](https://github.com/mattvenn/tt06-inverter)
* [GDS submitted](https://github.com/mattvenn/tt06-inverter/actions/runs/8617095811)
* Analog project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Initially I just wanted to do an inverter, but then I thought I'll make the inverter much more powerful.
The problem with much bigger output transistors is that their gate capacitance increases, and so the inverter is slower.
My adding a primary, smaller inverter in front, I get much faster rise times on the big transistors.

### How to test

Apply a pulse to analog pin 1 and see it replicated on analog pin 0.

### External hardware

Oscilloscope


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  |  |  |
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "486" >}}
