---
hidden: true
title: "65 7-segment LED flasher"
weight: 66
---

## 65 : 0b 001 000 001 : 7-segment LED flasher

* Author: Joseph Chiu
* Description: Drives 7-segment LED display, alternating between NIC and JAC
* [GitHub repository](https://github.com/toybuilder/tt02-learn-tinytapeout)
* [Most recent GDS build](https://github.com/toybuilder/tt02-learn-tinytapeout/actions/runs/3525820603)
* [Wokwi](https://wokwi.com/projects/341490465660469844) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: TTO standard switches and 7-segment display



### How it works

Master clock is fed through a prescaler with four tap-points which feeds a 4-bit ripple counter (there are 6 total bits, but the top two bits are discarded). 2:1 muxes are chained to act like a 8:1 mux for each LED segment position. As the counter runs, this results in each segment being turned on or off as needed to render the display sequence (NIC JAC ).  The highest order bit is used to blink the decimal point on/off. 

### How to test

IN5 and IN6 selects the clock prescaler. OUT0-OUT7 are the LED segment outputs.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | Prescale select bit 0  | segment f |
| 6 | Prescale select bit 1  | segment g |
| 7 | none  | segment dp |
