---
hidden: true
title: "28 Loading Animation"
weight: 29
---

## 28 : 0b 000 011 100 : Loading Animation

* Author: Andre & Milosch Meriac
* Description: Submission for tt02 - Rotating Dash
* [GitHub repository](https://github.com/meriac/loading-animation)
* [Most recent GDS build](https://github.com/meriac/loading-animation/actions/runs/3463507687)
* [Wokwi](https://wokwi.com/projects/348121131386929746) project
* [Extra docs](https://github.com/meriac/loading-animation/blob/main/README.md)
* Clock: 10000 Hz
* External hardware: Default PCB

![picture](images/loading-animation.png)

### How it works

Slide switch to external clock. All DIP switches to off. DIP2 (Reset) on to run (Reset is low-active). By switching DIP3 (Mode) on and setting the sliding switch to Step-Button, the Step-Button can be now used to animate step by step.

### How to test

Slide switch to external clock. All DIP switches to off. DIP2 (Reset) on to run (Reset is low-active).

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | mode  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | none |
| 7 | none  | none |
