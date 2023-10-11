---
title: 'PCB'
description: 'PCBs'
weight: 10
---

{{< figure src="images/tt02_board_top.jpeg" title="PCB for TT01, 02 & 03" >}}

# Carrier board

PCB files: https://github.com/TinyTapeout/caravel-breakout-pcb

Chips are mounted on a carrier board. There are 2 versions, one for QFN package and one for WLCSP.
We expect all TT chips to be in QFN.

The carrier board makes it easy to:

* access all the chip signals
* build your own motherboard without having to solder QFN or WLCSP

# Demo board for TT01, 02 & 03

PCB files: https://github.com/TinyTapeout/tt123-demo-pcb

The demo board easy ways to:

* select the active design with dip switches
* single cycle clock and reset
* connect external components via headers or PMODs
* see the 8 outputs on the 7 segment display
* control the 8 inputs with dip switches

# Demo board for TT04 and beyond

Work in progress: https://github.com/TinyTapeout/tt-demo-pcb

The demo board from TT04 onwards will include Raspberry Pi Pico to:

* select the design
* provide SRAM emulation
* provide clock generation

# Board development

Board development is sponsored by [Aisler](https://aisler.net/)!
