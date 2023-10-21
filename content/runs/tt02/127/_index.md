---
hidden: true
title: "127 Seven Segment Clock"
weight: 128
---

## number : 0b001111111 : Seven Segment Clock

* Author: Greg Davill
* Description: Logic to drive 6 external 74hct595's that in turn drive 7 segment displays. The displays form a digital clock.
* [GitHub repository](https://github.com/gregdavill/tt02-clock)
* [Most recent GDS build](https://github.com/gregdavill/tt02-clock/actions/runs/3583034453)
* HDL project
* [Extra docs](TBD)
* Clock: 128Hz Hz
* External hardware: 6x 74hct595's, 6x 7segment

Image path is broken

### How it works

TBD

### How to test

TBD

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | sclk |
| 1 | reset  | latch |
| 2 | minute_up  | data |
| 3 | hour_up  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
