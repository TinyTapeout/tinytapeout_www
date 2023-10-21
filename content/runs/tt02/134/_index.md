---
hidden: true
title: "134 CRC-16 and Parity calculator"
weight: 135
---

## number : 0b010000110 : CRC-16 and Parity calculator

* Author: Chris Burton
* Description: CRC-16/XModem and Even Parity calculator based on Ben Eater error detection videos.
* [GitHub repository](https://github.com/8086net/tt02-CRC16)
* [Most recent GDS build](https://github.com/8086net/tt02-CRC16/actions/runs/3603289629)
* [Wokwi](https://wokwi.com/projects/349833797657690706) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Can be used with any microcontroller, or by toggling switches.



### How it works

Two banks of CRC calculators (A and B) each with inputs for the shift register data and clock, active low reset (when high toggle shiftClk to reset) and read back mode which disables the feedback XOR to allow reading data back out.

### How to test

Connect Pico as shown in Wokwi and run test code to send a string, read back calculated CRC/parity and compare.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | nRst_A  | crcOutput_A |
| 1 | shiftData_A  | parity_A |
| 2 | shiftClk_A  | none |
| 3 | nRead_A  | none |
| 4 | nRst_B  | crcOutput_B |
| 5 | shiftData_B  | parity_B |
| 6 | shiftClk_B  | none |
| 7 | nRead_B  | none |
