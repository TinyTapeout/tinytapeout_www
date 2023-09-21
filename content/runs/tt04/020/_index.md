---
hidden: true
title: "20 Configurable PID Block"
weight: 57
---

## 20 : Configurable PID Block

* Author: Maxim Vasic
* Description: It was meant to be a final project, but that was undercut.
* [GitHub repository](https://github.com/currymottled/tt04-pidcontroller-currymottled)
* [GDS submitted](https://github.com/currymottled/tt04-pidcontroller-currymottled/actions/runs/6124057384)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It's a PID block to be configured with I2C. GPIOs 7 through 2 are for error/control, and GPIOs 1 and 0 are SDA and SCL.


### How to test

Configure with the I2C frame, see the I2C files for the "addresses". See the I2C test file for an example.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | segment a | Error/Control |
| 1 | none  | segment b | Error/Control |
| 2 | none  | segment c | Error/Control |
| 3 | none  | segment d | Error/Control |
| 4 | none  | segment e | Error/Control |
| 5 | none  | segment f | Error/Control |
| 6 | none  | segment g | SDA |
| 7 | none  | dot | SCL |
