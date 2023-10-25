---
hidden: true
title: "107 RV8U - 8-bit RISC-V Microcore Processor"
weight: 108
---

## 107 : 0b 001 101 011 : RV8U - 8-bit RISC-V Microcore Processor

{{< tt-scanchain-switches "001101011" >}}

* Author: David Richie
* Description: 8-bit processor based on RISC-V ISA
* [GitHub repository](https://github.com/browndeer/rv8u)
* [Most recent GDS build](https://github.com/browndeer/rv8u/actions/runs/3603387504)
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
