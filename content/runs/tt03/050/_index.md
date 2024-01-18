---
hidden: true
title: "50 Microtapeout"
weight: 51
---

## 50 : 0b 000 110 010 : Microtapeout

{{< tt-scanchain-switches "000110010" >}}

* Author: Enno Schnackenberg
* Description: A Shift Register, A seven segment encoder (Hexadecimal), 1 Bit ALU, 3 Bit Adder and a suprise
* [GitHub repository](https://github.com/Intubun/tt03-microtapeout)
* [Most recent GDS build](https://github.com/Intubun/tt03-microtapeout/actions/runs/4352538245)
* [Wokwi](https://wokwi.com/projects/358370685977079809) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

You can select the project over Input 0 and 1 (e.g. 01 for the seven segment encoder) and then have the 6 remaining pins for the project


### How to test


Shift Register
------------------------
Set Input 0 and 1 to LOW. Input 2 is the Data In Pin, Input 3 is the Shift Register Clock and Input 4 the Ooutput Latch

ALU
------------------------
Set Input 0 and 1 to HIGH and then you can use Input 5 to 7 for the multiplexer Inputs 2 to 4 are for the Inputs of the ALU the Output is connected to Output 1

Adder
------------------------
Set the Inputs like for the ALU, but now ise Inputs 2 to 4 for the first number and Inputs 5 to 7 for the second. Outputs 1 to 4 are the Resulting number

Seven Segment
------------------------
Set Input 0 to LOW and Input 1 to HIGH and then use Inputs 3 - 6 for the number input (MSB first)


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | Project Select 0  | segment a |
| 1 | Project Select 1  | segment b |
| 2 | I1  | segment c |
| 3 | I2  | segment d |
| 4 | I3  | segment e |
| 5 | I4  | segment f |
| 6 | I5  | segment g |
| 7 | I6  | dot |
