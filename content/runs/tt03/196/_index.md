---
hidden: true
title: "196 RV8U - 8-bit RISC-V Microcore Processor"
weight: 197
---

## 196 : 0b 011 000 100 : RV8U - 8-bit RISC-V Microcore Processor

{{< tt-scanchain-switches "011000100" >}}

* Author: David Richie
* Description: 8-bit processor based on RISC-V ISA
* [GitHub repository](https://github.com/browndeer/rv8u)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Executes reduced RISC-V based ISA

### How to test

Requires interfacing to external memory

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | serdes output bit 0 |
| 1 | reset  | serdes output bit 1 |
| 2 | serdes input bit 0  | serdes output bit 2 |
| 3 | serdes input bit 1  | serdes output bit 3 |
| 4 | serdes input bit 2  | serdes output bit 4 |
| 5 | serdes input bit 3  | serdes output bit 5 |
| 6 | serdes input bit 4  | serdes output bit 6 |
| 7 | serdes input bit 5  | serdes output bit 7 |
