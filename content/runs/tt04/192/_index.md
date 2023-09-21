---
hidden: true
title: "192 UART character tx"
weight: 38
---

## 192 : UART character tx

* Author: Tiny Tapeout 02 (J. Rosenthal)
* Description: This circuit will output a string of characters (’tiny tapeout’) to the uart.

* [GitHub repository](https://github.com/psychogenic/tt04-UARTcharacter)
* [GDS submitted](https://github.com/psychogenic/tt04-UARTcharacter/actions/runs/6096055939)
* [Wokwi](https://wokwi.com/projects/347140425276981843) project
* [Extra docs](https://wokwi.com/projects/347140425276981843)
* Clock: 1 Hz
* External hardware: 



### How it works

Supports ASCII characters from 0x40 (@) to 0x5F (_), including capital letters from the latin alphabet.


### How to test

Example Sending 'A'

1. Set the Arduino serial baud rate `Serial.begin(&lt;baud rate&gt;);` in the *.ino file to 300
2. Set the Wokwi clock frequency `&quot;attrs&quot;: { &quot;frequency&quot;: &quot;300&quot; }` in the diagram.json to 300 as well
3. Set SW7 to OFF ("Load")
4. Set SW2 to ON and SW3-6 to OFF
5. Set SW7 to ON ("TX")
6. Set SW8 to ON ("Output Enable")
   If there's no output from the Wokwi Arduino serial monitor, try toggling SW7 OFF and ON again.
   Congratulations! You should now see the letter being output in the Wokwi Arduino Serial monitor at the bottom of the simulation.
   Note that garbage characters may be printed upon initialization.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | n/a  | segment a | none |
| 1 | bit 0  | segment b | none |
| 2 | bit 1  | segment c | none |
| 3 | bit 2  | segment d | none |
| 4 | bit 3  | segment e | none |
| 5 | bit 4  | segment f | none |
| 6 | load/tx  | segment g | none |
| 7 | output enable  | N/A | none |
