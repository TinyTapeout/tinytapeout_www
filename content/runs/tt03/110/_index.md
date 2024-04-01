---
hidden: true
title: "110 LUTRAM"
weight: 111
---

## 110 : 0b 001 101 110 : LUTRAM

{{< tt-scanchain-switches "001101110" >}}

* Author: Luis Ardila
* Description: LUTRAM with 4 bit address and 8 bit output preloaded with a binary to 7 segments decoder, sadly it was too big for 0-F, so now it is 0-9?
* [GitHub repository](https://github.com/leardilap/tt02-LUTRAM)
* [Wokwi](https://wokwi.com/projects/347594509754827347) project
* [Extra docs](https://github.com/leardilap/tt02-LUTRAM)
* Clock: 0 Hz
* External hardware: 



### How it works

uses the address bits to pull from memory the value to be displayed on the 7 segments, content of the memory can be updated via a clock and data pins, reset button will revert to default info, you would need to issue one clock cycle to load the default info

### How to test

clk, data, rst, nc, address [4:0]

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | data  | segment b |
| 2 | reset  | segment c |
| 3 | nc  | segment d |
| 4 | address bit 3  | segment e |
| 5 | address bit 2  | segment f |
| 6 | address bit 1  | segment g |
| 7 | address bit 0  | segment pd |
