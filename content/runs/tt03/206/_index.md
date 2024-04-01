---
hidden: true
title: "206 Marquee"
weight: 207
---

## 206 : 0b 011 001 110 : Marquee

{{< tt-scanchain-switches "011001110" >}}

* Author: Christopher 'ctag' Bero
* Description: Scrolls 'ctag' across the 7seg.
* [GitHub repository](https://github.com/ctag/tt02-submission-ctag)
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
