---
hidden: true
title: "354 Simple QSPI DAC"
weight: 119
---

## 354 : Simple QSPI DAC

* Author: Piotr Kuligowski
* Description: Simple implementation of 8-bit R-2R DAC using QSPI interface + bi-directional port test breakout.
* [GitHub repository](https://github.com/pkuligowski/tt04-simple-qspi-dac)
* [GDS submitted](https://github.com/pkuligowski/tt04-simple-qspi-dac/actions/runs/6124805187)
* [Wokwi](https://wokwi.com/projects/375310871188385793) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: To test the DAC you need to remove 7seg display and connect external R-2R network to implement DAC.



### How it works

After reset, it is a very simple QSPI-based, 8-bit DAC (digital to analog converter). You feed it with 4-bit halves,
which are then read on each rising edge of CLK.
It also breakouts UIO's pins to test it externally (delays, electrical characteristics, etc).


### How to test

After power up set nCS high, set RST_N low, then set RST_N high.
If you want to set a new DAC value, first set nCS low, then set 4-bits, beginning from the lowest half.
Now trigger a rising edge of CLK, set highest 4-bits and trigger another rising edge of CLK.
Now you can continue setting next bytes (divided into 4-bit halves) or set nCS high and start from the beginning, by setting nCS low.
You can observe effects on the 7seg display or remove it and implement R-2R network to have the acutal DAC.
There is also a break out of bi-directional ports to test them externally.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | DATA0  | OUT0 | INTERMEDIATE0 |
| 1 | DATA1  | OUT1 | INTERMEDIATE1 |
| 2 | DATA2  | OUT2 | INTERMEDIATE2 |
| 3 | DATA3  | OUT3 | INTERMEDIATE3 |
| 4 | nCS  | OUT4 | TESTED_UIO |
| 5 | none  | OUT5 | TESTED_UIO_IN |
| 6 | none  | OUT6 | TESTED_UIO_OUT |
| 7 | none  | OUT7 | TESTED_UIO_OE |
