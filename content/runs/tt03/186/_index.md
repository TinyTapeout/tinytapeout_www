---
hidden: true
title: "186 Monte Carlo Pi Integrator"
weight: 187
---

## 186 : 0b 010 111 010 : Monte Carlo Pi Integrator

{{< tt-scanchain-switches "010111010" >}}

* Author: regymm
* Description: Calculate the value of Pi using the Monte Carlo method
* [GitHub repository](https://github.com/regymm/tt02-verilog-mcpi)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: External edge counter recommended(funnyblinky is a possible choice)



### How it works

Having random x and y between 0 to 1 and compare the added squares with 1. Using 8-bit fixed-point number.

### How to test

SW 00: counter shows total sample points. SW 01: counter shows sample points inside 1 radius. SW 10: counter 0 and 1 will toggle, 0 for every sample point and 1 for inside point, for use with external counter. 

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | counter 0 |
| 1 | reset  | counter 1 |
| 2 | sw control 0  | counter 2 |
| 3 | sw control 1  | counter 3 |
| 4 | none  | counter 4 |
| 5 | none  | counter 5 |
| 6 | none  | counter 6 |
| 7 | none  | counter 7 |
