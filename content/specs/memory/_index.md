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

#### Using pregenerated SRAM macros

IHP has several variations of SRAM macros which can be used in shuttles which they will manufacture (i.e. specifically
being taped out with their PDK). One of these macros, 1024x8, has been successfully taped out and tested to be working -
read more about it in the [ttihp0p2 SRAM (1024x8) test project datasheet](https://www.tinytapeout.com/chips/ttihp0p2/tt_um_urish_sram_test).

<!-- tile size reference for ihp: https://github.com/TinyTapeout/tt-support-tools/blob/b4a9e6c7eabfdd6dee7460a163a0aec271b06bac/tech/ihp-sg13g2/tile_sizes.yaml -->

| SRAM Macro | Physical dimensions <br> (width x height) (µm) | Area (µm²) | Minimum tile size required | Area consumption | Approximate density (bits per tile) |
| :-------------------- | :----------------- | :-------- | :- | :- | :- |
| 256x8 (single port)   | 74.325 x 236.800   | 17600.16  | 1x2 | 27.8% | ~3680  |
| 256x8 (dual port)     | 137.190 x 278.510  | 38208.79  | 1x2 | 60.3% | ~1670  |
| 512x8 (single port)   | 110.605 x 236.800  | 26191.26  | 1x2 | 41.3% | ~2480  |
| 512x8 (dual port)     | 219.990 x 261.170  | 57454.79  | 2x2 | 43.7% | ~2340  |
| 1024x8 (single port)  | 146.880 x 336.685  | 49452.29  | 1x2 | 78.0% | ~10500 |
| 256x16 (single port)  | 119.005 x 236.800  | 28180.38  | 1x2 | 44.4% | ~4610  |
| 256x16 (dual port)    | 137.190 x 419.950  | 57612.94  | 3x4 | 12.7% | ~2690  |
| 512x16 (single port)  | 191.565 x 236.800  | 45362.59  | 1x2 | 71.5% | ~5730  |
| 512x16 (dual port)    | 219.990 x 402.610  | 88570.17  | 3x4 | 19.6% | ~3480  |
| 64x32 (dual port)     | 75.090 x 702.830*  | 52775.50  | 3x4 | 11.7% | ~1460  |
| 256x32 (single port)  | 119.005 x 416.640  | 49582.24  | 3x4 | 11.0% | ~5830  |
| 256x32 (dual port)    | 137.190 x 702.830  | 96421.25  | 3x4 | 21.3% | ~3200  |
| 512x32 (single port)  | 191.565 x 416.640  | 79813.64  | 3x4 | 17.6% | ~7760  |
| 512x32 (dual port)    | 219.990 x 685.490  | 150800.95 | 3x4 | 33.3% | ~4100  |
| 1024x32 (single port) | 336.685 x 416.640  | 140276.44 | 3x4 | 31.0% | ~8810  |
| 1024x32 (dual port)   | 385.590 x 685.490  | 264318.09 | 3x4 | 58.4% | ~4680  |

\* = estimated dimensions

The table above is not exhaustive - you should visit IHP's PDK repository to see their [SRAM macros](https://github.com/IHP-GmbH/IHP-Open-PDK/tree/main/ihp-sg13g2/libs.ref/sg13g2_sram/gds).

For SkyWater shuttles, the density of memory macros is significantly lower. There is an experimental 32x32 register file
created by Sylvain Munaut which has a density of 1200 bits per tile - see the [datasheet for more information](https://tinytapeout.com/chips/ttsky25b/tt_um_tnt_rf_validation).

#### Using external SPI RAM

The RP2040 on the [demo board](../pcb) can be configured to provide 64 kbytes of RAM to the chip over SPI thanks to the [spi-ram-emu project](https://github.com/MichaelBell/spi-ram-emu) by Mike Bell. It simulates the 23LC512 SPI RAM chip. This is a good option if you need a lot of memory, but it's also the slowest option.

#### Using QSPI Pmod

The QSPI Pmod, made by mole99 and Mike Bell, is an expansion card [available for purchase](https://store.tinytapeout.com/products/QSPI-Pmod-p716541602)
which provides external memory to your project via the Pmod connectors. It contains a 128Mb flash chip and two 64Mb PSRAM chips.
The [KianV µLinux SoC](https://tinytapeout.com/chips/tt06/tt_um_kianV_rv32ima_uLinux_SoC) make use of the Pmod to
provide additional storage space for the processor.

You can view the schematics on GitHub too: [github.com/mole99/qspi-pmod](https://github.com/mole99/qspi-pmod)