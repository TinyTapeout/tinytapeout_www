---
hidden: true
title: "55 clash cpu"
weight: 56
---

## number : 0b000110111 : clash cpu

* Author: Jack Leightcap
* Description: tiny register machine written in clash
* [GitHub repository](https://github.com/mattvenn/clash-silicon-tinytapeout.git)
* [Most recent GDS build](https://github.com/mattvenn/clash-silicon-tinytapeout/actions/runs/3609567931)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

poorly

### How to test

encode instructions. tick clock.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | instr 5  | jump |
| 1 | instr 4  | unused |
| 2 | instr 3  | unused |
| 3 | instr 2  | register 4 |
| 4 | instr 1  | register 3 |
| 5 | instr 0  | register 2 |
| 6 | rst  | register 1 |
| 7 | clock  | register 0 |
