---
hidden: true
title: "34 prbs15"
weight: 35
---

## 34 : 0b 000 100 010 : prbs15

* Author: Tom Schucker
* Description: generates and checks prbs15 sequences
* [GitHub repository](https://github.com/teaandtechtime/tt02-submission-prbs15)
* [Most recent GDS build](https://github.com/teaandtechtime/tt02-submission-prbs15/actions/runs/3457691234)
* [Wokwi](https://wokwi.com/projects/348260124451668562) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: logic analyzer and jumper leads



### How it works

uses lfsr to generate and check prbs15 sequence

### How to test

running clk, gnd pin1, set enable high. feedback prbs15 output to check, monitor error for pulses

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | clk |
| 1 | gnd  | prbs15 |
| 2 | enable  | error |
| 3 | check  | checked |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
