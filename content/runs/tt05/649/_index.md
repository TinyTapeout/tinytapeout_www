---
hidden: true
title: "649 8-Bit Shift Register with Output Latches 74HC595"
weight: 33
---

## 649 : 8-Bit Shift Register with Output Latches 74HC595

* Author: Hirosh Dabui
* Description: The 74HC595 shift register
* [GitHub repository](https://github.com/splinedrive/74hc595)
* [GDS submitted](https://github.com/splinedrive/74hc595/actions/runs/6699624147)
* HDL project
* [Extra docs]()
* Clock:  Hz
* External hardware: You should connect 8 LEDs; perhaps a Pmod might also work.



### How it works

https://www.onsemi.com/pdf/datasheet/mm74hc595-d.pdf


### How to test

https://www.onsemi.com/pdf/datasheet/mm74hc595-d.pdf


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | sclrn  | none | q[0] |
| 1 | ser  | none | q[1] |
| 2 | rck  | none | q[2] |
| 3 | srck  | none | q[3] |
| 4 | G  | none | q[4] |
| 5 | n/a  | none | q[5] |
| 6 | n/a  | none | q[6] |
| 7 | n/a  | none | q[7] |

### Chip location

{{< shuttle-map "tt05" "649" >}}
