---
hidden: true
title: "13 8bit configurable galois lfsr"
weight: 14
---

## 13 : 0b 000 001 101 : 8bit configurable galois lfsr

{{< tt-scanchain-switches "000001101" >}}

* Author: Alexander Schönborn
* Description: A 8bit configurable galois lfsr.
* [GitHub repository](https://github.com/gr33nstyle/tt03-verilog-lfsr)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Uses 2 cycles each to set the shift and xor mask registers.
It has 3 operation modes: normal shift, 


### How to test

After reset, set the shift register and xor state, after that normal shift mode


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | output[0] lsb normal lfsr output |
| 1 | reset  | output[1] other 7 bits to see the full state |
| 2 | mode[0] 00 normal shift mode,  01 set register mode,  | output[2] |
| 3 | mode[1] 10 set mode registers, 11 unused  | output[3] |
| 4 | data_in[0] is used for both filling register and xor mask state  | output[4] |
| 5 | data_in[1] needs 2 cycles to fill all 8 bits  | output[5] |
| 6 | data_in[2] first cyle is lower 4 bits, 2nd upper 4 bits  | output[6] |
| 7 | data_in[3] see above  | output[7] |
