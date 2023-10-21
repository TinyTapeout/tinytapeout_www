---
hidden: true
title: "118 channel coding"
weight: 119
---

## 118 : 0b001110110 : channel coding

* Author: Asma Mohsin
* Description: Convolutional coding is widely used in modern digital communication systems.We often get encoded data by using different polynomials having same constraint lengths (K).
* [GitHub repository](https://github.com/AsmaMohsin1507/tt02-channel-coding)
* [Most recent GDS build](https://github.com/AsmaMohsin1507/tt02-channel-coding/actions/runs/3601674491)
* HDL project
* [Extra docs](https://github.com/AsmaMohsin1507/tt02-channel-coding/blob/cccf2f01c80024d59eef60c292b57c8786c9e495/README.md)
* Clock: 6000 Hz
* External hardware: 



### How it works

We have two polynomials of 4th order and a shift register of 5 bits. we take input data of a single bit and put it in shift register on each clock edge as long as valid data bit is asserted. after this codeword is calculated by taking xor of the and of polynomial and shift register

### How to test

apply clk,reset ,data valid and input data and do calculations to see if output is equal to the desired one

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | encoded data |
| 1 | reset  | none |
| 2 | data valid  | none |
| 3 | data input  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
