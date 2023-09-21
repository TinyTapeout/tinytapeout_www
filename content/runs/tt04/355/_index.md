---
hidden: true
title: "355 AQALU"
weight: 85
---

## 355 : AQALU

* Author: Artin Ghanaatpisheh-Sanani and Quardin Lyttle 
* Description: 2 bit ALU with 4 Bit Opcode
* [GitHub repository](https://github.com/quardinlyttle/tt04-AQALU)
* [GDS submitted](https://github.com/quardinlyttle/tt04-AQALU/actions/runs/6125343534)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: an external circuit with LEDs or a BCD converter to represent the numerical outputs



### How it works

4 bit Op Code ALU. OpCodes are as follows-

- 0000 AND

- 0001 OR

- 0010	NOT

- 0011	XOR

- 0100	NAND

- 0101	NOR

- 0110	XNOR

- 0111	Addition

- 1000	Subtraction

- 1001	Multiplication

- 1010	Compare

- 1011	Shift L Logically

- 1100	Shift R Logically

- 1101	Shift L Arithmetically

- 1110	Shift R Arithmetically

- 1111	Running Sum

**Running Sum** takes the current 4bit number at the input and continously adds it to the output every second.

**Compare** is 2'b10 when A is greater than B, 2'b01 when B is greater than A. 2'b11 when equal.

**NOT** treats A and B as a combined 4bit input.

**Subtraction** anticipates am unsigned number input  (treats them as positive numbers essentially) however will give signed output depending on the operation. It acts as A-B.


### How to test

Testing can be done by connecting the outputs to LEDs and treating them as an 8 bit output. Seeing how they correspond to the selected OpCodes and inputs.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | OpCode 0  | segment a | Output bit 0 |
| 1 | OpCode 1  | segment b | Output bit 1 |
| 2 | OpCode 2  | segment c | Output bit 2 |
| 3 | OpCode 3  | segment d | Output bit 3 |
| 4 | B 0  | segment e | Output bit 4 |
| 5 | B 1  | segment f | Output bit 5 |
| 6 | A 0  | segment g | Output bit 6 |
| 7 | A 1  | dot | Output bit 7 |
