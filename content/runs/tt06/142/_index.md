---
hidden: true
title: "142 Karplus-Strong String Synthesis"
weight: 163
---

## 142 : Karplus-Strong String Synthesis

* Author: Chinmay Patil
* Description: A KS String Audio Synthesizer 
* [GitHub repository](https://github.com/pyamnihc/tt06_um_ks_pyamnihc)
* [GDS submitted](https://github.com/pyamnihc/tt06_um_ks_pyamnihc/actions/runs/8743491773)
* HDL project
* [Extra docs](None)
* Clock: 256000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is simplified implementation of Karplus-Strong (KS) string synthesis based on papers, [Digital Synthesis of Plucked-String and Drum Timbres](https://doi.org/10.2307/3680062) and [Extensions of the Karplus-Strong Plucked-String Algorithm](https://doi.org/10.2307/3680063).

A register map controls and configures the KS synthesis module. This register map is accessed through a SPI interface. Synthesized sound samples are sent out through the I2S transmitter interface.

### How to test

Connect a clock with frequency `f_clk = 256 kHz` and apply a reset cycle to initialize the design, this sets the audio sample rate at `fs = 16 kHz`. Use the spi register map or the `ui_in` to futher configure the design. The synthesized samples are sent continuously through the I2S transmitter interface.

### External hardware

An I2S DAC
The 8-bit signed sound samples are sent out at `f_sck = 256 kHz` through this interface.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | ~rst_n_prbs_15, ~rst_n_prbs_7 |  | sck_i |
| 1 | load_prbs_15, load_prbs_7 |  | sdi_i |
| 2 | freeze_prbs_15 |  | sdo_o |
| 3 | freeze_prbs_7 |  | cs_ni |
| 4 | i2s_noise_sel |  | i2s_sck_o |
| 5 | ~rst_n_ks_string |  | i2s_ws_o |
| 6 | pluck |  | i2s_sd_o |
| 7 |  |  | prbs_15 |

### Chip location

{{< shuttle-map "tt06" "142" >}}
