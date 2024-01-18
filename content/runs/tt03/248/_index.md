---
hidden: true
title: "248 RiscV Scan Chain based CPU -- block 4 -- ALU"
weight: 249
---

## 248 : 0b 011 111 000 : RiscV Scan Chain based CPU -- block 4 -- ALU

{{< tt-scanchain-switches "011111000" >}}

* Author: Emilian Miron
* Description: RiscV Scan Chain based CPU -- block 4 -- ALU
* [GitHub repository](https://github.com/diferential/sc-rv-tt03-block4)
* [Most recent GDS build](https://github.com/diferential/sc-rv-tt03-block4/actions/runs/4789409676)
* HDL project
* [Extra docs](https://github.com/diferntial/sc-rv-tt03-block4/blob/main/README.md)
* Clock: 20000 Hz
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
