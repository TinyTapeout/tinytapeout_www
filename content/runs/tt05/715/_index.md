---
hidden: true
title: "715 SPI Peripheral"
weight: 111
---

## 715 : SPI Peripheral

* Author: Mike Bell
* Description: SPI RAM/ROM/Random source
* [GitHub repository](https://github.com/MichaelBell/tt05-spi-peripheral)
* [GDS submitted](https://github.com/MichaelBell/tt05-spi-peripheral/actions/runs/6659152857)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: A custom RP2040 board to make full use of the ROM



### How it works

The project implements an 8 byte RAM, 324 byte ROM and a random source supporting standard SPI read/write (03h/02h) and SPI quad read/write (6Bh/32h) commands.  The quad read commands have 2 delay cycles.

The address map is:

| Address | Item |
| ------- | ---- |
| 0x000   | RP2040 boot stage 2 ROM |
| 0x100   | 8 byte RAM, wrapped 32 times |
| 0x200   | RP2040 program ROM |
| 0x300   | Mirror of the RAM |
| 0x400   | Random source |

See the [README](https://github.com/MichaelBell/tt05-spi-peripheral/blob/main/README.md) for more details.

Note the default project clk is a debug clock only, the project is internally clocked off SPI CLK, input 0.


### How to test

You will need to use an SPI/QSPI master, unfortunately it was not possible to set up the pinout to support both QSPI and match the native RP2040 SPI block, so you'll need a PIO (Q)SPI implementation.  I'll make that available before the chips are available.

The values in the RAM may be inspected by setting the address on the input toggle switches 2-5 and pressing the single clock button to latch the data, which is displayed on the 7 segment display and presented on uio pins 4-7.  The default project clock should otherwise not be used - the project is clocked from the SPI clock.

The project is also designed to be used as a ROM connected to an RP2040's QSPI pins (instead of the more normal flash).  You'll need a custom board for this as the QSPI pins are generally connected directly to a flash chip, I have a couple which I could potentially send to interested people in the UK - contact me on Discord.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | SPI CLK  | segment a | SPI MOSI / D0 |
| 1 | SPI CSn  | segment b | SPI MISO / D1 |
| 2 | Debug nibble select  | segment c | D2 |
| 3 | Debug addr 0  | segment d | D3 |
| 4 | Debug addr 1  | segment e | Debug bit 0 |
| 5 | Debug addr 2  | segment f | Debug bit 1 |
| 6 | Unused  | segment g | Debug bit 2 |
| 7 | Unused  | dot (Set to SPI CSn) | Debug bit 3 |
