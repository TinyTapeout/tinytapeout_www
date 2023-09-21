---
hidden: true
title: "221 MicroASIC VI"
weight: 222
---

## 221 : MicroASIC VI

* Author: Mikhail Svarichevsky
* Description: Free-running oscillators to verify simulation vs reality + TRNG
* [GitHub repository](https://github.com/BarsMonster/MicroAsicVI)
* [Most recent GDS build](https://github.com/BarsMonster/MicroAsicVI/actions/runs/3609696287)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: You might benefit from frequency counter than can do averaging across extended period of time. 



### How it works

Combinational loops with dividers to bring output frequency to <50kHz range

### How to test

Select oscillator (pins 4-6) and mesaure frequency on one of output pins. Observe true random numbers at pin 7.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock in (for debugging)  | clock divided by 2^10 |
| 1 | reset  | clock divided by 2^14 |
| 2 | shift register clk  | clock divided by 2^18 |
| 3 | shift register data  | clock divided by 2^22 |
| 4 | clock source id_0  | clock divided by 2^26 |
| 5 | clock source id_1  | clock divided by 2^30 |
| 6 | clock source id_2  | clock divided by 2^32 |
| 7 | unused  | Bit 11 of shift register (to ensure it's not optimized away) |
