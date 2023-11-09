---
hidden: true
title: "71 ALU Chip"
weight: 25
---

## 71 : ALU Chip

* Author: Devan Grover & Siddharth Kunisetty
* Description: ALU Chip that outputs 7 Segment
* [GitHub repository](https://github.com/devgro/TinyTapeoutDemo)
* [GDS submitted](https://github.com/devgro/TinyTapeoutDemo/actions/runs/6700185595)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

This is a simple, 4 bit ALU that outputs its result on a 7 Segment Display.


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | alu_in_1 [7:4] - First input into the ALU  | 7 Segment Out [6:0] - Output to the 7 Segment display | alu_out [7:4] (OUT) - Output BCD value of operation |
| 1 | alu_in_2 [3:0] - Second input into the ALU  | None [7] - NC | alu_op_in [3:0] (IN) - Input operation for the ALU (ADD, SUBTRACT, AND, OR, EQUALS, NOT, GT, LT) |
| 2 | n/a  | n/a | n/a |
| 3 | n/a  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
