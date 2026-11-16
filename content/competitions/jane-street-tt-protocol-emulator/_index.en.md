---
title: Protocol Emulator ASIC Competition
tags: [competition]
description: "Run by Jane Street. Fabricated through Tiny Tapeout."
weight: 1

---

*Run by Jane Street. Fabricated through Tiny Tapeout.*

## **Can you design a chip?**

[Jane Street](https://blog.janestreet.com/protocol-emulator-asic-competition/) is challenging people to design an open-source, general-purpose protocol emulator ASIC, and it will pay to fabricate its favorite designs on a Tiny Tapeout shuttle. Winners receive a fabricated copy of their chip, mounted on a Tiny Tapeout demo board, so they can test their design in real silicon.

{{< figure src="images/janestreet.png" title="Jane Street Protocol Emulator ASIC Competition" >}}


## The details

| | |
|---|---|
| **Deadline** | January 18th, 2027 |
| **Winners announced** | Aiming for early February 2027 |
| **Shuttle** | March 2027 CMOS5L, subject to the foundry schedule |
| **Process** | IHP 130nm CMOS5L |
| **Max area** | 8x4 tiles (about 1.0 mm²) |
| **Designs taped out** | Around four planned |
| **Teams** | Solo or team, no size limit, one entry per team |
| **Questions** | asic-competition@janestreet.com |

## The challenge

Design an **open-source, general-purpose protocol emulator ASIC.**

Think about how a microcontroller can imitate a serial protocol just by switching its pins on and off at exactly the right moments. Now picture a chip built from the ground up to do only that job. That’s a protocol emulator: a small programmable processor whose instructions are all about reading pins, driving pins, and timing things down to the clock cycle. The protocol lives in the program, not in the silicon.

That’s why a chip with three fixed circuits, one each for UART, SPI, and I2C, misses the point. The real test is whether someone can write a brand new program for your chip after it’s been made and have it speak a protocol you never planned for.

- Begin with UART, SPI, and I2C.
- You can go after low-speed USB or 10Mbit Ethernet. 
- How you get there is up to you. A CPU is the most common route, but other architectures count too, as long as the chip can still be reprogrammed after fabrication. 
- Include the tools as well: a way to write programs for the chip, plus example programs for each protocol you support.

Jane Street uses [Hardcaml](https://hardcaml.org/) to generate RTL for its FPGA and ASIC designs, and it is keen to see the languages and verification techniques entrants use, including formal methods, random constrained tests, and AI-assisted verification. AI tools are allowed, and entrants should describe how they used them in their write-up.

## The rules

Designs target IHP's 130nm CMOS5L process through Tiny Tapeout. Entrants start with the [Tiny Tapeout IHP Verilog template](https://github.com/TinyTapeout/ttihp-verilog-template), which takes a design from RTL to GDS. Its main branch now targets CMOS5L, so the separate `cmos5l` branch is no longer needed. The tile size in `info.yaml` should be set to 8x4.

Submissions should be open source so others can use and build on them. There is no need to keep work hidden until the deadline, so building in public is welcome. Because this is a much bigger project than Jane Street's earlier reverse-engineering puzzle, teams are strongly recommended.

Designs must be submitted by January 18th, 2027. Jane Street will pay to tape out the most novel designs on a Tiny Tapeout shuttle, targeting the March 2027 CMOS5L shuttle. Teammates and other entrants can be found in the competitions channel on the [Tiny Tapeout Discord](https://discord.gg/rMmn8kXJng).

## How much fits

An 8x4 allocation is 32 tiles. At approximately 202um x 155um per tile, that is about 1.0 mm² of nominal tile area. As a rough estimate, Jane Street suggests budgeting about 1K logic cells per tile. For instruction memory, SRAM can be more area-efficient than flip-flops, and IHP SRAM macros are allowed, including more than one, as long as everything fits and passes the Tiny Tapeout precheck.

We recommend running synthesis early, checking the mapped cell area, leaving room for clock-tree buffers and routing, and then running the full place-and-route flow to check timing.

## Pins, speed, and the board

Each design gets 24 digital pins: 8 inputs, 8 outputs, and 8 bidirectional, plus clock and reset. There are no analog pads, though analog or mixed-signal circuits inside a design, like a PLL, are fine as long as they pass precheck. 

We estimates about 10 ns round trip through the pads and mux, and a maximum output frequency of around 66 MHz. No CMOS5L silicon is back yet, so these are not measured numbers.

There is no clock frequency target. The RP2350 on the demo board generates the clock, and 60 MHz is OK. The chip has digital pins only, with 3.3V I/O on the demo board, so pull-ups, transceivers, or level shifting go on a Pmod.

Flops do not start at 0 on an ASIC, so designs need to use the reset signal (`rst_n`) to reach a known state. When a design is deselected it is powered down and loses its state, so the program needs to be reloaded once it is selected again.

## What to submit

- Submit a link to a public repository with their RTL, tests, and a passing GDS and precheck from the Tiny Tapeout flow. 
- Documentation of the architecture and instruction set, an assembler or toolchain with example programs, and a write-up of the verification approach. 
- A video or demo is not required, but Jane Street will look at one if provided. 
- Gate-level simulation is strongly recommended. 
- The Tiny Tapeout flow should be used for the GDS, and designs that hit GitHub Actions' 6-hour limit can be hardened locally and submitted with Tiny Tapeout's custom GDS action. 
- A final submission form will be added closer to the deadline.

## How entries are judged

There is no fixed weighting. Flexibility is the main thing: can the chip be reprogrammed to support protocols it was not designed for? Beyond that, Jane Street will look at which protocols are demonstrated, anything unique the architecture makes possible, and how the design was built and verified. A design with fewer protocols but a strong architecture and verification approach can be competitive. The write-up is weighted heavily, including how easy it is to read and how clearly it explains any new techniques or flows.

## Timeline

Submissions close January 18th, 2027. 

The selected designs will be announced in early February, ahead of the March 2027 CMOS5L shuttle. The current plan is to tape out around four designs. 

## Sign up

Interested entrants can fill out Jane Street's [sign-up form](https://docs.google.com/forms/d/e/1FAIpQLSeF7fq756MegxZRQxotBwUJYZx-cL9MrGjxV0z4uD_J0sADxQ/viewform) to receive updates on the tapeout template, deadlines, and the final submission link. Filling it out is not a commitment to participate, and the form does not send a confirmation email.

Full details and FAQ: [Jane Street's announcement](https://blog.janestreet.com/protocol-emulator-asic-competition/) (posted September 10, 2026, updated November 9th).