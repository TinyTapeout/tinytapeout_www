---
hidden: true
title: "155 Amaranth 6 Bits Gray counter"
weight: 156
---

## 155 : Amaranth 6 Bits Gray counter

* Author: Camilo Soto
* Description: Amaranth Gray 6 Bits gray counter
* [GitHub repository](https://github.com/tucanae47/tt02-gray-counter)
* [Most recent GDS build](https://github.com/tucanae47/tt02-gray-counter/actions/runs/3605848170)
* HDL project
* [Extra docs](https://github.com/tucanae47/tt02-gray-counter)
* Clock: 3000 Hz
* External hardware: None

Image path is broken

### How it works

The reflected binary code (RBC), also known as reflected binary (RB) or Gray code after Frank Gray, 
is an ordering of the binary numeral system such that two successive values differ in only one bit (binary digit).
For example, the representation of the decimal value "1" in binary would normally be "001" and "2" would be "010". 
In Gray code, these values are represented as "001" and "011". That way, incrementing a value from 1 to 2 requires
only one bit to change, instead of two (Wikipedia https://en.wikipedia.org/wiki/Gray_code)


### How to test

Apply clk to the in[0], rst on in[1]

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | count[0] |
| 1 | reset  | count[1] |
| 2 | none  | count[2] |
| 3 | none  | count[3] |
| 4 | none  | count[4] |
| 5 | none  | count[5] |
| 6 | none  | count[6] |
| 7 | none  | none |
