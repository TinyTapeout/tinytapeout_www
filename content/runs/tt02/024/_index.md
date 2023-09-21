---
hidden: true
title: "24 Avalon Semiconductors 'TBB1143' Programmable Sound Generator"
weight: 25
---

## 24 : Avalon Semiconductors 'TBB1143' Programmable Sound Generator

* Author: Tholin
* Description: Sound generator with two square-wave voices, one sawtooth voice and one noise channel. Can also be used as a general-purpose frequency generator.
* [GitHub repository](https://github.com/89Mods/tt2-avalonsemi-TBB1143)
* [Most recent GDS build](https://github.com/AvalonSemiconductors/tt2-avalonsemi-TBB1143/actions/runs/3603979862)
* HDL project
* [Extra docs](https://github.com/AvalonSemiconductors/tt2-avalonsemi-TBB1143/blob/main/README.md)
* Clock: 6000 Hz
* External hardware: Lots of resistors or some other DAC, as well as a microprocessor or microcontroller to program the 1143.



### How it works

All tone generators simply take the input clock frequency, multiplied by 256 and divide it by 16 times the generator's divisor setting. It does this by using a ring oscillator to generate a faster internal clock to be able to generate a wider range of tones. Of course, the outputs are stil only updated as fast as the scan chain allows. The output is a 6-bit digital sample, but can easily be converted to an analog signal using a resistor chain. Also uses the leftover output pins as general-purpose outputs.

### How to test

It is possible to use the DIP switches to program the generator according to the documentation. Writing 1101 into address 1, 1010 into address 2, 0000 into address 3 and finally 0001 into address 15 will cause a ~440Hz tone to appear on the output.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | CLK  | SOUT0 |
| 1 | RST  | SOUT1 |
| 2 | D0  | T0 |
| 3 | D1  | T1 |
| 4 | D2  | T2 |
| 5 | D3  | T3 |
| 6 | A0  | LED0 |
| 7 | WRT  | LED1 |
