---
hidden: true
title: "275 MINI ALU"
weight: 15
---

## 275 : MINI ALU

* Author: Vicente Martinez, Cristobal Sanchez, Mauricio Pinto, Antar Derpich
* Description: This project is a Mini Alu with 4 bits, 2 bidirectionals used as inputs that indicates which operation is the Alu doing between XOR, OR, AND & addition
* [GitHub repository](https://github.com/ChipUSM/ac3e-usm-VLSICamp-MiniAlu)
* [GDS submitted](https://github.com/ChipUSM/ac3e-usm-VLSICamp-MiniAlu/actions/runs/6086887072)
* [Wokwi](https://wokwi.com/projects/375042398768251905) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

A mini calculator with two bidirectionals that will change between which operations are being executed, then with the switches of the 4 bits A and the
4 Bits B they will define the values ​​that will pass through the mini calculator resulting in 4 bits and in the case of addition a Carry.
The bidirectionals bits are defined by:
(00:XOR)
(01:OR)
(10:AND)
(11:+)


### How to test

First of all, Use the bidirectionals to define all the operations, then try all the possible responses of each operation and see if they fit what it should be.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | A0  | O0 | S0 |
| 1 | A1  | O1 | S1 |
| 2 | A2  | O2 | none |
| 3 | A3  | O3 | none |
| 4 | B0  | Carry | none |
| 5 | B1  | none | none |
| 6 | B2  | none | none |
| 7 | B3  | none | none |
