---
hidden: true
title: "159 M segments"
weight: 160
---

## number : 0b010011111 : M segments

* Author: Matt Venn
* Description: Setting the correct input will show a 3 on the display
* [GitHub repository](https://github.com/mattvenn/tt02-m-segments)
* [Most recent GDS build](https://github.com/mattvenn/tt02-m-segments/actions/runs/3612905273)
* [Wokwi](https://wokwi.com/projects/339688086163161683) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: None

![picture](images/msegments.png)

### How it works

AND gates connect to the 7 segment display

### How to test

Turning on the first 4 inputs will show a 3 on the display

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | input 1  | segment a |
| 1 | input 2  | segment b |
| 2 | input 3  | segment c |
| 3 | input 4  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | dot |
