---
title: 'Pinouts'
description: 'Recommended pinouts for various protocols and Pmods'
weight: 30
---

To ease bring-up and make it easier to reuse boards, TT advocates to use common pinouts wherever possible. If your design uses the same pinout as some of the other designs, it is much easier to connect external hardware or create custom boards that are suitable for those designs.

The use of common pinouts is not mandatory, but is recommended since TT is a community shuttle. Feel free to deviate from the recommendations where it is necessary for your design. If you use a protocol or Pmod not listed here, please make a proposal on the Discord server.

# Common Peripherals

## UART to USB

If you want to interact with your design over serial console you can do this via the builtin RP2040 on the demo board. This way you can connect the demo board via USB and send/receive data from your chip.

ui_in[3]  - RX\
uo_out[4] - TX

## VGA Output

![Tiny VGA](images/tiny_vga.jpg)

For VGA output it is recommended to use the pinout for [Tiny VGA](https://github.com/mole99/tiny-vga). The board is open source and uses only one Pmod so that you can still use the bidirectional Pmod or something else.

Even if you plan on designing your own carrier board it makes sense to use the pinout from Tiny VGA so that others can try your design.

Note: Tiny VGA may be available to buy from Tiny Tapeout at a later date. For now it is possible to build the board yourself.

Pinout:

uo_out[0] - R1\
uo_out[1] - G1\
uo_out[2] - B1\
uo_out[3] - vsync\
uo_out[4] - R0\
uo_out[5] - G0\
uo_out[6] - B0\
uo_out[7] - hsync

## SPI RAM

The RP2040 on the demo board can be configured to provide RAM to the chip over SPI thanks to [spi-ram-emu](https://github.com/MichaelBell/spi-ram-emu/).

Pinout:

uio[0] - GPIO21 - CS\
uio[1] - GPIO22 - MOSI\
uio[2] - GPIO23 - MISO\
uio[3] - GPIO24 - SCK

This maps to the standard SPI pinout for Pmods, which means a PSRAM Pmod could be used as a drop-in replacement.

#  Common Protocols (SPI, I2C and UART)

If you want to implement protocols that do not specifically target any Pmod we suggest to use the pinout for I2C, SPI and UART from the [Pmod specification](https://digilent.com/reference/_media/reference/pmod/pmod-interface-specification-1_2_0.pdf)

## SPI

SPI uses CS, MOSI, MISO and SCK and therefore requires only one row of pins of the Pmod connector, preferably the upper row. Since standard SPI has to send and receive, the bidirectional Pmod is used:

Top row:

uio[0] - CS\
uio[1] - MOSI\
uio[2] - MISO\
uio[3] - SCK

Bottom row:

uio[4] - CS\
uio[5] - MOSI\
uio[6] - MISO\
uio[7] - SCK

If your design only receives data or only sends data via SPI, you can choose to omit MOSI or MISO and use the output only or input only Pmod.
SPI - dual I/O and quad I/O

See: https://digilent.com/reference/pmod/pmodsf3/start

uio[0] - CS\
uio[1] - MOSI\
uio[2] - MISO\
uio[3] - SCK\
uio[4] - NC\
uio[5] - RST\
uio[6] - WP\
uio[7] - HLD

## UART (optional hardware flow control)

UART uses TXD and RXD and optionally CTS and RTS. Only one row of the Pmod connector is used, preferably the upper row:

Top row:

uio[0] - (CTS)\
uio[1] - TXD\
uio[2] - RXD\
uio[3] - (RTS)

Bottom row:

uio[4] - (CTS)\
uio[5] - TXD\
uio[6] - RXD\
uio[7] - (RTS)

If your design is receive only or send only, you can choose to omit TXD or RXD and choose to use the output only or input only Pmod.

## I2C (optional interrupt and reset)

The pinout for I2C uses SCL and SDA and optionally INT and RESET for interrupts and reset. Only one row of the Pmod connector is used, preferably the upper row:

Top row:

uio[0] - (INT)\
uio[1] - (RESET)\
uio[2] - SCL\
uio[3] - SDA

Bottom row:

uio[4] - (INT)\
uio[5] - (RESET)\
uio[6] - SCL\
uio[7] - SDA
