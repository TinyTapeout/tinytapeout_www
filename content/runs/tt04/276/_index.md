---
hidden: true
title: "276 PWM Quisquilloso"
weight: 68
---

## 276 : PWM Quisquilloso

* Author: Rebeca Orellana, Abigail Alarcon
* Description: Regulates the power or velocity at which a device functions. This PWM was designed to work with an extern clock of 12.5 KHz so the exit has a frequency of 50 Hz and it can control a servomotor.
* [GitHub repository](https://github.com/ChipUSM/ac3e-usm-VLSICamp-PWM)
* [GDS submitted](https://github.com/ChipUSM/ac3e-usm-VLSICamp-PWM/actions/runs/6105053201)
* [Wokwi](https://wokwi.com/projects/374778387606763521) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Receives an 8 bits entrance, which the first is conected from a clock made with logicgates. The next bit is linked to the continuation of the clock and so on, with OR entrance that allow comparing the entry numbers until forming just one number written in binary that indicates the time. This has led lights connected in the output to check the clock account.


### How to test

Enter a value at the entries between 0 and 255 to determinate the working cycle.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | IN0  | OUTC0 | PWM |
| 1 | IN1  | OUTC1 | none |
| 2 | IN2  | OUTC2 | none |
| 3 | IN3  | OUTC3 | none |
| 4 | IN4  | OUTC4 | none |
| 5 | IN5  | OUTC5 | none |
| 6 | IN6  | OUTC6 | none |
| 7 | IN7  | OUTC7 | none |
