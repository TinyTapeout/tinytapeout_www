---
hidden: true
title: "153 Adi counter"
weight: 154
---

## 153 : 0b010011001 : Adi counter

* Author: Prabal Dutta
* Description: Test FSM
* [GitHub repository](https://github.com/prabaldutta/tt02-adi-demo)
* [Most recent GDS build](https://github.com/prabaldutta/tt02-adi-demo/actions/runs/3603700069)
* [Wokwi](https://wokwi.com/projects/341613097060926036) project
* [Extra docs](none)
* Clock: 1 Hz
* External hardware: Just PB and 7-seg



### How it works

Clocks FSM on button push

### How to test

Hook up to 7-deg display, push button, and see A-d-i cycle on LEDs

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
