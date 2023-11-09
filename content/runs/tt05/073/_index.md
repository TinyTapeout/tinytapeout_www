---
hidden: true
title: "73 Calculator chip"
weight: 156
---

## 73 : Calculator chip

* Author: Rylan Morgan
* Description: calculator
* [GitHub repository](https://github.com/rjmorgan11/tt05-rjmorgan11)
* [GDS submitted](https://github.com/rjmorgan11/tt05-rjmorgan11/actions/runs/6700864160)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Basic ALU. Use the input pins to specify an 8 bit number and output pins to view result. IO pin 0 is the enter pin, assert high to enter command/value. IO pins 4-1 are used to select the command for the ALU. IO pins 7-5 are for flags.
Ops:
0x0: add
0x1: subtract
0x2: bitwise or
0x3: bitwise and
0x4: bitwise xor
0x5: left shift by 1
0x6: right shift by 1 (logic)
0x7: right shift by 1 (arithmetic)
0x8: 2s compliment negate
0x9: bitwise invert
0xA: reverse bitpatern
0xB: unused
0xC: unused
0xD: unsigned input < output
0xE: unsigned input > output
0xF: input == output


### How to test

enter a bunch of numbers and ops, should work great


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | NumIn [7:0] number in  | NumOut [7:0] output | OpIn [3:0] what op to run |
| 1 | Reset  | n/a | Enter      enter command |
| 2 | Clock  | n/a | Flags [2:0] overflow, negative, and zero flags |
| 3 | n/a  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
