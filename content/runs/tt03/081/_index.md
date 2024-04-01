---
hidden: true
title: "81 3 bit multiplier "
weight: 82
---

## 81 : 0b 001 010 001 : 3 bit multiplier 

{{< tt-scanchain-switches "001010001" >}}

* Author: Ananya
* Description: 3 bit multiplier
* [GitHub repository](https://github.com/Ananya3511/tt03-submission-template)
* [Wokwi](https://wokwi.com/projects/362379207695863809) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works :-   A 3×3 binary multiplier is one of the combinational logic circuits, which can perform binary multiplication of two binary numbers having a bit size of a maximum of 3 bits. The bit size of the resultant output binary product is 6.Consider the multiplicand A0 A1, A2 and the multiplier B0, B1, B2, and the final binary product output as P0, P1, P2.     The 3 partial product terms are obtained in the binary multiplication because it is a 3-bit multiplier. This 3×3 multiplier can be implemented using a 3-bit full adder and individual single-bit adders.    The carry bit is raised when A2B0 and A1B1 are added together. By the addition of the sum obtained from that, the carry bit is obtained from the addition of A0B1 and A0B2 to A1B0,  which can raise another carry bit. Hence 2 carry bits are obtained and carried over for the addition of A2B1 and A1B2 and the 2 more carry bits are generated in the same way.   The circuit is designed with 3-bit full adders to add the 3 partial product terms. The least significant bit (LSB) of the 1st partial product is not added to the next partial product because it is taken as an LSB of the final binary product output obtained.From the above logical circuit, one 3-bit full adder is used to add the first 2 partial products   together and the other 3-bit full adder adds the 3rd partial product with the sum of the first adder.


### How to test

Explain how to test your project :- For testing a 3bit multiplier put 3bit 2 binary numbers at the input and cheak the outputs coming at the 7 segmented display.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | {'B': 'connected to IN1'}  | {'segment a': 'connected to OUT0'} |
| 1 | {'C': 'connected to IN2'}  | {'segment b': 'connected to OUT1'} |
| 2 | {'D': 'connected to IN3'}  | {'segment c': 'connected to OUT2'} |
| 3 | {'E': 'connected to IN4'}  | {'segment d': 'connected to OUT3'} |
| 4 | {'F': 'connected to IN5'}  | {'segment e': 'connected to OUT4'} |
| 5 | {'G': 'connected to IN6'}  | {'segment f': 'connected to OUT5'} |
| 6 | none  | {'segment g': 'connected to OUT6'} |
| 7 | none  | dot |
