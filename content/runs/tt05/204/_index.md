---
hidden: true
title: "204 Tetris"
weight: 18
---

## 204 : Tetris

* Author: Carson Swoveland
* Description: Implements the second-most-popular game of all time in hardware
* [GitHub repository](https://github.com/SuperTails/tt-tetris)
* [GDS submitted](https://github.com/SuperTails/tt-tetris/actions/runs/6700094713)
* HDL project
* [Extra docs]()
* Clock: 6250000 Hz
* External hardware: 



### How it works

Explain how your project works


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Move Left  | VGA HSync | A0/D0 |
| 1 | Move Down  | VGA VSync | A1/D1 |
| 2 | Move Left  | VGA Red | A2/D2 |
| 3 | Spin Counterclockwise  | VGA Green | A3 |
| 4 | Spin Clockwise  | VGA Blue | A4 |
| 5 | none  | Memory Start | A5 |
| 6 | none  | Memory Continue | none |
| 7 | none  | Memory Write Enable | none |

### Chip location

{{< shuttle-map "tt05" "204" >}}
