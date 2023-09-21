---
hidden: true
title: "226 Option23 Serial"
weight: 227
---

## 226 : Option23 Serial

* Author: bitluni
* Description: Character ROM and bitmap shifter for POV displays
* [GitHub repository](https://github.com/bitluni/tt02-option23ser)
* [Most recent GDS build](https://github.com/bitluni/tt02-option23ser/actions/runs/3603145860)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Pink LEDs



### How it works

clock: clocks out character columns or shifts in data. Data is 8bits LSB first. Highest bit is ignored. Data = b01xxxxxx ASCII character no x + 32. data = b00xxxxxx bitmap column. under/over is underline and overline for all bitmap columns

### How to test

Shift in some data and set din = 1111111 to clock out characters and graphics

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led 0 |
| 1 | reset  | led 1 |
| 2 | write  | led 2 |
| 3 | din  | led 3 |
| 4 | under  | led 4 |
| 5 | over  | led 5 |
| 6 | none  | led 6 |
| 7 | none  | led 7 |
