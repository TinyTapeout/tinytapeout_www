---
hidden: true
title: "975 Temperature Sensor NG"
weight: 31
---

## 975 : Temperature Sensor NG

* Author: Harald Pretl
* Description: Temperature sensor synthesized from standard cells
* [GitHub repository](https://github.com/iic-jku/jku-tt06-tempsens-ng)
* [GDS submitted](https://github.com/iic-jku/jku-tt06-tempsens-ng/actions/runs/8662012587)
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

There will be a better explanation in the future. In short, it measures the on-chip temperature, and puts out the result.

### How to test

Simply turn it on, and see the result. IO usage documented in the `info.yml`.

For direct outside control (bypassing the internal measurement state machine), use the following settings:

* Set `uio_in[3:0] = 0b1111` (enable debug mode 15).
* Set the DAC by using `ui_in[5:0]` (6b direct control of `tempsens_dat[5:0]`).
* `ui_in[6]` is connected to `tempsens_enable`.
* `ui_in[7]` is connected to `tempsens_prechrgn`.
* The output of the temperature sensor `tempsens_tempdelay` is connected to `uio_out[4]`.
* Use the `clk` input to synchronize the temperature output of falling edge.

### External hardware

Requires a logic analyzer or similar to inspect the digital outputs.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | DAC code [0]  | out[0] or out[8] or out[16]  |      |
| 1 | DAC code [1]  | out[1] or out[9] or out[17]  |      |
| 2 | DAC code [2]  | out[2] or out[10] or out[18]  |      |
| 3 | DAC code [3]  | out[3] or out[11] or out[19]  |      |
| 4 | DAC code [4]  | out[4] or out[12]  |      |
| 5 | DAC code [5]  | out[5] or out[13]  |      |
| 6 | output selection [0]  | out[6] or out[14]  |      |
| 7 | output selection [1]  | out[7] or out[15]  |      |


### Chip location

{{< shuttle-map "tt06" "975" >}}
