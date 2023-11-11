---
hidden: true
title: "12 e Spigot"
weight: 14
---

## 12 : e Spigot

* Author: diadatp
* Description: Spigot algorithm for calculating the digits of e
* [GitHub repository](https://github.com/diadatp/tt05_spigot_e)
* [GDS submitted](https://github.com/diadatp/tt05_spigot_e/actions/runs/6756154089)
* HDL project
* [Extra docs](https://github.com/diadatp/tt05_spigot_e/blob/main/README.md)
* Clock: 350 Hz
* External hardware: 4 x 7447 decoders



### How it works

This project implements a bounded spigot algorithm for calculating the digits (currently 31) of e. While there are many ways to calculate the digits of transcendental numbers like e or pi, this spigot algorithm has much lower memory requirements. It however only produces a single digit at a time, and the number of digits produced is precommited at the time of design. For calculating n digits, the algorithm needs at least (n+1) storage locations. Each digit requires (n+1) calculation steps, repeated (n-1) times producing (n-1) digits (first digit 2 is not counted). Each calculation step requires a constant multiply, an add and a divide with remainder.
There are many optimizations needed to fit as many digits as possible into a 1x1 tile. The biggest contributor is the storage elements. Some quick modeling revealed that the storage elements need to be about as wide as log(n).
The calculation step hardware is shared across all iterations.
The intermediate results are never needed outside each calculation and are never stored in memory.
The memory access is such that each location is read and written to before moving on to the next.
The memory access pattern removes the need for address decoding, replaced with a massive ring of gated shift registers.


### How to test

The digits are output on the bidirectional port and the output port in BCD (Binary-coded decimal). A BCD to seven segment decoder will be needed to display the digits. A clock below 500Hz should allow one to see the digits slide across the segment displays.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | digit_2[0] | digit_0[0] |
| 1 | none  | digit_2[1] | digit_0[1] |
| 2 | none  | digit_2[2] | digit_0[2] |
| 3 | none  | digit_2[3] | digit_0[3] |
| 4 | none  | digit_3[0] | digit_1[0] |
| 5 | none  | digit_3[1] | digit_1[1] |
| 6 | none  | digit_3[2] | digit_1[2] |
| 7 | none  | digit_3[3] | digit_1[3] |

### Chip location

{{< shuttle-map "tt05" "12" >}}
