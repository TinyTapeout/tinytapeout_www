---
hidden: true
title: "230 8 bit 4 data sorting network"
weight: 40
---

## 230 : 8 bit 4 data sorting network

* Author: Emmanuel Díaz Marín
* Description: The circuit orders the 4 input numbers according to their value, with the highest number at output 0
* [GitHub repository](https://github.com/ManuDamar/tt04-8-bit-sorting-network)
* [GDS submitted](https://github.com/ManuDamar/tt04-8-bit-sorting-network/actions/runs/6068226237)
* [Wokwi](https://wokwi.com/projects/370011087462055937) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Sorting networks can be visualized as combinatorial circuits where a set of denoted compare-swap (CS) circuits can
be connected in accordance to a specific network topology. This way the CS circuit is formed by a full adder configured
as a subtractor and a pair of multiplexers, the carry of the subtractor is used for the selection of the multiplexer.


### How to test

1. Reset signal.
2. Enter the 4 8-bit inputs (8 clock positive flanks).
3. Enable the control/load signal for 8 clock positive flanks.
4. See the results.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Number 1  | Highest number | none |
| 1 | Number 2  | Second highest number | none |
| 2 | Number 3  | Third highest number | none |
| 3 | Number 4  | Fourth highest number | none |
| 4 | none  | Not used | none |
| 5 | none  | Not used | none |
| 6 | none  | Not used | none |
| 7 | Control  | Not used | none |
