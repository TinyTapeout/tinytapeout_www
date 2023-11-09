---
hidden: true
title: "138 Hex Countdown"
weight: 71
---

## 138 : Hex Countdown

* Author: Jorge Gómez y Felipe Gómez
* Description: Hexadecimal countdown from F to 0
* [GitHub repository](https://github.com/fegomezmir96/Contador)
* [GDS submitted](https://github.com/fegomezmir96/Contador/actions/runs/6700092233)
* [Wokwi](https://wokwi.com/projects/380055891603379201) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 



### How it works

Statemachine that on each clock pulse subttracts one on the 7 segment display. Starting in F and finishing on 0.


### How to test

Connect a 1Hz square signal as clock and by turning input 1 to 1, the counter will start counting down stopping on 0. On reset the value will return to F.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Activation signal  | segment a | none |
| 1 | none  | segment b | none |
| 2 | none  | segment c | none |
| 3 | none  | segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | dot | none |
