---
title: TTIHP26a wrap up!
description: 96.4% Utilization, 200+ Projects
author: Tiny Tapeout Team
date: "2026-03-26"
type: news
tags: ['shuttle']
layout: single
cover:
    image: images/tt_um_kianv_sv32_soc.png
    alt: KianV SV32 TT Linux SoC by Hirosh Dabui & Uri Shaked
---

[TTIHP26a](/chips/ttihp26a) is a wrap! 

At 96.4% utilization with over 200 projects, this chip is packed to the brim. 

Shout out to our three favorites:

### 🥇 Bernstein-Yang Modular Inverse (secp256k1) by Corey Hahn

{{< figure src="images/tt_um_corey.png" title="by Corey Hahn" >}}

A specialized [Bitcoin accelerator](/chips/ttihp26a/tt_um_corey). It computes 256-bit modular inverses over the secp256k1 prime using the Bernstein-Yang divstep algorithm, completing a typical operation in just 335 clock cycles. 

The design includes parity error detection on both input and output, pipelined input loading so you can feed the next operand while the first is still computing, and four output modes including performance counters and a true random number generator using three ring oscillators with Von Neumann debiasing to produce unbiased random bytes. 

The documentation walks through every step precisely, including the pipelined operation flow.

### 🥇 KianV SV32 TT Linux SoC by Hirosh Dabui & Uri Shaked

This is a complete [Linux system on chip](/chips/ttihp26a/tt_um_kianv_sv32_soc). It's a RV32IMA RISC-V processor with an SV32 MMU doing full two-level page table translation, separate instruction and data TLBs (8 entries each), 512-set direct-mapped I/D caches backed by IHP SG13G2 SRAM macros. 

The system includes 32 MiB QSPI PSRAM across four banks, 16 MiB SPI NOR flash, and UART/SPI/GPIO peripherals for an IPv4/IPv6 ethernet controller. It boots mainline Linux (including Linux 7.0!), and also runs µLinux and xv6. The full memory map and all peripheral registers are documented. Better yet, a pre-built system image is provided so you don't need to build the toolchain yourself.

### 🥇 Glitcher by Philip Å.

{{< figure src="images/glitcher.png" title="by Philip Å" >}}

A configurable fault injection [pulse generator](/chips/ttihp26a/tt_um_pakesson_glitcher) for hardware security research. Controllable over UART at 115,200 baud, it's designed for voltage and electromagnetic glitching attacks against microcontrollers. 

Every parameter is adjustable at 20 ns timing resolution: delay (up to 1.31 ms), pulse width (up to 5.10 µs), pulse count, inter-pulse spacing, and target reset duration. Three reset modes (Pulse, Arm, None) support different attack workflows. 

The documentation is remarkable, written to the level of a product datasheet with full UART protocol spec, four oscilloscope captures taken on real hardware, working MicroPython REPL examples, and acknowledgements to the real hardware security community.

Check out the project's [datasheet](https://tinytapeout.github.io/tinytapeout-ihp-26a/datasheet.pdf) with the rest of the designs.

Big thanks to [SwissChips](https://swisschips.ethz.ch/) for sponsoring the shuttle and to [IHP](https://www.ihp-microelectronics.com/) for manufacturing!
