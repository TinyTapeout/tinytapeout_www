---
hidden: true
title: "78 3BitParallelAdder"
weight: 79
---

## 78 : 3BitParallelAdder

* Author: Anish Paul , Pancham Mittal , Ramandeep 
* Description:  This project is used to Add and Subtract 3-bit binary inputs 
* [GitHub repository](https://github.com/Anishpaul04/tt03-submission-template)
* [Most recent GDS build](https://github.com/Anishpaul04/tt03-submission-template/actions/runs/4772565672)
* [Wokwi](https://wokwi.com/projects/362249236392794113) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works :  A 3-bit binary parallel adder-subtractor is a digital circuit that can perform both addition and subtraction of two 3-bit binary numbers in parallel. The circuit has two main inputs, which are the two 3-bit binary numbers to be added or subtracted. These inputs are represented by A2, A1, A0, and B2, B1, B0.  The circuit also has a carry-in (Cin) input, which is used during addition.  To understand how the 3-bit binary parallel adder-subtractor works, let's first look at how addition works in binary. In binary addition, each bit in the two  binary numbers is added along with the carry from the previous addition. The carry from the current addition is then passed to the next bit addition. In our circuit the inputs IN1,IN2 and IN3 is represented as the inputs A0(Least significant bit),A1 and A2(Most significant bit). IN4,IN5,IN6 are represented as inputs B0(Least significant bit),B1 and B2(Most significant bit). IN7 is given as Cin.To make the circuit works as and adder the Carry in(Cin) is given logic 0. Similarly ,the circuit can works as a 2's complement subtractor,to implement this we .have connected the Cin to inputs B2,B1 B0 with an XOR gate.When the Carry in  input (Cin) is given Logic 1 the XOR gate will give the 2's Complement of B.Then the result of addition between A and B will be the difference between them.


### How to test

Explain how to test your project : For testing the project , we have connected the output pins of the circuit to a seven segment display.For this we have connected the S0 (least significant bit)pin(OUT0) to the seven segment pin A,S1 pin(OUT1) to seven segment pin B,S3(Most significant bit) pin (OUT2) to seven segment pin C and the Carry Out pin(OUT3)to seven segment pin D . The Seven Segment Display will glow in accordance to the Output on the respective pins.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a - S0 |
| 1 | reset  | segment b - S1 |
| 2 | IN1 - A0  | segment c - S2 |
| 3 | IN2 - A1  | segment d - Cout |
| 4 | IN3 - A2  | segment e |
| 5 | IN4 - B0  | segment f |
| 6 | IN5 - B1  | segment g |
| 7 | IN6 - B2  | dot |
