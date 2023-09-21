---
hidden: true
title: "341 Fastest Finger (Clocked)"
weight: 111
---

## 341 : Fastest Finger (Clocked)

* Author: Chris Burton
* Description: Shows which button was pressed first
* [GitHub repository](https://github.com/burtyb/tt04-fastest-finger-clocked)
* [GDS submitted](https://github.com/burtyb/tt04-fastest-finger-clocked/actions/runs/6122992767)
* [Wokwi](https://wokwi.com/projects/375300958229329921) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The 3-bit counter increments from the clock input, this then goes through a 3-8 decoder. If the output of the decoder is high and it's corresponding INx is high, OUTx is set high and the clock signal to the adder is interrupted.


### How to test

Connect buttons up to IN0-IN7 and whichever one is pressed first will set the corresponding OUT0-OUT7 high.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Button 0  | LED 0 / segment a | none |
| 1 | Button 1  | LED 1 / segment b | none |
| 2 | Button 2  | LED 2 / segment c | none |
| 3 | Button 3  | LED 3 / segment d | none |
| 4 | Button 4  | LED 4 / segment e | none |
| 5 | Button 5  | LED 5 / segment f | none |
| 6 | Button 6  | LED 6 / segment g | none |
| 7 | Button 7  | LED 7 / dot | none |
