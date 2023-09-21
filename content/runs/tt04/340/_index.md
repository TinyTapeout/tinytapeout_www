---
hidden: true
title: "340 Fastest Finger"
weight: 130
---

## 340 : Fastest Finger

* Author: Chris Burton
* Description: Shows which button was pressed first
* [GitHub repository](https://github.com/burtyb/tt04-fastest-finger)
* [GDS submitted](https://github.com/burtyb/tt04-fastest-finger/actions/runs/6123413196)
* [Wokwi](https://wokwi.com/projects/375227079413963777) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

If when a button is pressed the output for all other buttons is low, the output is set high.


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
