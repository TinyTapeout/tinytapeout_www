---
hidden: true
title: "232 tinyscanchain Test Design"
weight: 70
---

## 232 : tinyscanchain Test Design

* Author: Anish Singhani
* Description: Test design for tinyscanchain, based on seven segment seconds design
* [GitHub repository](https://github.com/asinghani/tinyscanchain-tt05)
* [GDS submitted](https://github.com/asinghani/tinyscanchain-tt05/actions/runs/6753229351)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

tinyscanchain is a scan-chain implementation in less than 80 lines of Python. This is a test design based on the use of seven segment seconds.


### How to test

After reset, the counter should increase by one every second with a 1kHz input clock.
Experiment by changing the inputs to change the counting speed.
Use the scan chain to test the internal state of the design.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | enable  | segment a | unused |
| 1 | scan chain input  | segment b | unused |
| 2 | scan chain enable  | segment c | unused |
| 3 | unused  | segment d | unused |
| 4 | unused  | segment e | unused |
| 5 | unused  | segment f | unused |
| 6 | unused  | segment g | unused |
| 7 | unused  | scan chain output | unused |
