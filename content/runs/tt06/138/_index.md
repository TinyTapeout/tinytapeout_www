---
hidden: true
title: "138 ANS Encoder/Decoder"
weight: 15
---

## 138 : ANS Encoder/Decoder

* Author: Davide Asnaghi & Lenny Khazan
* Description: Asymmetric Numeral Systems Encoder/Decoder
* [GitHub repository](https://github.com/LK/tt06-ans)
* [GDS submitted](https://github.com/LK/tt06-ans/actions/runs/8757566085)
* HDL project
* [Extra docs](None)
* Clock: 25000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Big data goes in, small data comes out

### How to test

TBD

### External hardware

None


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | input | output | cmd |
| 1 | input | output | cmd |
| 2 | input | output | in_vld |
| 3 | input | output | out_rdy |
| 4 |  |  | in_rdy |
| 5 |  |  | out_vld |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "138" >}}
