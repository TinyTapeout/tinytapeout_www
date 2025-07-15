---
title: SKY25a RISC-V Peripheral
tags: [competition]
description: "Build a Peripheral, Get It on Silicon - Join the Open-Source RISC-V Peripheral Challenge!"
weight: 5
---

## Build a Peripheral, Get It on Silicon - Join the Open-Source RISC-V Peripheral Challenge!

What if your Verilog code could live forever in silicon?

![riscv competition](images/riscv_compo.png?width=40pc)

We're launching a collaborative competition to crowdsource the coolest, weirdest, and most useful peripherals for a RISC-V microcontroller - and we’re taping it out on SKY25a with [ChipFoundry.io](https://ChipFoundry.io).

Whether you’re a hardware hacker, HDL hobbyist, student, or seasoned silicon wrangler, this is your chance to contribute to an open-source, community-built microcontroller that actually gets manufactured.

You bring the Verilog peripheral: UARTs, timers, graphics engines, musical synths, sensors, or something nobody’s thought of yet, and we’ll handle integration and physical tapeout. 

It’s collaborative, it’s competitive, and it’s an amazing excuse to learn, teach, and build together.

Submit your peripheral, share your creativity, and help make a crowd-designed chip that we can all be proud of.

All entrants will receive 1 free tile for their design.

All entrants who also purchase the demoboard will get a free [QSPI Pmod](https://store.tinytapeout.com/products/QSPI-Pmod-p716541602) to be able to experiment with the microcontroller.

### What are the rules?

* Designs must use 2 tiles or less.
* Designs must be submitted by 12th September.
* Only digital designs can be accepted (but you are free to use any HDL, providing it can be compiled to verilog for integration)
* Entrants can submit multiple designs, but in the case where we are running out of space, priority will be given to the first submission.

### Categories

* Newcomer - this must be your first tapeout on Tiny Tapeout,
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

Then follow the instructions given in the template’s README. Simply put this means:

1. Replace the example design with your own
2. Designs should normally avoid using in7 and out0 to simplify testing in TinyQV Micropython.
3. Test and document it
4. Once the GDS and Docs action are green, make a pull request to TinyQV [https://github.com/tinytapeout/ttsky25a-tinyqv](https://github.com/tinytapeout/ttsky25a-tinyqv)  

You are also free to submit your design as a standalone module to Tiny Tapeout, you’ll be able to access it via the demoboard’s RP2040 co-processor.

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

* Mike Bell (author of TinyQV)
* Matt Venn
* TBD  

### Small print

1. How will the competition be judged? A panel of appointed judges will vote and have the final say. The submissions will be judged on the results the judge gets on their boards.
2. Will there be any extension to the deadline? No!
3. If your designs uses in7 and out0 it will prevent the use of micropython for testing.
4. You are not limited to a maximum clock frequency, but you’re advised to stick with TinyQV’s default of 64MHz.
