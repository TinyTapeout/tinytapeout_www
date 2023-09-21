---
hidden: true
title: "244 Hardware Lock"
weight: 76
---

## 244 : Hardware Lock

* Author: Lautiux
* Description: A simple hardware pin made with a shift register formed by joining various flip-flops.
* [GitHub repository](https://github.com/lautitux/tt04-submission-ucu-microchip)
* [GDS submitted](https://github.com/lautitux/tt04-submission-ucu-microchip/actions/runs/6029423327)
* [Wokwi](https://wokwi.com/projects/374515580784897025) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Entering the right pin the output turns on.


### How to test

Enter the following pin serially one bit at a time through the input 0 (10100100010). For a 1 turn input 0 ON and send a clock pulse, for a 0 turn input 0 OFF and send a clock pulse. Do that 11 times and with the correct pin the output shoud turn on, if not it shoud stay off.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | PIN INPUT  | segment a | none |
| 1 | none  | segment b | none |
| 2 | none  | segment c | none |
| 3 | none  | segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | dot | none |
