---
title: Mini MOSBius
description: MOSBius-style chip in a 3x2 Tiny Tapeout slot, now available on every Sky130 shuttle.
author: Matt Venn
date: "2026-06-01"
type: news
layout: single
cover:
    image: images/thumbnail.png
    alt: Circuit layout render of the Mini MOSBius
---

MOSBius is a fantastic, practical tool for learning the fundamentals of analog microelectronics. Simulation is one thing,
getting hands on with mosfets and a scope is something else!

Inspired by [Peter Kinget's MOSBius project last year](https://www.youtube.com/watch?v=abu3u6UX6wE), we commissioned
Andrew Kang to create a smaller version for Tiny Tapeout - Mini MOSBius!

It's like an FPGA, but for learning analog electronics. Instead of lookup tables we have the basic building blocks of
analog circuits: transistors, current mirrors, differential pairs and an opamp.

In this post I'll explain how it works by creating and testing 2 circuits: an inverter and an SR latch.

## Adjustable Inverters

Let's start with one of the simplest and well known 2 transistor building blocks, the humble inverter. We can use
[Sylvain Munaut's configurator](https://people.osmocom.org/tnt/stuff/tt/mosbius.html) to make the connections and get
the bitstream.

{{< figure src="images/minimosbius-configurator-ui.png" title="Mini MOSBius Configurator UI" >}}

The red dots are showing where the transmission gates are active, creating nodes in the circuit. The 2 dots in the center
are connecting the split buses so that I can use `ua[4]` as an input and `ua[5]` as an output.

{{< figure src="images/inverter-schematic.png" title="Inverter schematic" >}}

Injecting a 1kHz input (green) and we get our inverted (in blue) signal output.

{{< figure src="images/inverter-scope-1.png" title="Oscilloscope output showcasing inverter behaviour" >}}

Zooming in we can see that the inverter has about a 50ns rise time. Let's see if we can steepen it by using a wider
mosfet.

{{< figure src="images/inverter-scope-2.png" title="~50ns rise time for this configuration" >}}

Setting it to 4 we get around 25ns. An easy experiment that drives home both that P mosfets are weaker than N mosfets,
and one way to compensate is by increasing their width.

{{< figure src="images/inverter-scope-2.png" title="~25ns rise time with a wider mosfet" >}}

## Watching Metastability

Metastability is the unwanted behaviour of a latch or flip flop that goes on to cause dreaded hold violations.
Metastability is when your circuit takes much longer than expected to settle to a steady state, which then ripples
through your design causing havoc. If your circuit suffers from metastability, it could cost you a whole new tapeout!
If you want to learn more about hold violations and watch a video - check out this article about
[static timing analysis](https://www.zerotoasiccourse.com/terminology/sta/).

The circuit is an SR (set/reset) latch built from 6 transistors - 2 inverters and 2 N mosfets. This time I'm using another
feature of Mini MOSBius - a external current reference to weaken the P mosfets. This makes it easier for the set and
reset N mosfets to force the output low.

{{< figure src="images/sr-schematic.png" title="SR schematic" >}}

Pulsing input 5 high, the output goes high (set) and pulsing input 2 high the output goes low (reset).

By applying a 1kHz pulse on the set, and a 1.01kHz pulse on the reset we can phase the reset signal slowly through
the set pulse. As the circuit goes metastable, we see the blue output of the circuit sometimes takes a lot longer to
settle than usual. Each faint blue line shows a metastable event.

{{< figure src="images/sr-metastability.png" title="Observed metastability of the SR circuit - each faint blue line is a metastable event" >}}

It's been great to get hands on and verify Mini MOSBius. We just had a great group call with the Zero to ASIC course -
participants were able to discuss a circuit and try modifications on the fly.

But the most exciting part is that Mini MOSbius is now included on all our future Tiny Tapeout Sky130 based chips, so
along with your own design you'll get a fully featured analog playground to tinker with.
