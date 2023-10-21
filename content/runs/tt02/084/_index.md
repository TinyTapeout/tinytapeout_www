---
hidden: true
title: "84 Worm in a Maze"
weight: 85
---

## 84 : 0b001010100 : Worm in a Maze

* Author: Tim Victor
* Description: Animation demo on seven-segment LED
* [GitHub repository](https://github.com/timvgso/tinatapeworm)
* [Most recent GDS build](https://github.com/timvgso/tinatapeworm/actions/runs/3574367774)
* [Wokwi](https://wokwi.com/projects/348381622440034899) project
* [Extra docs]()
* Clock: 25 Hz
* External hardware: 



### How it works

A segmented worm travels along a pseudo-random path

### How to test

Maximum clock divider will probably be best

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | LED segment a |
| 1 | disable auto-reset  | LED segment b |
| 2 | manual reset  | LED segment c |
| 3 | disable /16 clock divider ("turbo mode")  | LED segment d |
| 4 | display 2 or 3 worm segments  | LED segment e |
| 5 | none  | LED segment f |
| 6 | none  | LED segment g |
| 7 | none  | none |
