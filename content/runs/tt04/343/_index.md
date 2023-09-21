---
hidden: true
title: "343 Simple ALU"
weight: 45
---

## 343 : Simple ALU

* Author: Rebot449
* Description: A simple ALU with only 6 instructions
* [GitHub repository](https://github.com/Rebot449/tt04-submission-template)
* [GDS submitted](https://github.com/Rebot449/tt04-submission-template/actions/runs/6124667375)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Based off the Overture Architecture fround in the game "Turing Complete"

The ALU has only 6 instructions which are decided by the 3 least significant bits.
xxxxx000: Logical OR
xxxxx001: Logical NAND
xxxxx010: Logical NOR
xxxxx011: Logical AND
xxxxx100: Addition of Data_0 + Data_1
xxxxx101: Subraction (Data_1 - Data_0)


### How to test

The ALU should perform the logical and arithmetic operations as stated by the coressponding instructions above.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | i_instruction //ALU instruction, 8 bit wide input  | o_result //ALU data output, 8 bit wide | none |
| 1 | i_data_0 // Data input 0, 8 bit wide input  | n/a | none |
| 2 | i_data_1 // Data input 1, 8 bit wide input  | n/a | none |
| 3 | n/a  | n/a | none |
| 4 | n/a  | n/a | none |
| 5 | n/a  | n/a | none |
| 6 | n/a  | n/a | none |
| 7 | n/a  | n/a | none |
