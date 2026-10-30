---
title: PCB - ETR
linkTitle: PCB - ETR (TT09+)
description: PCBs for the latest Tiny Tapeout shuttles
weight: 45
---

{{< figure src="images/ttetrdb.jpg" title="Tiny Tapeout's ETR demoboard with a TTSKY25a breakout board mounted on top" >}}

## Features

- Easily removable breakout boards for ASIC and [FPGA](/guides/fpga-breakout) interfacing
- Keyed breakout board connectors
- USB-C for board power and data
- RP2350 microcontroller running MicroPython with the [Tiny Tapeout SDK](https://github.com/TinyTapeout/tt-micropython-firmware) for interacting with projects
- Pmod expansion headers
- User interactable DIP switches & 7-segment display

## Quick Start

If you've gotten yourself an ETR devkit, we encourage you to check out the quick start guide. Inside the box there is
a leaflet which guides you to the correct guide, but they are linked below too.

- [Quick start with an ASIC breakout board](/guides/get-started-demoboard-etr)
- [Quick start with an FPGA breakout board](/guides/fpga-breakout)

## PCB Schematics

Schematics for both the demoboard and the breakout board are available on GitHub.

- Demoboard: [github.com/TinyTapeout/tt-demo-pcb](https://github.com/TinyTapeout/tt-demo-pcb)
- Breakout board: [github.com/TinyTapeout/breakout-pcb](https://github.com/TinyTapeout/breakout-pcb)

With the ASIC mounted on a separate breakout board, it makes it easy for you to build your own custom motherboard
without risking damage to the ASIC itself.

For TTGF shuttles, the die itself is wire bonded and epoxied to the breakout board and therefore cannot be removed.

{{< figure src="images/ttetrdb-nobreakout.jpg" title="Tiny Tapeout's ETR demoboard with no mounted breakout board" >}}

## General Usage

With a breakout board mounted, connect to the devkit using a USB-C cable via the USB-C port on the top right of the
demoboard. The RP2350 will have been flashed with the [Tiny Tapeout MicroPython firmware/SDK](https://github.com/TinyTapeout/tt-micropython-firmware) from the factory, meaning that you can access a REPL interface from either the terminal or via
the [Tiny Tapeout Commander](https://commander.tinytapeout.com).

With the SDK you can easily:
- select a design
- generate a clock signal or manually clock the design
- manually or programmatically toggle inputs
- read outputs
- test your design with hardware-in-the-loop using [microcotb](https://github.com/psychogenic/microcotb)

Various Pmod expansion modules are available from the store to expand your design:
- [Audio](https://store.tinytapeout.com/products/Audio-Pmod-p716541601)
- [VGA](https://store.tinytapeout.com/products/Tiny-VGA-Pmod-p678647356)
- [Dual 7-segment displays](https://store.tinytapeout.com/products/Dual-7-segment-Pmod-p855703769)
- [QSPI Flash/PSRAM](https://store.tinytapeout.com/products/QSPI-Pmod-p716541602)
- [Gamepad controllers](https://store.tinytapeout.com/products/Gamepad-Pmod-p741891425)
- [Simon Says](https://store.tinytapeout.com/products/Simon-Pmod-p655428050)