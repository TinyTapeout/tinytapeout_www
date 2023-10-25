---
hidden: true
title: "106 Tiny PIC-like MCU"
weight: 107
---

## 106 : 0b 001 101 010 : Tiny PIC-like MCU

{{< tt-scanchain-switches "001101010" >}}

* Author: myrtle
* Description: serially programmed, subset of PIC ISA, MCU
* [GitHub repository](https://github.com/gatecat/tt02-pic)
* [Most recent GDS build](https://github.com/gatecat/tt02-pic/actions/runs/3595019454)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: A means of shifting in the program (e.g. another microcontroller, USB GPIO interface, etc) is required at startup. Once running, it is standalone.



### How it works

Implements a subset of the PIC mid-range ISA (no SFR, no carry, no call/stack), 6 GPRs, 16 program words.

### How to test

Program data is shifted in serially. For each program word, shift in {(1 << address), data} (28 bits total) to prog_data and then assert prog_strobe. Once loaded, deassert (bring high), reset and the program should start running. GPR 6 is GPI and GPR 7 is GPO

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | gpo0 |
| 1 | reset  | gpo1 |
| 2 | prog_strobe  | gpo2 |
| 3 | prog_data  | gpo3 |
| 4 | gpi0  | gpo4 |
| 5 | gpi1  | gpo5 |
| 6 | gpi2  | gpo6 |
| 7 | gpi3  | gpo7 |
