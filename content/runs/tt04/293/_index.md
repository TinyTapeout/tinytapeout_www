---
hidden: true
title: "293 Adder"
weight: 56
---

## 293 : Adder

* Author: Juan David Prieto Garzon
* Description: 4-bit Adder
* [GitHub repository](https://github.com/JuanPriet0/tt04-wokwi-cmua-Adder)
* [GDS submitted](https://github.com/JuanPriet0/tt04-wokwi-cmua-Adder/actions/runs/6117334280)
* [Wokwi](https://wokwi.com/projects/375174630101280769) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Our adder is a component that adds two 4-bit inputs. It was designed with FULL-ADDERS cells. The output is a 5-bit vector taking into account the last carry of the sum.


### How to test

To test the adder we only have to put the values of the operands in the 8 input bits. It is a combinational system.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | X0  | S0 | none |
| 1 | X1  | S1 | none |
| 2 | X2  | S2 | none |
| 3 | X3  | S3 | none |
| 4 | Y0  | S4 | none |
| 5 | Y1  | n/a | none |
| 6 | Y2  | n/a | none |
| 7 | Y3  | n/a | none |
