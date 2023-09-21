---
hidden: true
title: "70 tinytapeout2-HELLo-3orLd-7seg"
weight: 71
---

## 70 : tinytapeout2-HELLo-3orLd-7seg

* Author: Rakesh Peter
* Description: HELLo-3orLd Runner on 7 segment Display
* [GitHub repository](https://github.com/r4d10n/tt02-HELLo-3orLd-7seg)
* [Most recent GDS build](https://github.com/r4d10n/tt02-HELLo-3orLd-7seg/actions/runs/3526720238)
* [Wokwi](https://wokwi.com/projects/341609034095264340) project
* [Extra docs](https://github.com/r4d10n/tinytapeout-HELLo-3orLd-7seg/blob/main/README.md)
* Clock: 1 Hz
* External hardware: 

![picture](images/HELLo-3orld-7seg.png)

### How it works

BCD to 7seg Counter is modified to suit the Simplified SoP equation for each segments. See the repo for SoP computation.

### How to test

All toggle switches in zero position and clock switch on for auto runner. Individual BCD bits can be toggled using corresponding inputs with clock switch off.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | dp toggle  | segment d |
| 4 | BCD bit 3  | segment e |
| 5 | BCD bit 2  | segment f |
| 6 | BCD bit 1  | segment g |
| 7 | BCD bit 0  | segment dp |
