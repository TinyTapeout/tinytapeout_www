---
hidden: true
title: "161 Customizable UART Character"
weight: 162
---

## 161 : Customizable UART Character

* Author: Tiny Tapeout 02 (J. Rosenthal)
* Description: This design implements a single character UART transmitter using registers made from D-flip flops and multiplexers.
* [GitHub repository](https://github.com/jdrosent/tt02-UARTcharacter)
* [Most recent GDS build](https://github.com/jdrosent/tt02-UARTcharacter/actions/runs/3614729115)
* [Wokwi](https://wokwi.com/projects/347140425276981843) project
* [Extra docs](https://wokwi.com/projects/347140425276981843)
* Clock: 300 Hz
* External hardware: Arduino, computer with serial monitor connected to the Arduino



### How it works

This circuit implements a shift register with 17 bits: four idle bits, one start bit, eight data bits, one stop bit, and three more idle bits. The circuit supports transmitting a user-selected ASCII character from 0x40 (@) to 0x5F (_), including capital letters from the Latin alphabet.

### How to test

Connect an Arduino serial RX pin to the eight output pin (Output[7]). In the Arduino code, set the serial baud rate Serial.begin(<baud rate>); in the *.ino file to 300. Set the PCB clock frequency to 300 Hz as well. Set SW7 to OFF (“Load”). Set SW2 to ON and SW3-6 to OFF. Set SW7 to ON (“TX”). Set SW8 to ON (“Output Enable”). Connect the Arduino via USB to your computer and run the serial monitor. If there’s no output from the Arduino serial monitor, try toggling SW7 OFF and ON again. You should see the character 'A' appearing repeatedly in the serial monitor.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a (Load/TX) |
| 1 | Bit 0  | segment b |
| 2 | Bit 1  | segment c |
| 3 | Bit 2  | segment d |
| 4 | Bit 3  | segment e |
| 5 | Bit 4  | segment f (Output Enable) |
| 6 | Load/TX  | segment g |
| 7 | Output Enable  | UART Serial Out |
