---
hidden: true
title: "18 4bit Adder"
weight: 19
---

## 18 : 0b 000 010 010 : 4bit Adder

{{< tt-scanchain-switches "000010010" >}}

* Author: Carin Schreiner
* Description: This tiny tape out project takes two four bit numberbs and adds them.
* [GitHub repository](https://github.com/SchreinerCarin/tt03-4bit-adder)
* [Wokwi](https://wokwi.com/projects/354091612057990145) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The halfadder uses simple logic gates. 


### How to test

Input bits 0-3 are used for the first number and bits 4-7 for the second number. The output bits 0-3 are the resulting number an bit 4 the carry. All numbers should be in little endian format.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | a0  | r0 |
| 1 | a1  | r1 |
| 2 | a2  | r2 |
| 3 | a3  | r3 |
| 4 | b0  | carry |
| 5 | b1  | none |
| 6 | b2  | none |
| 7 | b3  | none |
