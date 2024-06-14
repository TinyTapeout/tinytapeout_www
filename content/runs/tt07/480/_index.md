---
hidden: true
title: "480 Mini AIE: 2x2 CGRA with Ring-NoC"
weight: 106
---

## 480 : Mini AIE: 2x2 CGRA with Ring-NoC

* Author: Lyte Venn
* Description: A mini aie/coarse-grained reconfigurable array
* [GitHub repository](https://github.com/vrteee/tt07-mini-aie-cgra)
* [GDS submitted](https://github.com/vrteee/tt07-mini-aie-cgra/actions/runs/9084429189)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a minimalistic coarse-grained reconfigurable array inspired by AMD AI engine architecture. The hardware design consists of

- A 2x2 array of compute tiles
- A simplified packet-switched network-on-chip (NoC) to connect the compute tiles
- Two interface tiles to connect the array to external memory and host

The packets loaded by interface tiles are routed through the NoC to the compute tiles. The compute tiles process the packets and send to next compute tile or interface tile. The packets are processed in a pipelined manner.

### How to test

TBA


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | data_0  | out_0  | debug_out0        |
| 1 | data_1  | out_1  | debug_out1        |
| 2 | data_2  | out_2  | debug_out2        |
| 3 | data_3  | out_3  | debug_out3        |
| 4 | data_4  | out_4  | debug_out4        |
| 5 | data_5  | out_5  | debug_out5        |
| 6 | data_6  | out_6  | debug_out6        |
| 7 | data_7  | out_7  | debug_out7        |


### Chip location

{{< shuttle-map "tt07" "480" >}}
