---
hidden: true
title: "7 TickTockTokens"
weight: 38
---

## 7 : TickTockTokens

* Author: Johannes Leugering
* Description: Implementation of a processor that uses Tick Tock Tokens for event-based computation.
* [GitHub repository](https://github.com/jleugeri/tnt-ticktocktokens)
* [GDS submitted](https://github.com/jleugeri/tnt-ticktocktokens/actions/runs/6741682814)
* HDL project
* [Extra docs](README.md)
* Clock: 10000000 Hz
* External hardware: arduino to generate I/O

![picture](images/picture.png)

### How it works

Each TickTockToken (ttt) is indicated by two messages, a start and an end event. A ttt-Processor uses these tokens to perform event-based computations in a fashion inspired by Time Petri Nets.


### How to test

If I didn't get lazy half-way though, the test-script provided in the repo should run a test model successfully, and the documentation should provide a more through explanation.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | instruction bit 0  | data bit 0 | token start flag | data bit 0 |
| 1 | instruction bit 1  | data bit 1 | token stop flag | data bit 1 |
| 2 | instruction bit 2  | data bit 2 | data bit 2 |
| 3 | instruction bit 3  | data bit 3 | data bit 3 |
| 4 | (reserved)  | data bit 4 | data bit 4 |
| 5 | (reserved)  | data bit 5 | data bit 5 |
| 6 | (reserved)  | data bit 6 | data bit 6 |
| 7 | (reserved)  | data bit 7 | data bit 7 | good/bad token flag (0 = good, 1 = bad) |
