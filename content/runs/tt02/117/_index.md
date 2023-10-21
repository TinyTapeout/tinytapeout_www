---
hidden: true
title: "117 Marquee"
weight: 118
---

## 117 : 0b 001 110 101 : Marquee

* Author: Christopher 'ctag' Bero
* Description: Scrolls 'ctag' across the 7seg.
* [GitHub repository](https://github.com/ctag/tt02-submission-ctag)
* [Most recent GDS build](https://github.com/ctag/tt02-submission-ctag/actions/runs/3597568966)
* [Wokwi](https://wokwi.com/projects/349886696875098706) project
* [Extra docs]()
* Clock: 2 Hz
* External hardware: NA/Button



### How it works

Uses two flip-slops to get a 4-state machine, and then just activates LEDs from the outputs.

### How to test

Set clock to button and click through.

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
| 7 | none  | none |
