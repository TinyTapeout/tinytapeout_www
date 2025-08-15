---
title: Crowd Sourced RISC-V
tags: [competition]
description: "Help build a crowd sourced microcontroller - Join the Open-Source RISC-V peripheral challenge!"
weight: 1
---

## Help build a crowd sourced microcontroller - Join the Open-Source RISC-V peripheral challenge!"

What if your Verilog code could live forever in silicon?

![riscv competition](images/riscv_compo.jpg?width=40pc)

We're launching a collaborative competition to crowdsource the coolest, weirdest, and most useful peripherals for a RISC-V microcontroller - and we're taping it out on [TTSKY25a](https://app.tinytapeout.com/shuttles/ttsky25a) with [ChipFoundry.io](https://ChipFoundry.io).

Whether you're a hardware hacker, HDL hobbyist, student, or seasoned silicon wrangler, this is your chance to contribute to an open-source, community-built microcontroller that actually gets manufactured.

You bring the Verilog peripheral: UARTs, timers, graphics engines, musical synths, sensors, or something nobody's thought of yet, and we'll handle integration and physical tapeout. 

It's collaborative, it's competitive, and it's an amazing excuse to learn, teach, and build together.

Submit your peripheral, share your creativity, and help make a crowd-designed chip that we can all be proud of.

This competition is free to enter, but if you want a physical copy of the finished chip you will have to purchase the demoboard separately.

All entrants who also purchase the demoboard will get a free [QSPI Pmod](https://store.tinytapeout.com/products/QSPI-Pmod-p716541602) required by the [TinyQV](https://github.com/tinytapeout/ttsky25a-tinyqv) microcontroller.

### What are the rules?

* Designs must use 2 tiles or less.
* Designs must be submitted by making a pull request on TinyQV by **23:59 PT 5th September**.
* Docs updates made up until the 12th September (one week after the deadline) will count for the competition. 
* Only digital designs can be accepted (but you are free to use any HDL, providing it can be compiled to verilog for integration)
* Entrants can submit multiple designs, but in the case where we are running out of space, priority will be given to the first submission.
* The SPI controller used for testing cannot be removed.
* You can't change the config.json to get higher density (as all designs will be hardened together at the end).

### Categories

* Newcomer - this must be your first tapeout on Tiny Tapeout,
* Best Byte Peripheral
* Best documented
* Best tested
* Most unusual
* Community favourite

### How to enter

Start with one of the two templates:

* [Byte Peripheral](https://github.com/TinyTapeout/tinyqv-byte-peripheral-template) 
    * Maximum size 1 tile (~1000 standard cells)
    * 8 bit data bus
    * 4 bit address range
* [Full Peripheral](https://github.com/TinyTapeout/tinyqv-full-peripheral-template)
    * Maximum size 2 tiles (~2000 standard cells)
    * 32 bit data bus
    * 6 bit address range

Then follow the instructions given in the template's README. An overview of the process is:

1. Replace the example design with your own.
2. Designs should normally avoid using in7 and out0 to simplify testing in TinyQV Micropython.
3. Test and document it.
4. Once the GDS and Docs action are green, make a pull request to TinyQV [https://github.com/tinytapeout/ttsky25a-tinyqv](https://github.com/tinytapeout/ttsky25a-tinyqv).
5. You are encouraged to share your design's aims and pinout in the [discord forum](https://discord.com/channels/1009193568256135208/1396915746264711311) so we can increase the chance that several peripherals can be used at the same time.

If you want, you can also submit your design as a standalone module to Tiny Tapeout. You'll be able to drive the SPI interface with the demoboard's RP2040. This carries a cost of 70 euros per tile.

## How to get help

* Discuss on the [competition channel](https://discord.com/channels/1009193568256135208/1259420274445516891) discord community channel. Join the [discord here](https://tinytapeout.com/discord)

## Prizes

![prizes](images/demoscene_prizes.png?width=40pc)

* All entrants who purchase the demoboard will get free QSPI Pmod and a sticker pack.
* Winners of each category will receive combinations of:
    * $100 to spend in the Tiny Tapeout store:
        * Baseball caps,
        * Silicon Wafers,
        * Standard cell models.
    * Free tiles for future tapeouts.

### Judges

Judging will happen shortly after tapeout of TTSKY25a (15th September). We will not wait for silicon to arrive to judge the competition so make sure your docs are in good order!

* [Andrew "bunnie" Huang](https://www.bunniestudios.com/) - One of the world’s most renowned hardware hackers, best known for reverse-engineering the original Xbox. He is the author of The Essential Guide to Electronics in Shenzhen and a passionate advocate for hardware freedom and security.
* [Yuning Liang](https://www.linkedin.com/in/yuningliang/) - CEO and founder of [DeepComputing](https://deepcomputing.io/news/). In 2024, he received the "RISC-V Community Contributor Award" and was recognized as an "Ubuntu Summit Contributor." A FOSDEM 2025 RISC-V Track Keynote Speaker and Ubuntu Summit 2024 RISC-V Invited Speaker, Yuning is known for advocating open source and RISC-V technologies and believes in cross-cultural collaboration and problem-solving.
* [Omar Chebib](https://www.linkedin.com/in/omar-chebib/) - Senior embedded software engineer at Espressif Systems, specialized in RISC-V microcontrollers and low-level design. Developed ESP32-C3 support for QEMU. Passionate about RISC-V technology and FPGA hardware design, creating 8-bit peripherals in Verilog in his spare time.
* [Mike "RebelMike" Bell](https://rebel-lion.uk/@mike) - Coder, narrowboater, puzzle hunter, and author of TinyQV
* [Matt Venn](https://www.mattvenn.net/) - Open Silicon pioneer known for Tiny Tapeout and the [Zero to ASIC courses](https://zerotoasiccourse.com).

### Small print

1. How will the competition be judged? A panel of appointed judges will vote and have the final say. 
2. There will not be any extensions made to the deadline.
3. If your designs uses in7 and out0 it will prevent the use of MicroPython for testing.
4. You are not limited to a maximum clock frequency, but you're advised to stick with TinyQV's default of 64MHz.
5. You cannot remove the SPI controller, but we will accept PRs to the template to reduce utilization of the SPI controller (as long as it doesn't break the functionality). The SPI controller in your repo must match one from the template (any revision, so it's fine if you don't update).
