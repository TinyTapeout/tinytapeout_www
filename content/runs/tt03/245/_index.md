---
hidden: true
title: "245 RiscV Scan Chain based CPU -- block 1 -- clocking"
weight: 246
---

## 245 : 0b 011 110 101 : RiscV Scan Chain based CPU -- block 1 -- clocking

{{< tt-scanchain-switches "011110101" >}}

* Author: Emilian Miron
* Description: RiscV Scan Chain based CPU -- block 1 -- clocking
* [GitHub repository](https://github.com/diferential/sc-rv-tt03-block1)
* HDL project
* [Extra docs](https://github.com/diferntial/sc-rv-tt03-block1/blob/main/README.md)
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
