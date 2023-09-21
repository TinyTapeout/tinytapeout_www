---
hidden: true
title: "229 Collatz Conjecture"
weight: 71
---

## 229 : Collatz Conjecture

* Author: Sergio Sebastian Oliveros Sepulveda
* Description: A circuit that computes the Collatz orbit
* [GitHub repository](https://github.com/Sergio-Oliveros/tt04-submission-Collatz)
* [GDS submitted](https://github.com/Sergio-Oliveros/tt04-submission-Collatz/actions/runs/6122868340)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The circuit takes an 8-bit input value and produces two outputs: the number of iterations required to reach 1 and a status bit indicating whether the calculation is in progress or complete. Once the process is finished, the circuit keeps the value of the iterations indefinitely so that it can be checked.


### How to test

To test the circuit it is necessary to have as input the clock signal, a number of maximum 8 bits and the rst_n signal to start the iterations. It is taken into account that rst_n is at 0 when it is active, so once it takes this value, the circuit begins to perform the calculations until it reaches 1, then it keeps the values.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk  | Process indicator (busy bit) | Number of iterations to reach 1 (8 bits number) |
| 1 | ena  | n/a | n/a |
| 2 | rst_n  | n/a | n/a |
| 3 | Number to test  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
