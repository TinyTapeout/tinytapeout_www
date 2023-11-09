---
hidden: true
title: "169 8 bit floating point adder"
weight: 144
---

## 169 : 8 bit floating point adder

* Author: Philip Mohr
* Description: Adds two 8 Bit floating point numbers
* [GitHub repository](https://github.com/BTFLV/tt05-btflv-8bit-fp-adder)
* [GDS submitted](https://github.com/BTFLV/tt05-btflv-8bit-fp-adder/actions/runs/6748159289)
* HDL project
* [Extra docs]()
* Clock: None Hz
* External hardware: 

![picture](images/picture.png)

### How it works

Adds two 8 bit floating point numbers under consideration of rounding and infinity cases.
The two floats use the 8 bit input and the 8 bit bidirectional input.
1 bit sign, 4 bit exponent, 3 bit mantissa.


### How to test

Every clock the output should give the addition of the two floats.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Float a Mant[0]  | Float out Mant[0] | Float b Mant[0] |
| 1 | Float a Mant[1]  | Float out Mant[1] | Float b Mant[1] |
| 2 | Float a Mant[2]  | Float out Mant[2] | Float b Mant[2] |
| 3 | Float a Exp[0]  | Float out Exp[0] | Float b Exp[0] |
| 4 | Float a Exp[1]  | Float out Exp[1] | Float b Exp[1] |
| 5 | Float a Exp[2]  | Float out Exp[2] | Float b Exp[2] |
| 6 | Float a Exp[3]  | Float out Exp[3] | Float b Exp[3] |
| 7 | Float a Sign  | Float out Sign | Float b Sign |
