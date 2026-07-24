---
title: TT08 chip-on-board (COB) arrives
description: 135 designs wire-bonded and ready. First tests show working silicon.
author: Tiny Tapeout Team
date: "2025-11-13"
type: news
tags: ['shuttle']
layout: single
cover:
    image: images/header.jpeg
    alt: TT08 cob
---

Our [TT08](/chips/tt08) chips are looking lovely on the new COB (chip-on-board)!

The bare dies are now mounted and wire-bonded, thanks to Tamas for the board design and update, and Stuart for getting them bonded. The boards look fantastic! You can see the intricate wire bonds connecting each chip to the PCB traces.

{{< figure src="images/board.jpeg" title="TT08" >}}

### The Silicon Works

TT08 contains [135 designs](https://tinytapeout.github.io/tinytapeout-08/datasheet.pdf), and the first tests are in. 

[@tnt4all](https://x.com/tnt4all) made a [video](https://www.youtube.com/shorts/5IY0oWwgauY) showing one of the designs working as a bad photo transistor — using the silicon itself as a light detector. That's the kind of creative testing that makes these chips so much fun!

{{< youtube 5IY0oWwgauY >}}

Mike Bell created a [VGA Mandelbrot](/chips/tt08/tt_um_MichaelBell_mandelbrot) set renderer: a real-time fractal engine running on actual silicon. 

{{< figure src="images/figure 884.1.png" title="The Mandelbrot set" >}}

That, alongside [VGA games](/chips/tt08/tt_um_2048_vga_game), [audio synthesizers](/chips/tt08/tt_um_meriac_play_tune), [RISC-V cores](/chips/tt08/tt_um_yuri_panchul_schoolriscv_cpu_with_fibonacci_program), and countless other experiments from makers and students worldwide, make the diversity of designs on this chip remarkable.

Hundreds of open source silicon designs are now on this chip. Browse all the designs [here](/chips/tt08).