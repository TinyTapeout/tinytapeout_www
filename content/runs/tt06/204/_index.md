---
hidden: true
title: "204 Chisel Pong"
weight: 103
---

## 204 : Chisel Pong

* Author: Tjark Petersen
* Description: A basic Pong game using VGA implemented in Chisel.
* [GitHub repository](https://github.com/tjarker/tiny-tapeout-pong)
* [GDS submitted](https://github.com/tjarker/tiny-tapeout-pong/actions/runs/8754004711)
* HDL project
* [Extra docs](None)
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a Chisel template

### How to test

Currently we use cocotb, this shall change to ChiselTest

### External hardware

non by default


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | left player up | r[1] | state[0] |
| 1 | left player down | g[1] | state[1] |
| 2 | right player up | b[1] | state[2] |
| 3 | right player down | v-sync | v-sync |
| 4 | engage left player autopilot | r[0] | h-sync |
| 5 | engage right player autopilot | g[0] | left player lost |
| 6 | not used | b[0] | right player lost |
| 7 | not used | h-sync | game tick |

### Chip location

{{< shuttle-map "tt06" "204" >}}
