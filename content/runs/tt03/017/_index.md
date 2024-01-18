---
hidden: true
title: "17 TinyFPGA attempt for TinyTapeout3"
weight: 18
---

## 17 : 0b 000 010 001 : TinyFPGA attempt for TinyTapeout3

{{< tt-scanchain-switches "000010001" >}}

* Author: Emilian Miron
* Description: FPGA attempt
* [GitHub repository](https://github.com/diferential/muxpga)
* [Most recent GDS build](https://github.com/diferential/muxpga/actions/runs/4787584570)
* HDL project
* [Extra docs](https://github.com/diferential/muxpga/blob/main/README.md)
* Clock: 1000 Hz
* External hardware: 



### How it works

TODO


### How to test

After reset, the counter should increase by one every second.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | slow clock output |
