---
hidden: true
title: "99 GPS C/A PRN Generator"
weight: 100
---

## 99 : 0b 001 100 011 : GPS C/A PRN Generator

* Author: Adam Greig
* Description: Generate the GPS C/A PRN sequences PRN1 through PRN32
* [GitHub repository](https://github.com/adamgreig/tt02-gpa-ca-prn)
* [Most recent GDS build](https://github.com/adamgreig/tt02-gps-ca-prn/actions/runs/3598293827)
* HDL project
* [Extra docs](https://github.com/adamgreig/tt02-gps-ca-prn)
* Clock: 1000 Hz
* External hardware: None



### How it works

Two LFSRs are constructed per the GPS ICD, and the first is added to selected taps of the second to produce the selected final PRN sequence.

### How to test

With io_in[2:7] set to 2 to select PRN2, reset and then drive the clock; the output sequence on io_out[2] will start with 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | G1 |
| 1 | reset  | G2 |
| 2 | prn[0]  | Selected PRN |
| 3 | prn[1]  | none |
| 4 | prn[2]  | none |
| 5 | prn[3]  | none |
| 6 | prn[4]  | none |
| 7 | none  | none |
