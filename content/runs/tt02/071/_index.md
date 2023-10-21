---
hidden: true
title: "71 Non-restoring Square Root"
weight: 72
---

## 71 : 0b001000111 : Non-restoring Square Root

* Author: Wallace Everest
* Description: Square root for use in RMS calculations
* [GitHub repository](https://github.com/navray/tt02-square-root)
* [Most recent GDS build](https://github.com/navray/tt02-square-root/actions/runs/3646011596)
* HDL project
* [Extra docs](https://github.com/navray/tt02-square-root/blob/main/README.md)
* Clock: 1000 Hz
* External hardware: Result on 7-segment display {0x0..0xB}

![picture](images/gravity_well.png)

### How it works

7-bit input, 4-bit output, unsigned

### How to test

Apply unsigned input {0x0..0x7F} to the logic pins

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | segment a |
| 1 | data(0)  | segment b |
| 2 | data(1)  | segment c |
| 3 | data(2)  | segment d |
| 4 | data(3)  | segment e |
| 5 | data(4)  | segment f |
| 6 | data(5)  | segment g |
| 7 | data(6)  | segment dp |
