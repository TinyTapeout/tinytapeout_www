---
hidden: true
title: "246 RiscV Scan Chain based CPU -- block 2 -- instructions"
weight: 247
---

## 246 : 0b 011 110 110 : RiscV Scan Chain based CPU -- block 2 -- instructions

{{< tt-scanchain-switches "011110110" >}}

* Author: Emilian Miron
* Description: RiscV Scan Chain based CPU -- block 2 -- instructions
* [GitHub repository](https://github.com/diferential/sc-rv-tt03-block2)
* HDL project
* [Extra docs](https://github.com/diferntial/sc-rv-tt03-block2/blob/main/README.md)
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
