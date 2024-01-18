---
hidden: true
title: "21 Dot operation calculator"
weight: 22
---

## 21 : 0b 000 010 101 : Dot operation calculator

{{< tt-scanchain-switches "000010101" >}}

* Author: Yannick Reiß
* Description: Can calculate the result for 3 bit multiplication and division.
* [GitHub repository](https://github.com/yannickreiss/TT3_dot_op)
* [Most recent GDS build](https://github.com/yannickreiss/TT3_dot_op/actions/runs/4552358729)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 7 switches, 6 leds



### How it works

It takes input 1 to determine operator and two 3 bit inputs as operands. The result is put to output 0-5.
In multiplication mode it just outputs the number binary encoded.
In division mode the output pins 0-2 are the quotient and 3-5 are the reminder.


### How to test

Connect input 1-7 with switches and output 0-6 with leds.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk_dummy  | product/quotient |
| 1 | opcode  | product/quotient |
| 2 | operand1_1  | product/quotient |
| 3 | operand1_2  | product/reminder |
| 4 | operand1_3  | product/reminder |
| 5 | operand2_1  | product/reminder |
| 6 | operand2_2  | none |
| 7 | operand2_3  | none |
