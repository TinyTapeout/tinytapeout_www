---
hidden: true
title: "268 ChipTune"
weight: 10
---

## 268 : ChipTune

* Author: Wallace Everest
* Description: Vintage 8-bit sound generator
* [GitHub repository](https://github.com/WallieEverest/tt05)
* [GDS submitted](https://github.com/WallieEverest/tt05/actions/runs/6555676660)
* HDL project
* [Extra docs](https://github.com/WallieEverest/tt05/blob/main/README.md)
* Clock: 1789773 Hz
* External hardware: Computer COM port

![picture](images/picture.png)

### How it works

ChipTune implements an 8-bit Programmable Sound Generator (PSG).
Input is from a serial UART interface.
Output is PWM audio.

#### Overview

This project replicates the Audio Processing Unit (APU) of vintage video games.

#### Statistics

- Tiles: 1x2
- DFF: 458
- Total Cells: 2760
- Utilization: 72%

#### TinyTapeout 5 Configuration

TT04 devices from the eFabless Multi-Project Wafer (MPW) shuttle are delivered in QFN-64 packages, mounted on a daughterboard for breakout.

Based on data from:

- https://github.com/WallieEverest/tt04

Changes:
1.) Static registers addressed by the serial UART have been connected to the external reset, providing a known startup.
2.) Default values for REG signals have been removed, allowing 'X' propagation during simulation until the design reaches steady state.


### How to test

The ChipTune project can be interfaced to a computer COM port (9600,n,8,1).
An analog PWM filter and audio driver are needed for the test rig.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | None  | Blink | None |
| 1 | None  | Link | None |
| 2 | RX  | TX | None |
| 3 | None  | PWM | None |
| 4 | None  | Square1 | None |
| 5 | None  | Square2 | None |
| 6 | None  | Triangle | None |
| 7 | None  | Noise | None |

### Chip location

{{< shuttle-map "tt05" "268" >}}
