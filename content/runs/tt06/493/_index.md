---
hidden: true
title: "493 SynchMux"
weight: 137
---

## 493 : SynchMux

* Author: bc2kaneda
* Description: A 2 bit synchronous mux with output enable
* [GitHub repository](https://github.com/bc2berlin/tt06)
* [GDS submitted](https://github.com/bc2berlin/tt06/actions/runs/8693045232)
* [Wokwi](https://wokwi.com/projects/395054508867644417) project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

If OE == 0 then Y[0:1], YP, Z[0:1] and ZP are in a high-z state.

Output Y[0:1] = (SEL == 0) ? A[0:1] : B[0:1]
Output Z[0:1] = (SEL == 0) ? ~A[0:1] : ~B[0:1]

Output YP and ZP are the parity of Y and Z respectively.

POPCNT_Y[0:1] and POPCNT_Z[0:1] are the population count of {Y[0:1],YP} and {Z[0:1],ZP} respectively.
These pins are never in high-z state.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | CLK | POPCNT_Y0 | Y1 |
| 1 | RST | POPCNT_Y1 | Y2 |
| 2 | A1 | POPCNT_Z0 | YP |
| 3 | A2 | POPCNT_Z1 | Z1 |
| 4 | B1 |  | Z2 |
| 5 | B2 |  | ZP |
| 6 | SEL |  |  |
| 7 | OE |  |  |

### Chip location

{{< shuttle-map "tt06" "493" >}}
