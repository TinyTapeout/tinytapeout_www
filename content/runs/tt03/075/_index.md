---
hidden: true
title: "75 FullAdderusing4is1"
weight: 76
---

## 75 : 0b 001 001 011 : FullAdderusing4is1

{{< tt-scanchain-switches "001001011" >}}

* Author: Marushika Suri  , Siya Sharma  , Rudakshi  Arora 
* Description: This project is used to add 3-bit binary numbers
* [GitHub repository](https://github.com/marsuri77/tt03-submission-template)
* [Wokwi](https://wokwi.com/projects/362592986761938945) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 



### How it works

Explain how your project works :  A full adder is a digital circuit that performs the addition of three binary digits: two inputs and a carry bit from a previous stage. The output of a full adder is the sum of the three inputs and a carry bit for the next stage. A 4:1 multiplexer (mux) is a digital circuit that selects one of four input signals to pass through to the output based on the value of two select inputs.  Here, we are implementing a full adder using two 4:1 mux.  We have taken 3 inputs:A,B,Cin.  The output of first mux(i.e.,Sum function) is on OUT0 Pin and the output of second mux(Carry) is connected to OUT1 Pin, connected with a seven-segment display.   The use of multiplexers simplifies the implementation of the full adder circuit.


### How to test

Explain how to test your project :  At the input, we have used 4 pins. Pin IN0 is for the clock. Pin IN1, IN2, IN3 for A, B,Cin respectively. Here, we will set the clock at "1", we'll provide sum and carry at the OUT0 and OUT1 pins of the output respectively.Once we start the simulation, we can add two 3-bit binary numbers and the output will be displayed at the 7-segment display.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | in1(Connected to A input)  | segment a(Connected to OUT0 performing the Sum function) |
| 1 | in2(Connected to Select line S1)  | segment b(Connected to OUT1 performing the Carry function) |
| 2 | in3(Connected to Select line S2)  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | dot |
