---
hidden: true
title: "621 Tiny ALU"
weight: 50
---

## 621 : Tiny ALU

* Author: Adam Majmudar
* Description: A super simple ALU from my GPU design
* [GitHub repository](https://github.com/adam-maj/tt06)
* [GDS submitted](https://github.com/adam-maj/tt06/actions/runs/8747983216)
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

I'm designing a minimal GPU, which is a large project and also challenging to connect with the tt06 pins. Rather than try to wrangle with this setup and buy up a bunch of tiles, I figured I would put together something simple so I can get the peace of mind of having a submission!

I'll still be shipping my GPU project, which I'll add a link to here soon - but for tapeout I didn't want to block on that.

### How to test

The test bench is quite simple - just testing the addition function of the ALU.

### External hardware

No external hardware is needed.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | rs[0] | alu_out[0] | alu_arithmetic_mux[0] |
| 1 | rs[1] | alu_out[1] | alu_arithmetic_mux[1] |
| 2 | rs[2] | alu_out[2] |  |
| 3 | rs[3] | alu_out[3] |  |
| 4 | rt[0] |  |  |
| 5 | rt[1] |  |  |
| 6 | rt[2] |  |  |
| 7 | rt[3] |  |  |

### Chip location

{{< shuttle-map "tt06" "621" >}}
