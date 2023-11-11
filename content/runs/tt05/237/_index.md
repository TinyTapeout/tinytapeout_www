---
hidden: true
title: "237 4 Bit ALU"
weight: 57
---

## 237 : 4 Bit ALU

* Author: Lucius Chee
* Description: A simple 4-bit, 13 instruction, arithmetic logic unit.
* [GitHub repository](https://github.com/czlucius/tt05_alu)
* [GDS submitted](https://github.com/czlucius/tt05_alu/actions/runs/6756712073)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: digital logic (e.g. buttons/sensors)



### How it works

The input 8 bits are split into the upper 4 bits (value y), and lower 4 bits (value x).
Depending on the instruction given after the select pin, operations will be performed on the values to give an 8 bit output.
The select pins use the bi-directional I/O.

|Select (bidi 3 - 0)|Operation|
|0|+|
|1|-|
|2|*|
|3|/|
|4|bitwise AND|
|5|bitwise OR|
|6|bitwise XOR|
|7|bitwise NAND|
|8|bitwise NOR|
|9|~ (negation of 8 bits)|
|10|% (modulo)|
|11|<< (left shift)|
|12|>> (right shift)|
|other|input bits as is|


### How to test

After reset, the counter should increase by one every second with a 10MHz input clock.
Experiment by changing the inputs to change the counting speed.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | x3  | output 7 | instruction select bit 0 |
| 1 | x2  | output 6 | instruction select bit 1 |
| 2 | x1  | output 5 | instruction select bit 2 |
| 3 | x0  | output 4 | none |
| 4 | y3  | output 3 | none |
| 5 | y2  | output 2 | none |
| 6 | y1  | output 1 | none |
| 7 | y0  | output 0 | none |

### Chip location

{{< shuttle-map "tt05" "237" >}}
