---
hidden: true
title: "226 UART test"
weight: 82
---

## 226 : UART test

* Author: Rodolfo Sanchez Fraga
* Description: UART test
* [GitHub repository](https://github.com/RodSchz/tt05-RodSchz-uart_test)
* [GDS submitted](https://github.com/RodSchz/tt05-RodSchz-uart_test/actions/runs/6753097191)
* [Wokwi](https://wokwi.com/projects/380438365946734593) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: UART receiver



### How it works

This project is an edited version of the example CUSTOMISABLE DESIGN - UART from digital design guide. Implements a a UART transmitter using registers made from D-flip flops and multiplexers.
The characters QSM are sent continuously.


### How to test

To begin transmission:

1. Connect CLK signal
2. Set IN6 ("Load") to OFF
3. Set IN7 ("Output Enable") to ON
4. Set IN6 ("Load") to ON


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | IN6 - Load | TX  | OUT0 - Output enable indicator | not used |
| 1 | IN7 - Output enable  | OUT1 - Load | TX indicator | n/a |
| 2 | n/a  | n/a | n/a |
| 3 | n/a  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
