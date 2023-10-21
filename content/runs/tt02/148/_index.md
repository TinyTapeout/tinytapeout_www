---
hidden: true
title: "148 3-bit adder"
weight: 149
---

## 148 : 0b 010 010 100 : 3-bit adder

* Author: MG
* Description: Add two 3-bit numbers
* [GitHub repository](https://github.com/cmu-stuco-98154/f22-tt02-mgee3)
* [Most recent GDS build](https://github.com/cmu-stuco-98154/f22-tt02-mgee3/actions/runs/3600164397)
* [Wokwi](https://wokwi.com/projects/349803790984020562) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Adds A0 A1 A2 and B0 B1 B2 implemented using one half-adder and two full-adders. LEDs light up correspondingly.

### How to test

Result: binary added score at output LED

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | A0, lowest order bit of first number  | segment a |
| 1 | A1, second order bit of first number  | segment b |
| 2 | A2, highest order bit of first number  | segment c |
| 3 | B0, lowest order bit of second number  | segment d |
| 4 | B1, second order bit of second number  | segment e |
| 5 | B2, highest order bit of second number  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
