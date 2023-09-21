---
hidden: true
title: "198 Arithmetic logic unit of four operations between two 8-bit numbers"
weight: 18
---

## 198 : Arithmetic logic unit of four operations between two 8-bit numbers

* Author: Alejandro Araya, María Bogantes, Isaías González
* Description: Calculates addition, multiplication, logical xor and shift left operations between two numbers.
* [GitHub repository](https://github.com/Iosaias/VLSI_Bootcamp)
* [GDS submitted](https://github.com/Iosaias/VLSI_Bootcamp/actions/runs/6080339506)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

This circuit is designed to solve four arithmetic logic operations between two 8-bit numbers.
The numbers are entered from a 4x4 matrix keyboard. The data entered from the keyboard is manipulated
with decoders, encoders and registers, to finally reach an ALU. In the ALU one of the operations of
addition, multiplication, xor or shift left will be calculated.

The circuit generates a two-bit counter that goes to a decoder, the decoder is
responsible for activating the keyboard columns high. Pressing the keyboard columns
will cause them to switch from high to low, resulting in the matrix_in input. The data
that enter to matrix_in goes to an encoder. The encoder, according to the input, will have
as output a hexadecimal value, which will be saved if en_reg is active. When en_reg is active,
the data is saved at the address provided by switches 2 to 3. This address is the location where
the data will be saved in the register bank.

The operands that enter the ALU are obtained from the register bank, the addresses of these operands
are indicated with switches 4 to 5 and 6 to 7. To indicate the ALU operation, switches 0 to 1 are used,
depending on the value entered, one of the following operations will be performed:

- 00 - A + B
- 01 - A * B
- 10 - A xor B
- 11 - A << 1

Finally, the result of the operation is obtained in the 8-bit alu_r output.


### How to test

After reset, the counter should increase by one every second with a 10MHz input clock.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | op [1:0] (selects operation)  | alu_r [7:0] (operation result) | matrix_in [0:3] (keyboard data) |
| 1 | add_s [3:2]  | n/a | en_reg (if active, saves kayboard data in the register bank) |
| 2 | add_op1 [5:4] (defines first operand direction)  | n/a | 2bc [1:0] (two bit counter) |
| 3 | add_op2 [7:6] (defines second operand direction)  | n/a | z (zero flag) |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
