---
hidden: true
title: "330 Clock and Random Number Gen"
weight: 120
---

## 330 : Clock and Random Number Gen

* Author: Austin Lo
* Description: Divider up it 16bit input and a simple random number
* [GitHub repository](https://github.com/lolo0827/tapeout-v2)
* [GDS submitted](https://github.com/lolo0827/tapeout-v2/actions/runs/6675688857)
* HDL project
* [Extra docs]()
* Clock: 200000000 Hz
* External hardware: 



### How it works

Uses a set of registers to divide the clock.

Both 8 bit input are used for the divider

Can divide up to 65565, target uses 20 Mhz as example.


### How to test

After reset, the clock should be divided by the input a 20MHz input clock.
Experiment by changing the inputs


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | division input bit 0  | uo_out[0] clock output | division input bit 8 |
| 1 | division input bit 1  | Random Number Output | division input bit 9 |
| 2 | division input bit 2  | Random Number Output | division input bit 10 |
| 3 | division input bit 3  | Random Number Output | division input bit 11 |
| 4 | division input bit 4  | Random Number Output | division input bit 12 |
| 5 | division input bit 5  | Random Number Output | division input bit 13 |
| 6 | division input bit 6  | Random Number Output | division input bit 14 |
| 7 | division input bit 7  | Random Number Output | division input bit 15 |

### Chip location

{{< shuttle-map "tt05" "330" >}}
