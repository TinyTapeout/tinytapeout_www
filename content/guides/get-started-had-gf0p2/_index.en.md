---
title: Getting started with the Tiny Tapeout Hackaday GF0p2 chip breakout
linkTitle: Hackaday GF0p2 chip breakout quickstart
description: Bring-up and interact with the GF0p2 chip
weight: 60
---

If you've got your hands on a GF0p2 chip breakout card, this quickstart guide will get you going and cover the following:

- overview and bringup
- interaction via microcontroller
- interaction via the browser using the commander app

{{% notice note %}}
Please note that you will need a microcontroller (Arduino/Pico/ESP32) to interact with the chip itself, as you'll need
to interact with the mux onboard in order to select one of 52 designs onboard.
{{% /notice %}}

{{% notice note %}}
We only had an ~80% yield of boards with all pads successfully bonded, so there is a possibility that your board may
not be fully functional. If you are running into any issues, this is a possible cause.
{{% /notice %}}

{{% notice warning %}}
There are two chip variants bonded to the breakout - `TTP2` and `TTPG`. For `TTPG`, VIO and Vcore must be present
at the same time or before Vcore, and Vcore must not exceed 3.3V. To determine which variant you have, you will
have to read the onboard ROM.
{{% /notice %}}

## Overview

The breakout card has one of our TTGF0p2 dies wirebonded onto it - the chip contains 52 unique designs, and was
manufactured using GlobalFoundries' 180nm process. The designs onboard are fully open source, and you can learn about
them all by reading our <a target="_blank" href="https://tinytapeout.github.io/tinytapeout-gf-0p2/datasheet.pdf">datasheet</a>
or by simply scrolling through the table of projects on the [chips' homepage](/chips/ttgf0p2).

There is a varied selection of projects on this chip: RISC-V and custom ISA processors, visual VGA creations, playable
games and PLA/FPGA fabrics.

Projects have access to 8 input pins, 8 output pins and 8 bi-directional pins to interface with the outside world. The
pins which the project uses should be documented in their individual datasheets. Though lacking from this breakout card,
projects may also use PMOD expansion cards (which would typically be connected via some headers) in order to access
additional memory ([PSRAM]()), draw to a screen via [VGA](), or connect a [gamepad controller](). 

PMODs are available from our [store](https://store.tinytapeout.com), or you can manufacture your own if you follow the
[Digilent PMOD specification](https://digilent.com/reference/pmod/start). Be sure to check out our [pinout specs](/specs/pinouts) page too!

## Power

Power is provided by TODO

## Bring-up

Carefully connect the following pins to your microcontroller: TODO

Once powered, you will have to interact with the multiplexer onboard to select a project - for this example, we'll pick
the onboard [chip ROM]() which contains metadata about this die.

TODO

### Selecting Projects
TODO


## Commander App
TODO

