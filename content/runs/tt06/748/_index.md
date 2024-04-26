---
hidden: true
title: "748 Bit Control"
weight: 64
---

## 748 : Bit Control

* Author: K Opong-Mensah
* Description: Bit pattern cycle on every clock cycle.
* [GitHub repository](https://github.com/kdotom/bit_ctrl)
* [GDS submitted](https://github.com/kdotom/bit_ctrl/actions/runs/8754368903)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

### How it works

This project outputs a different bit pattern on each clock cycle and then resets.

### How to test

To test this project, apply a reset signal, cycle the clock several times and compare to the expected outputs.

### External hardware

GPIOs can be measured directly to test performance.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  | out[0] |  |
| 1 |  | out[1] |  |
| 2 |  | out[2] |  |
| 3 |  | out[3] |  |
| 4 |  | out[4] |  |
| 5 |  | out[5] |  |
| 6 |  | out[6] |  |
| 7 |  | out[7] |  |

### Chip location

{{< shuttle-map "tt06" "748" >}}
