---
hidden: true
title: "124 Rolling Average - 5 bit, 8 bank"
weight: 125
---

## 124 : 0b001111100 : Rolling Average - 5 bit, 8 bank

* Author: Kauna Lei
* Description: 5bit moving average
* [GitHub repository](https://github.com/klei22/Rolling-Average)
* [Most recent GDS build](https://github.com/klei22/Rolling-Average/actions/runs/3599356675)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: gpios to connect with io_in[7:2] and to read io_out[4:0]



### How it works

Using Shift Register Line and Rolling Sum Trick

### How to test

Clock in the high 5 bits of io_in (io_in[7:3]) with the i_data_clk (io_in[2]) (active high), and read output on io_out[4:0]

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | ra_out[0] |
| 1 | reset  | ra_out[1] |
| 2 | i_data_clk  | ra_out[2] |
| 3 | i_value[0]  | ra_out[3] |
| 4 | i_value[1]  | ra_out[4] |
| 5 | i_value[2]  | 0 |
| 6 | i_value[3]  | 0 |
| 7 | i_value[4]  | 0 |
