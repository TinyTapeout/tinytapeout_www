---
hidden: true
title: "107 i4004 for TinyTapeout"
weight: 25
---

## 107 : i4004 for TinyTapeout

* Author: ISHI-KAI
* Description: i4004 for TinyTapeout by ISHI-KAI.
* [GitHub repository](https://github.com/noritsuna/tt06-tt_um_i4004)
* [GDS submitted](https://github.com/noritsuna/tt06-tt_um_i4004/actions/runs/8479565288)
* HDL project
* [Extra docs](None)
* Clock: 741000 Hz

### How it works

This is [i4004](https://ja.wikipedia.org/wiki/Intel_4004) Chip.

### How to test

No Test.

### External hardware

-[MCS4 Memory System](https://github.com/ryomuk/tangnano-MCS4memory)


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | data0_pad | cmrom_pad |  |
| 1 | data1_pad | cmram0_pad |  |
| 2 | data2_pad | cmram1_pad |  |
| 3 | data3_pad | cmram2_pad |  |
| 4 | clk1_pad | cmram3_pad |  |
| 5 | clk2_pad | sync_pad |  |
| 6 | poc_pad |  |  |
| 7 | test_pad |  |  |

### Chip location

{{< shuttle-map "tt06" "107" >}}
