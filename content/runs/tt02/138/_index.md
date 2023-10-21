---
hidden: true
title: "138 Option23"
weight: 139
---

## 138 : 0b 010 001 010 : Option23

* Author: bitluni
* Description: Character ROM and bitmap shifter for POV displays
* [GitHub repository](https://github.com/bitluni/tt02-option23)
* [Most recent GDS build](https://github.com/bitluni/tt02-option23/actions/runs/3601637562)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Pink LEDs



### How it works

clock: clocks out character columns or shifts in data. din = 1111111: show characters and bitmaps column by column. din = 1xxxxxx shift in ASCII character x. din = b10xxxxx : shift in bitmap column xxxxx

### How to test

Shift in some data and set din = 1111111 to clock out characters and graphics

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led 0 |
| 1 | din 0  | led 1 |
| 2 | din 1  | led 2 |
| 3 | din 2  | led 3 |
| 4 | din 3  | led 4 |
| 5 | din 4  | led 5 |
| 6 | din 5  | led 6 |
| 7 | din 6  | led 7 |
