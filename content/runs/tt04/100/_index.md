---
hidden: true
title: "100 Risc-V Nano V"
weight: 104
---

## 100 : Risc-V Nano V

* Author: Michael Bell
* Description: RV32E bit serial processor
* [GitHub repository](https://github.com/MichaelBell/tt04-nanoV)
* [GDS submitted](https://github.com/MichaelBell/tt04-nanoV/actions/runs/6064937546)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

A minimal RV32E processor using an SPI RAM for instructions and data.

The SPI RAM and a UART are connected to the bidi IOs.  The SPI RAM is clocked at the same speed as the input clock.

The CPU has no instruction or data cache and effectively runs at clock speed / 32.  More details can be found in the [nanoV](https://github.com/MichaelBell/nanoV) repo.

Restrictions/unimplemented parts of RV32E:

- register x3/gp is hardcoded to 0x00001000 (this allows data in the low 6KB of RAM to be accessed cheaply).
- register x4/tp is hardcoded to 0x10000000 (this allows the GPIO and UART to be accessed cheaply)
- The ebreak instruction (and interrupts in general) are not implemented.

The gp and tp registers are not written to by normal programs compiled by gcc, so the regular build of gcc can be used to build programs.

The inputs and outputs are for general purpose use from the CPU, the outputs can be written at address 0x10000000, and inputs read at 0x10000004.

The UART runs at clock speed / 128 (e.g. 93750 baud with a 12MHz clock).  Bytes can be written or read at address 0x10000010.
The UART provides 2 bits of status at address 0x10000014:

- Bit 1: Received data waiting
- Bit 0: Data transmit in progress

There are no transmit or receive FIFOs, before a program sends a byte it should check bit 0 is low before writing.  The peripheral library in [nanoV-sdk](https://github.com/MichaelBell/nanoV-sdk) does this.


### How to test

Attach an SPI RAM or use the [RP2040 emulated SPI RAM](https://github.com/MichaelBell/spi-ram-emu) and build prorgams using the nanoV-sdk, found in the [nanoV-sdk](https://github.com/MichaelBell/nanoV-sdk) repo.

The SPI RAM outputs are disabled when Reset is asserted, allowing the RAM to be reprogrammed easily.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | General purpose input 0  | segment a / GP output 0 | SPI RAM MOSI |
| 1 | General purpose input 1  | segment b / GP output 1 | SPI RAM CSn |
| 2 | General purpose input 2  | segment c / GP output 2 | SPI RAM SCK |
| 3 | General purpose input 3  | segment d / GP output 3 | SPI RAM MISO |
| 4 | General purpose input 4  | segment e / GP output 4 | UART RX |
| 5 | General purpose input 5  | segment f / GP output 5 | UART TX |
| 6 | General purpose input 6  | segment g / GP output 6 | UART RTS |
| 7 | General purpose input 7  | dot / GP output 7 | SPI RAM ~Hold |
