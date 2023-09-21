---
hidden: true
title: "246 4-bit-alu"
weight: 143
---

## 246 : 4-bit-alu

* Author: Angelo Machorro
* Description: 4 bit alu 
* [GitHub repository](https://github.com/Angardo18/tt04-submission-angardo-alu)
* [GDS submitted](https://github.com/Angardo18/tt04-submission-angardo-alu/actions/runs/6066624405)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: buttons or dip switches



### How it works

Its a 4-bit alu, can make addition, substraction, multiplication, division and bitwise-and.


### How to test

A and B input are the data for ALU, S is the operation selects, in the next table we presents the operations

| operation | S |  Result |
|---------|------|-|
addition | 0 | A + B|
|substraction| 1 | A - B|
| multiplication| 2 | A * B|
| division | 3 |  A/B |
| bitwise and | 4 |A & B|


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | A3  | R7 | S0 |
| 1 | A2  | R6 | S1 |
| 2 | A1  | R5 | S2 |
| 3 | A0  | R4 | none |
| 4 | B3  | R3 | none |
| 5 | B2  | R2 | none |
| 6 | B1  | R1 | none |
| 7 | B0  | R0 | none |
