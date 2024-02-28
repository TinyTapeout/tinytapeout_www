---
hidden: true
title: "191 SRLD"
weight: 192
---

## 191 : 0b 010 111 111 : SRLD

{{< tt-scanchain-switches "010111111" >}}

* Author: Chris Burton
* Description: 8-bit Shift Register with latch and hex decode to display alternating nibbles
* [GitHub repository](https://github.com/burtyb/tt02-srld)
* [Wokwi](https://wokwi.com/projects/349790606404354643) project
* [Extra docs]()
* Clock: 16 Hz
* External hardware: Switches and 7-segment display



### How it works

Data is inputted to an 8-bit shift register, the data can then be (optionally) latched, data can be switched around if needed based on shifted data being LSB/MSB first, cylcles between decoding high/low nibble to show on the 7-segment display.

### How to test

Use shiftIn and shiftClk to clock in 8-bits of data. Toggle latch to move data from shift register to the latch. 7-seg display will show alternating high/low nibbles. If useLatch is high data comes from the latch otherwise it will be shown 'live' as it's shifted in. If cycle_display is low the display will cycle between high/low nibble otherwise it will show the nibble selected by lowHighNibble. mslLsb will switch between showing the shifted data as MSB or LSB first.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | displayClock  | segment a |
| 1 | shiftIn  | segment b |
| 2 | shiftClk  | segment c |
| 3 | latch  | segment d |
| 4 | cycle_display  | segment e |
| 5 | lowHighNibble  | segment f |
| 6 | useLatch  | segment g |
| 7 | mslLsb  | High/low nibble indicator |
