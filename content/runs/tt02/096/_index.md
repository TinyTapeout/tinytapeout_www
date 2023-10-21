---
hidden: true
title: "96 Vector dot product"
weight: 97
---

## 96 : 0b 001 100 000 : Vector dot product

* Author: Robert Riachi
* Description: Compute the dot product of two 2x1 vectors each containing 2 bit integers
* [GitHub repository](https://github.com/RobertRiachi/tt02-dot-product)
* [Most recent GDS build](https://github.com/RobertRiachi/tt02-dot-product/actions/runs/3505363693)
* [Wokwi](https://wokwi.com/projects/348787952842703444) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

a := in[0:1], b := in[2:3], c := in[4:5], d := in[6:7] - [a,b,c,d] => [ac * bd]

### How to test

set input to 11011010 => which means [11,01]⋅[10,10] => as ints [3,1]⋅[2,2] => output should be 00001000 => (3*2) + (1*2) = 8

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
