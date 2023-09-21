---
hidden: true
title: "209 Adder with 7-segment decoder"
weight: 210
---

## 209 : Adder with 7-segment decoder

* Author: cy384
* Description: Four bit adder with binary to 7 segment display decoder
* [GitHub repository](https://github.com/cy384/tt02-submission-template)
* [Most recent GDS build](https://github.com/cy384/tt02-submission-template/actions/runs/3598963586)
* [Wokwi](https://wokwi.com/projects/341546888233747026) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: No external hardware needed.

![picture](images/screenshot.png)

### How it works

Four full adders with carry feeding into a somewhat hairy binary to seven segment display decoder.

### How to test

Use the DIP switches to enter two four bit binary numbers.  Display of numbers greater than nine is questionable.  The decimal point of the display is carry (i.e. a sum over 16).

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | first number bit 0 (least significant)  | segment a |
| 1 | first number bit 1  | segment b |
| 2 | first number bit 2  | segment c |
| 3 | first number bit 3  | segment d |
| 4 | second number bit 0 (least significant)  | segment e |
| 5 | second number bit 1  | segment f |
| 6 | second number bit 2  | segment g |
| 7 | second number bit 3  | segment DP (carry bit) |
