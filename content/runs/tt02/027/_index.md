---
hidden: true
title: "27 Tiny Phase/Frequency Detector"
weight: 28
---

## 27 : Tiny Phase/Frequency Detector

* Author: argunda
* Description: Detect phase shifts between 2 square waves.
* [GitHub repository](https://github.com/argunda/tt02-TinyPFD)
* [Most recent GDS build](https://github.com/argunda/tt02-TinyPFD/actions/runs/3454598339)
* [Wokwi](https://wokwi.com/projects/348195845106041428) project
* [Extra docs](https://ieeexplore.ieee.org/document/278348?subid1=20221113-1837-0613-a274-db851cd8a2cb)
* Clock: 0 Hz
* External hardware: Signal generators for square wave inputs.



### How it works

This is one of the blocks of a phased locked loop. The inputs are a reference clock and feedback clock and the outputs are the phase difference on either up or /down pin.

### How to test

If the phase of the feedback clock is leading the reference clock, the up signal should show the phase difference. If it's lagging, the down signal will show the difference.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | reference clock  | up |
| 1 | feedback clock  | (inverted) down |
| 2 | active-low reset  | none |
| 3 | none  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
