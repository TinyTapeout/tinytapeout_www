---
hidden: true
title: "23 Desperate Tapeout"
weight: 24
---

## 23 : 0b 000 010 111 : Desperate Tapeout

{{< tt-scanchain-switches "000010111" >}}

* Author: Etienne de Maricourt
* Description: Customized UART string transmitter
* [GitHub repository](https://github.com/etiennedm/tt03-submission)
* [Most recent GDS build](https://github.com/etiennedm/tt03-submission/actions/runs/4789735487)
* [Wokwi](https://wokwi.com/projects/362911430638568449) project
* [Extra docs]()
* Clock: 300 Hz
* External hardware: MCU with UART receiver, UART-to-USB adapter



### How it works

Shameless copy of TT02 "Customizable UART String" by J. Rosenthal, since getting started the day of the submission deadline is NOT a good idea.

This circuit implements five shift registers with 21 bits: seven idle bits, one start bit, eight data bits, one stop bit, and four more idle bits. The circuit supports transmitting the string "EDM!"


### How to test

Connect an Arduino serial RX pin to the eight output pin (Output[7]). In the Arduino code, set the serial baud rate Serial.begin(); in the *.ino file to 300.

Set the PCB clock frequency to 300Hz. Set the slide switch to the clock. Set SW7 to OFF (‘Load’). Set SW8 to ON (‘Output Enable’). Set SW7 to ON (‘TX’).


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | none  | Load TX data |
| 1 | none  | Output enable |
| 2 | none  | none |
| 3 | none  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | Load TX data  | none |
| 7 | Output enable  | TX |
