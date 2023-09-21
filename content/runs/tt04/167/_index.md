---
hidden: true
title: "167 Led Multiplexer Display"
weight: 53
---

## 167 : Led Multiplexer Display

* Author: Baciu Florin-George | BFG-e
* Description: Stores 4 characters and displays them on a 16x4 led matrix
* [GitHub repository](https://github.com/bfgelectronics/tt04-project)
* [GDS submitted](https://github.com/bfgelectronics/tt04-project/actions/runs/6065985369)
* HDL project
* [Extra docs]()
* Clock: 100 Hz
* External hardware: 16x4 led matrix



### How it works

If the load is high, the design will load the specified hex char(input data pins) at the specified location in memory (input char position), therwise the design will go trough the display columns and represent the chars using the internal character map.
The design should be reseted before use


### How to test

Use the input data to add chars to the internal memory.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input data 0  | active column number 0 | not used |
| 1 | input data 1  | active column number 1 | not used |
| 2 | input data 2  | active column number 2 | not used |
| 3 | input data 3  | active column number 3 | not used |
| 4 | input char position 0  | line output 0 | not used |
| 5 | input char position 1  | line output 1 | not used |
| 6 | load  | line output 2 | not used |
| 7 | not used  | line output 3 | not used |
