---
hidden: true
title: "334 VGA Experiments"
weight: 67
---

## 334 : VGA Experiments

* Author: Tom Keddie
* Description: Simple Game
* [GitHub repository](https://github.com/TomKeddie/tinytapeout-2023-tt05a)
* [GDS submitted](https://github.com/TomKeddie/tinytapeout-2023-tt05a/actions/runs/6737798418)
* HDL project
* [Extra docs]()
* Clock: 25175000 Hz
* External hardware: Digilent VGA PMOD or mole99 vga pmod



### How it works

VGA game using paddles attached to input.  No scoring, no diagonal ball movement


### How to test

Attach VGA pmod and connect to monitor.  Use the inputs to move the paddles


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | left paddle up  | r1/r0 (mole99/digilent) | g0 |
| 1 | left paddle down  | g1/r1 (mole99/digilent) | g1 |
| 2 | right paddle up  | b1/r2 (mole99/digilent) | g2 |
| 3 | right paddle down  | vsync/r3 (mole99/digilent) | g3 |
| 4 | none  | r0/b0 (mole99/digilent) | hsync |
| 5 | none  | g0/b1 (mole99/digilent) | vsync |
| 6 | none  | b0/b2 (mole99/digilent) | tied low |
| 7 | pmod sel (high=mole99, low=digilent)  | hsync/b3 (mole99/digilent) | tied low |

### Chip location

{{< shuttle-map "tt05" "334" >}}
