---
hidden: true
title: "685 TinyTapeout SPI Master"
weight: 212
---

## 685 : TinyTapeout SPI Master

* Author: Samit & Fahim
* Description: SPI Msster 
* [GitHub repository](https://github.com/ReinstatedSamit/tt_um_I2C_to_SPI)
* [GDS submitted](https://github.com/ReinstatedSamit/tt_um_I2C_to_SPI/actions/runs/8748688536)
* HDL project
* [Extra docs](None)
* Clock: 400000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

If `sel` is high, then a counter is output on the output pins and the bidirectional pins (`data_o = counter_o = counter`).
If `sel` is low, the bidirectional pins are mirrored to the output pins (`data_o` = `data_i`).

### How to test

Set `sel` high and observe that the counter is output on the output pins (`data_o`) and the bidirectional pins (`counter_o`).

Set `sel` low and observe that the bidirectional pins are mirrored to the output pins (`data_o` = `data_i`).


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | i2c_data_in | sck_o |  |
| 1 | i2c_clk_in | mosi_o |  |
| 2 | miso_i | i2c_data_out |  |
| 3 |  | i2c_clk_out |  |
| 4 |  | i2c_data_oe |  |
| 5 | i2c_wb_err_i | i2c_clk_oe |  |
| 6 | i2c_wb_rty_i |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "685" >}}
