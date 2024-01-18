---
hidden: true
title: "247 RiscV Scan Chain based CPU -- block 3 -- registers"
weight: 248
---

## 247 : 0b 011 110 111 : RiscV Scan Chain based CPU -- block 3 -- registers

{{< tt-scanchain-switches "011110111" >}}

* Author: Emilian Miron
* Description: RiscV Scan Chain based CPU -- block 3 -- registers
* [GitHub repository](https://github.com/diferential/sc-rv-tt03-block3)
* [Most recent GDS build](https://github.com/diferential/sc-rv-tt03-block3/actions/runs/4789384555)
* HDL project
* [Extra docs](https://github.com/diferntial/sc-rv-tt03-block3/blob/main/README.md)
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
