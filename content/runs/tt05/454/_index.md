---
hidden: true
title: "454 Karplus-Strong String Synthesis"
weight: 100
---

## 454 : Karplus-Strong String Synthesis

* Author: Chinmay Patil
* Description: Plucked string sound synthesizer
* [GitHub repository](https://github.com/pyamnihc/tt05-um-ks-pyamnihc)
* [GDS submitted](https://github.com/pyamnihc/tt05-um-ks-pyamnihc/actions/runs/6755365042)
* HDL project
* [Extra docs]()
* Clock: 256000 Hz
* External hardware: 



### How it works

This is simplified implementation of Karplus-Strong (KS) string synthesis based on papers, [Digital Synthesis of Plucked-String and Drum Timbres](https://doi.org/10.2307/3680062) and [Extensions of the Karplus-Strong Plucked-String Algorithm](https://doi.org/10.2307/3680063).

A register map controls and configures the KS synthesis module. This register map is accessed through a SPI interface. Synthesized sound samples can be accessed through the I2S transmitter interface.

###### SPI Frame

SPI Mode: CPOL = 0, CPHA = 1

The 16-bit SPI frame is defined as,

|	Read=1/Write=0	|	Address[6:0]	|	Data[7:0]	|
| --- | --- | --- |

###### Register Map

The Register Map has 16 Registers of 8-bits each.

Complete register map is described in the repository at <https://github.com/pyamnihc/tt04-um-ks-pyamnihc>.

###### I2S Transmitter

The 8-bit signed sound samples can be read out at `f_sck = 256 kHz` through this interface.


### How to test

Connect a clock with frequency `f_clk = 256 kHz` and apply a reset cycle to initialize the design, this sets the audio sample rate at `fs = 16 kHz`. Use the spi register map or the ui_in to futher configure the design. The synthesized samples are sent continuously on the I2S transmitter interface.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ~rst_n_prbs_15, ~rst_n_prbs_7  | segment a | sck_i |
| 1 | load_prbs_15, load_prbs_7  | segment b | sdi_i |
| 2 | freeze_prbs_15  | segment c | sdo_o |
| 3 | freeze_prbs_7  | segment d | cs_ni |
| 4 | i2s_noise_sel  | segment e | i2s_sck_o |
| 5 | ~rst_n_ks_string  | segment f | i2s_ws_o |
| 6 | pluck  | segment g | i2s_sd_o |
| 7 | NOT CONNECTED  | dot | prbs_15 |

### Chip location

{{< shuttle-map "tt05" "454" >}}
