---
hidden: true
title: "427 Lipsi: Probably the Smallest Processor in the World"
weight: 191
---

## 427 : Lipsi: Probably the Smallest Processor in the World

* Author: Martin Schoeberl
* Description: A tiny 8-bit accumulator based microprocssor.
* [GitHub repository](https://github.com/schoeberl/tt06-lipsi)
* [GDS submitted](https://github.com/schoeberl/tt06-lipsi/actions/runs/8696012345)
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

This is the Lipsi processor. It executes  a hardcoded program
counts up at a readable frequency. That number is displayed on
the 7-segment display. Additionally, the DP blinks (in hhardware).

### How to test

ChiselTest is used for waveform generation.
Currently, we use cocotb, this shall change to ChiselTest.
But that test is disabled

### External hardware

non by default.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input for Lipsi, also switch of blinking LED  | segment a  |         |
| 1 | input for Lipsi  | segment b  |         |
| 2 | input for Lipsi  | segment c  |         |
| 3 | input for Lipsi  | segment d  |         |
| 4 | input for Lipsi  | segment e  |         |
| 5 | input for Lipsi  | segment f  |         |
| 6 | input for Lipsi  | segment g  |         |
| 7 | input for Lipsi  | dp (blinking)  |         |


### Chip location

{{< shuttle-map "tt06" "427" >}}
