---
hidden: true
title: "39 tinysat"
weight: 40
---

## 39 : tinysat

* Author: Emmanouel Matigakis
* Description: Tiny sat solver.
* [GitHub repository](https://github.com/emmatigakis/tt03-tinysat)
* [Most recent GDS build](https://github.com/emmatigakis/tt03-tinysat/actions/runs/4716201039)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

uses a counter to iterate over all possible assignements to a simple sat problem.


### How to test

I'm thinking of using an RP2040 to basically implement the same tests as in test.py in the physical thing.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | x[0] |
| 1 | reset  | x[1] |
| 2 | run  | x[2] |
| 3 | load  | x[3] |
| 4 | data[0]  | sol |
| 5 | data[1]  | done |
| 6 | data[2]  | 0 |
| 7 | data[3]  | 0 |
