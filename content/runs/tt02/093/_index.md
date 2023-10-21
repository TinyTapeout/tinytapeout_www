---
hidden: true
title: "93 Whisk: 16-bit Serial RISC CPU"
weight: 94
---

## 93 : 0b 001 011 101 : Whisk: 16-bit Serial RISC CPU

* Author: Luke Wren
* Description: Execute a simple 16-bit RISC-style instruction set from up to 64 kilobytes of external SPI SRAM.
* [GitHub repository](https://github.com/Wren6991/tt02-whisk-serial-processor)
* [Most recent GDS build](https://github.com/Wren6991/tt02-whisk-serial-processor/actions/runs/3603452870)
* HDL project
* [Extra docs](https://github.com/Wren6991/tt02-whisk-serial-processor/blob/main/README.md)
* Clock: 6000 Hz
* External hardware: - An SPI SRAM with 16-bit addresses and support for sequential mode
  accesses, e.g. Microchip 23K256T-I

- A host interface for loading and initialising the SPI SRAM, e.g.
  Raspberry Pi Pico

- (optional) Two 74HC595 shift registers for a 16-bit output port

- (optional) A 74HC166 shift register for an 8-bit input port

All of these components will be integrated on the Whisk host board, see
the project GitHub page.




### How it works

Whisk uses a single SPI interface for instruction fetch, loads and stores
on an external SPI SRAM. The SPI serial clock is driven at the same
frequency as Whisk's clock input. The program counter, and the six
general purpose registers, are all 16 bits in size, so up to 64 kilobytes
of memory can be addressed.

Internally, Whisk is fully serial: registers and the program counter are
read and written one bit at a time. This matches the throughput of the
SPI memory interface, and leaves more area free for having more/larger
general purpose registers as well as leaving room for expansion on future
Tiny Tapeouts.

An optional IO port interface adds up to 16 outputs and 8 inputs, using
standard parallel-in-serial-out and serial-in-parallel-out shift
registers. Whisk can read or write these ports in a single instruction.
These can be used for bitbanging external hardware such as displays, LEDs
and buttons.


### How to test

You will need a Whisk host board, with memory and the host interface to
load it. See the project GitHub page.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | mem_csn |
| 1 | rst_n  | mem_sck |
| 2 | mem_sdi  | mem_sdo |
| 3 | ioport_sdi  | ioport_sck |
| 4 | none  | ioport_sdo |
| 5 | none  | ioport_latch_i |
| 6 | none  | ioport_latch_o |
| 7 | none  | none |
