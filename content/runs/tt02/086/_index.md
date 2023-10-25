---
hidden: true
title: "86 Pseudo-random number generator"
weight: 87
---

## 86 : 0b 001 010 110 : Pseudo-random number generator

{{< tt-scanchain-switches "001010110" >}}

* Author: Thomas Böhm <thomas.bohm@gmail.com>
* Description: Pseudo-random number generator using a 16-bit Fibonacci linear-feedback shift register
* [GitHub repository](https://github.com/tcptomato/tt02-submission-template)
* [Most recent GDS build](https://github.com/tcptomato/tt02-submission-template/actions/runs/3558078689)
* [Wokwi](https://wokwi.com/projects/341178154799333971) project
* [Extra docs](https://github.com/tcptomato/tinytapeout//blob/main/README.md)
* Clock: 0 Hz
* External hardware: None



### How it works

16 flip flops are connected in a chain, and the output of some is XORed together and fed back into the first flip flop. The outputs that are XORed together are chosen in such a way as to give the longest possible cycle (2^16-1). All bits being zero is a special case and is treated separately (all negative outputs of the flip flops are ANDed together to generate a 1 as feedback).
On each clock pulse (pin 1) one new bit is generated. Setting load_en (pin 3) to HIGH allows the loading of a user defined value through the data_in pin (pin2). On each clock pulse one bit is read into the flip flop chain. When load_en (pin 3) is set to LOW the computed feedback bit is fed back into the flip flops.
The outputs of the last 8 flip flops are connected to the output pins. For each clock pulse a random bit is generated and the other 7 are shifted. 

### How to test

Set the switch for pin 1 so that the push button generates the clock. Press on it and see the output change on the hex display.
Using pin 2 and 3 a custom value can be loaded into the flip flops. 

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | random bit 0 |
| 1 | data_in  | random bit 1 |
| 2 | load_en  | random bit 2 |
| 3 | none  | random bit 3 |
| 4 | none  | random bit 4 |
| 5 | none  | random bit 5 |
| 6 | none  | random bit 6 |
| 7 | none  | random bit 7 |
