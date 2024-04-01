---
hidden: true
title: "210 Hex to 7 Segment Decoder"
weight: 211
---

## 210 : 0b 011 010 010 : Hex to 7 Segment Decoder

{{< tt-scanchain-switches "011010010" >}}

* Author: Randy Glenn
* Description: Displays an input 4-bit value as a hex digit
* [GitHub repository](https://github.com/rglenn/tt02-rglenn-hex-to-7-seg)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Requires a 7-segment display as wired on the TT02 test board.



### How it works

A modern take on the classic TIL311

### How to test

7 segment display should display the digit inputted on data 0-3. Latch input will latch the data in on the rising edge. Blank input will clear the display. Decimal input is not latched.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | latch  | segment a |
| 1 | blank  | segment b |
| 2 | data 0  | segment c |
| 3 | data 1  | segment d |
| 4 | data 2  | segment e |
| 5 | data 3  | segment f |
| 6 | decimal  | segment g |
| 7 | none  | decimal |
