---
hidden: true
title: "112 BCD to 7-segment encoder"
weight: 113
---

## 112 : 0b 001 110 000 : BCD to 7-segment encoder

{{< tt-scanchain-switches "001110000" >}}

* Author: maehw
* Description: Encode binary coded decimals (BCD) in the range 0..9 to 7-segment display control signals
* [GitHub repository](https://github.com/maehw/tt02-bcd-7segment-encoder)
* [Wokwi](https://wokwi.com/projects/347688030570545747) project
* [Extra docs](https://github.com/maehw/wokwi-lookup-table-generator/blob/main/README.md)
* Clock: 0 Hz
* External hardware: Input switches and 7-segment display (should be on the PCB)



### How it works

The design has been fully generated using https://github.com/maehw/wokwi-lookup-table-generator using a truth table (https://github.com/maehw/wokwi-lookup-table-generator/blob/main/demos/bcd_7segment_lut.logic.json). The truth table describes the translation of binary coded decimal (BCD) numbers to wokwi 7-segment display (https://docs.wokwi.com/parts/wokwi-7segment). Valid BCD input values are in the range 0..9, other values will show a blank display.

### How to test

Control the input switches on the PCB and check the digit displayed on the 7-segment display.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | w  | segment a |
| 1 | x  | segment b |
| 2 | y  | segment c |
| 3 | z  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
