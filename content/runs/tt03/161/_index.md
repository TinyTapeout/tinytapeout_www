---
hidden: true
title: "161 GOL-Cell"
weight: 162
---

## 161 : GOL-Cell

* Author: Shaos
* Description: Game of Life Cell
* [GitHub repository](https://github.com/shaos-net/tt02-submission-shaos2)
* [Most recent GDS build](https://github.com/shaos-net/tt02-submission-shaos2/actions/runs/3545474888)
* [Wokwi](https://wokwi.com/projects/349011320806310484) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 8 neighbours and rerouted current state need to go in 2 stages using 5 inputs

![picture](images/wokwi-sch.png)

### How it works

Calculate survive/die decision based on number of neighbours and current state

### How to test

Change number of neighbours and see

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | half  | segment c |
| 3 | input 0 or 5  | segment d |
| 4 | input 1 or 6  | segment e |
| 5 | input 2 or 7  | segment f |
| 6 | input 3 or 8  | segment g |
| 7 | input 4 or 9  | inverted clock |
