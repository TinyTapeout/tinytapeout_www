---
hidden: true
title: "121 Hex to 7 Segment Decoder"
weight: 122
---

## 121 : 0b001111001 : Hex to 7 Segment Decoder

* Author: Randy Glenn
* Description: Displays an input 4-bit value as a hex digit
* [GitHub repository](https://github.com/rglenn/tt02-rglenn-hex-to-7-seg)
* [Most recent GDS build](https://github.com/rglenn/tt02-rglenn-hex-to-7-seg/actions/runs/3598979880)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

A modern take on the classic TIL311

### How to test

after reset, the counter should increase by one every second

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
