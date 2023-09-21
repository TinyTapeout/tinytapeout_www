---
hidden: true
title: "224 SevSegFX"
weight: 225
---

## 224 : SevSegFX

* Author: Mazen Saghir, ECE Department, American University of Beirut (mazen@aub.edu.lb)
* Description: Seven segment display effect generator
* [GitHub repository](https://github.com/mazensaghir/tt02-sevsegfx)
* [Most recent GDS build](https://github.com/mazensaghir/tt02-sevsegfx/actions/runs/3612703382)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: 



### How it works

Generates hexadecimal digits and 16 dynamic patterns on the seven segment display.

### How to test

Use input[7] to display digits (=0) or effects (=1). Use input[6] to blink displayed digits (=1) or not (=0). Only digits can be blinked. Use inputs [5:2] to select digit or effect pattern to display.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | sel0/d0  | segment c |
| 3 | sel1/d1  | segment d |
| 4 | sel2/d2  | segment e |
| 5 | sel3/d2  | segment f |
| 6 | blink  | segment g |
| 7 | fx  | none |
