---
hidden: true
title: "342 Oscillators II"
weight: 49
---

## 342 : Oscillators II

* Author: Mikhail Svarichevsky
* Description: Free-running oscillators to verify simulation vs reality + TRNG
* [GitHub repository](https://github.com/BarsMonster/tt04-MicroAsicVII)
* [GDS submitted](https://github.com/BarsMonster/tt04-MicroAsicVII/actions/runs/6124855133)
* HDL project
* [Extra docs]()
* Clock: 1000000 Hz
* External hardware: 



### How it works

Combinational loops with dividers to bring output frequency to <50kHz range


### How to test

Select oscillator (pins 4-6) and mesaure frequency on one of output pins. Observe true random numbers at pin 7.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | unused  | generated clock | none |
| 1 | unused  | clock divided by 2^1 | none |
| 2 | shift register clk  | clock divided by 2^2 | none |
| 3 | shift register data  | clock divided by 2^3 | none |
| 4 | clock source id_0  | clock divided by 2^4 | none |
| 5 | clock source id_1  | clock divided by 2^9 | none |
| 6 | clock source id_2  | TRNG output | none |
| 7 | unused  | Bit 11 of shift register | none |
