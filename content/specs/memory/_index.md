---
title: Memory
description: 'Memory for Tiny Tapeout projects'
weight: 30
---

### Memory

If your design needs memory, you have the following options:

1. Use registers (DFF) in your design area
2. Use DFF RAM (efficient array of DFFs)
3. Use an external SPI RAM (can be simulated by the RP2040 on the demo board)

#### Using registers

The simplest way to store data is to use registers. It's also very flexible: you can use as many as you want and you can read / write from them at any time. The downside is that they are not very efficient in terms of area.

As a rule of thumb, you can fit about 320 DFFs (40 bytes of memory) in a single tile. Since your design will also need some logic, you will probably be able to fit less than that.

Here are a few examples of projects that use registers as memory:

- [Register based 32 byte RAM](https://github.com/TinyTapeout/tt06-256-bits-dff-mem) - uses 264 DFFs (32 bytes of memory + 8 bits for the output register), and utilizes 70% of the tile area.
- [Simon Says game](https://github.com/urish/tt06-simon-game) - uses 188 DFFs for the game state, and utilizes 76% of the tile area (for both logic and memory)

#### Using latch-based memory

Latches are more area-efficient than registers, but they are also more complex to use. We've seen people fit as many as 512 bits into a single Tiny Tapeout tile. Check out the [64 byte latch-based memory example from Michael Bell](https://github.com/MichaelBell/tt06-memory/blob/main/docs/info.md) for more details (the example uses 88% of a single tile area).

#### Using DFF RAM

The [DFF RAM compiler](https://github.com/AUCOHL/DFFRAM) creates a dense array of DFFs that can be used as memory. It's more efficient than using registers, but it's also less flexible: you can only read / write one address at a time, and there are only a few sizes available.

For Tiny Tapeout, you can use the RAM32 macro, which is 128 bytes arranged as 32x32 bits (32 words of 32 bits each) with a single read/write port (1RW). This macro uses an area of 401 x 136 um, which fits in 3x2 tiles and uses about 54% of the area.

Including DFF RAM in your design is a bit more complicated than using registers, as connecting the power and ground pins is not trivial. You can use the [DFF RAM example project](https://github.com/TinyTapeout/tt06-dffram-example) as a starting point.

#### Using external SPI RAM

The RP2040 on the [demo board](../pcb) can be configured to provide 64 kbytes of RAM to the chip over SPI thanks to the [spi-ram-emu project](https://github.com/MichaelBell/spi-ram-emu) by Mike Bell. It simulates the 23LC512 SPI RAM chip. This is a good option if you need a lot of memory, but it's also the slowest option.
