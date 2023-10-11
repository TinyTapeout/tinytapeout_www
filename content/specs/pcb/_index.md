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

# Mother board

PCB files: https://github.com/TinyTapeout/mpw-mb1-pcb

The motherboard provides easy ways to:

* select the active design with dip switches
* single cycle clock and reset
* connect external components via headers or PMODs
* see the 8 outputs on the 7 segment display
* control the 8 inputs with dip switches

# Board development

Board development is sponsored by [Aisler](https://aisler.net/)!
