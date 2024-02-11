---
title: 'PCB (Tiny Tapeout 4 and onwards)'
linkTitle: PCB (TT04+)
description: 'PCBs for Tiny Tapeout 4 and onwards'
weight: 10
---

## Carrier board

PCB files: https://github.com/TinyTapeout/caravel-breakout-pcb

Chips are mounted on a carrier board. There are 2 versions, one for QFN package and one for WLCSP.
We expect all TT chips to be in QFN.

The carrier board makes it easy to:

* access all the chip signals
* build your own motherboard without having to solder QFN or WLCSP

## Demo board

Work in progress: https://github.com/TinyTapeout/tt-demo-pcb

The demo board from TT04 onwards will include an RP2040 chip to:

* select the active design
* generate [the clock signal](../clock/) for your design, up to 50 MHz
* provide [SPI RAM emulation](https://github.com/MichaelBell/spi-ram-emu), up to 512 Kbit
