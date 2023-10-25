---
hidden: true
title: "52 XorShift32"
weight: 53
---

## 52 : 0b 000 110 100 : XorShift32

{{< tt-scanchain-switches "000110100" >}}

* Author: Ethan Mahintorabi
* Description: XorShift32 random number generator
* [GitHub repository](https://github.com/QuantamHD/ethan-evan-random-numbers)
* [Most recent GDS build](https://github.com/QuantamHD/ethan-evan-random-numbers/actions/runs/3463641150)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Uses the Xorshift32 algorithm to generate a random 32 bit number. Number is truncated to 3 bits and displayed

### How to test

While reset is set, hardware reads in seed value from input bits 2:7 and sets the inital seed as that binary number. After reset is deasserted, the hardware will generate a new number every 1000 clock cycles.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | seed_bit0  | segment c |
| 3 | seed_bit1  | segment d |
| 4 | seed_bit2  | segment e |
| 5 | seed_bit3  | segment f |
| 6 | seed_bit4  | segment g |
| 7 | seed_bit5  | none |
