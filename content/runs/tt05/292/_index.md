---
hidden: true
title: "292 8-bit Floating-Point Adder"
weight: 73
---

## 292 : 8-bit Floating-Point Adder

* Author: Matt Ngaw
* Description: A floating-point adder following the FP8 E5M2 standard.
* [GitHub repository](https://github.com/mattngaw/98154-tt05-fp8adder)
* [GDS submitted](https://github.com/mattngaw/98154-tt05-fp8adder/actions/runs/6756816850)
* HDL project
* [Extra docs]()
* Clock:  Hz
* External hardware: 



### How it works

The circuit combinationally computes the floating-point sum.


### How to test

Hold two 8-bit inputs on the input and bi-directional pins, and the
floating-point sum comes out of the output pins.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input 1 bit 0  | output bit 0 | input 2 bit 0 |
| 1 | input 1 bit 1  | output bit 1 | input 2 bit 1 |
| 2 | input 1 bit 2  | output bit 2 | input 2 bit 2 |
| 3 | input 1 bit 3  | output bit 3 | input 2 bit 3 |
| 4 | input 1 bit 4  | output bit 4 | input 2 bit 4 |
| 5 | input 1 bit 5  | output bit 5 | input 2 bit 5 |
| 6 | input 1 bit 6  | output bit 6 | input 2 bit 6 |
| 7 | input 1 bit 7  | output bit 7 | input 2 bit 7 |

### Chip location

{{< shuttle-map "tt05" "292" >}}
