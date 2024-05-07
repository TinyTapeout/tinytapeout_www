---
hidden: true
title: "109 Synthesized Time-to-Digital Converter (TDC) v2"
weight: 137
---

## 109 : Synthesized Time-to-Digital Converter (TDC) v2

* Author: Harald Pretl
* Description: Synthesized TDC based on two Vernier delay rings
* [GitHub repository](https://github.com/iic-jku/jku-tt06-tdc-v2)
* [GDS submitted](https://github.com/iic-jku/jku-tt06-tdc-v2/actions/runs/8679868973)
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

This is a synthesized time-to-digital converter (TDC), consisting of two wavefront delay rings with a slightly different delay forming a Vernier TDC.

The time between the rising edge of `start=ui_in[0]` and the rising edge of `stop=ui_in[1]` is measured by both rings and the output in 8b chunks. Based on analog simulation, the time resolution (typical process, room temperature) is on the order of 6ps.

### How to test

Apply two signals to `ui_in[0]` and `ui_in[1]`.

After capturing (rising edge of `ui_in[1]`) the result (i.e., the time delay between rising edge of `ui_in[0]` and `ui_in[2]`) can be muxed-out to `uo_out[7:0]` using `ui_in[7:3]` as byte-wise selector. `ui_in[7:3]=0000` gives result byte 0, `ui_in[7:3]=0001` gives result byte 1, etc.

The input `ui_in[2]` selects the output of ring 0 or ring 1.

### External hardware

Two signal generators generating the logical signals with a programmable delay (important is ns resolution).


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Start signal of TDC  | Result (LSB)  |      |
| 1 | Stop signal of the TDC  | Result  |      |
| 2 | Select result of ring for output  | Result  |      |
| 3 | output select (LSB)  | Result  |      |
| 4 | output select  | Result  |      |
| 5 | output select  | Result  |      |
| 6 | output select  | Result  |      |
| 7 | output select (MSB)  | Result (MSB)  |      |


### Chip location

{{< shuttle-map "tt06" "109" >}}
