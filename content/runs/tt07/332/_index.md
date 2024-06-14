---
hidden: true
title: "332 Delay Line Time Multiplexed NAND Gate"
weight: 114
---

## 332 : Delay Line Time Multiplexed NAND Gate

* Author: Frans Skarman (TheZoq2)
* Description: A time multiplexed nand gate powered by a giant shift reigster
* [GitHub repository](https://github.com/TheZoq2/tt07_delay_line_tmng)
* [GDS submitted](https://github.com/TheZoq2/tt07_delay_line_tmng/actions/runs/9291575568)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a single NAND gate that is fed its inputs from, and writes its results
to a giant shift register. With this, we can achieve the ultimate time/space
tradeoff, a single nand gate able to emulate quite complex logic.

### How to test

Undecided, we are working on a yosys backend to generate "programs" for this
which you can then run by driving the inputs

### External hardware

You need an FPGA or similar to drive the inputs at high enough precision to feed "instructions" to the device.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | TODO  | TODO  |         |
| 1 | TODO  | TODO  |         |
| 2 | TODO  | TODO  |         |
| 3 | TODO  | TODO  |         |
| 4 | TODO  | TODO  |         |
| 5 | TODO  | TODO  |         |
| 6 | TODO  | TODO  |         |
| 7 | TODO  | TODO  |         |


### Chip location

{{< shuttle-map "tt07" "332" >}}
