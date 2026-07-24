---
title: Wafer.space - new silicon fabrication partner
description:  Tim Ansell launches wafer.space and fills critical gap after Efabless shutdown.
author: Tiny Tapeout Team
date: "2025-09-26"
type: news
tags: ['partnership']
layout: single
cover:
    image: images/header.jpg
    alt: Tiny Tapeout - wafer.space
---

Matt Venn sat down with Tim Ansell on [The Amp Hour](https://theamphour.com/703-building-wafer-space-with-tim-ansell/) who started [wafer.space](https://wafer.space/), a new Singapore-based wafer sharing service that's stepping in to fill a critical gap in the open source silicon ecosystem.

After [Efabless](https://chipfoundry.io/efabless)'s shutdown in early 2025, the community lost its primary manufacturing pathway for low-volume chip production. Wafer.space restores that access, but at a different price point and with different tradeoffs.

### What Does It Cost?
Here's what makes wafer.space different: for $7,000, you receive 1,000 finished chips. That's a huge number compared to traditional chip manufacturing, where you'd pay tens of thousands for much smaller quantities. To put it in perspective, other open source silicon services at similar price points only deliver about 30 chips. Wafer.space gives you 35x more!

Each chip is tiny: 3.8 × 5 millimeters (about the size of a grain of rice). They arrive as bare die, which means they're not packaged in the black plastic rectangles you see in traditional ICs. Tim Ansell is currently working with PCB manufacturers to offer chip-on-board wire bonding, a way to mount them directly onto circuit boards for under $2 per chip, which is far cheaper than sending them to traditional packaging facilities.

### Why This Matters

GF180MCU is cheaper than SkyWater's 130nm process because it's manufactured by one of the world's largest foundries in Singapore. The cost structure is straightforward: divide a wafer run by 40 slots, and the price comes down substantially.

Tiny Tapeout is currently working on porting support for GF180MCU, which will eventually let designs flow directly from Tiny Tapeout into wafer.space production. That integration is coming soon.

### Getting Started

If you're new to chip design, Tiny Tapeout's click-and-drag tools like [SiliWiz](https://app.siliwiz.com/) are the perfect starting point. Matt has previously discussed how these visual tools make chip design accessible to anyone.

For more advanced work, designers can use Verilog or VHDL for coding-style designs, or KLayout and Magic for drawing shapes - similar to PCB design tools. 