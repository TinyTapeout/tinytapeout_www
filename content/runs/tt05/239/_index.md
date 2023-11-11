---
hidden: true
title: "239 SkullFET"
weight: 26
---

## 239 : SkullFET

* Author: Uri Shaked
* Description: Bare-bone transistors
* [GitHub repository](https://github.com/urish/tt05-skullfet)
* [GDS submitted](https://github.com/urish/tt05-skullfet/actions/runs/6755438108)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

Hand-crafted, skull-shaped MOSFET transistors. ☠️

The project contains three SkullFET devices: a NOT gate, a NAND gate, and a SR flip-flop.


### How to test

Input some values into A and B, and observe the outputs. The first output is connected to the SkullFET inverter, and the second output
is connected to the SkullFET NAND gate.

Pulse ~S to set the SkullFlop (Q), and pulse ~R to reset it.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | A  | ~A | none |
| 1 | B  | ~(A&B) | none |
| 2 | ~S  | Q | none |
| 3 | ~R  | ~Q | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |

### Chip location

{{< shuttle-map "tt05" "239" >}}
