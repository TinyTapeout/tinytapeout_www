---
title: TT04 Launch Webinar
description: Featuring Uri Shaked and special guest, Pat Deegan
author: Tiny Tapeout Team
date: "2023-06-23"
type: news
tags: ['shuttle']
layout: single
cover:
    image: images/image.jpg
    alt: Matt & Uri
---

We hosted the [TT04](/chips/tt04/) launch event live on StreamYard, with Matt Venn joined by special guests Uri Shaked and Pat Deegan. 

If you missed it, here's what we covered.

### The Biggest Change: Scan Chain Is Out

[TT03](/chips/tt03/) used a scan chain, which meant all 250 designs connected in one giant shift register. Every input update required 4,000 bit shifts. It was simple to build, but slow.

For [TT04](/chips/tt04/), we've replaced it with a multiplexer architecture. Uri walked us through how it works: a central controller connects to 24 mux branches via a spine, distributing signals directly to your design with almost no sequential logic in the way. Wowza. The result is around three orders of magnitude faster than before.

We already tested this with [TT03.5](https://github.com/TinyTapeout/tinytapeout-03p5), an experimental shuttle with only 32 designs. We expect to have the chips back in October 2023.

### More Space = More Pins = More Fun

Designs can now be up to 16 tiles in size, up from a fixed one tile before. We've also added eight bi-directional pins on top of the existing eight input and eight output pins, plus dedicated clock and reset pins.

### New Submission Process

Uri demoed the new submission app. You sign in with your GitHub account, submit your repo URL, and the system runs automated checks on your design. Unlike previous shuttles, you control when your design gets pulled. You just hit "pull project" in the web UI whenever you're ready. Easy peasy. Submissions open next week. Submissions close on the 8th September.

### PCB Update
{{< figure src="images/mp.jpg" title="Matt and Pat" >}}

Pat Deegan joined and walked through the new demo PCB. It supports four ways of interacting with the chip: manual input via DIP switches with a built-in seven-segment display, Pmod headers for external modules, breadboard-friendly headers, and an optional Raspberry Pi Pico for programmatic access. The schematic is on the Tiny Tapeout [Discord](https://discord.com/channels/1009193568256135208/1015911926053740544).

### Pricing

We're targeting $100 per design: $50 for the PCB and $50 for the chip slot. Each additional tile costs $50. You can also buy extra design slots separately, which helps reduce costs for workshops and classrooms.

### Design Inspiration

Matt and Uri highlighted some favourite designs from [TT02](/chips/tt02/) and [TT03](/chips/tt34/): an FPGA, an 8-bit CPU, a PDP8, Pat's guitar tuner, a synthesizable digital temperature sensor built from standard cells, and a Super Mario tune player. Uri also submitted a VGA clock to TT03.5 using just two tiles.

### Discount Code Giveaway

They ended the stream doing a live raffle. The winners of the draw received $50 vouchers for [TT04](/chips/tt04/) submissions. Wahey! 

We'll make sure to do more live launch webinars in the future! Stay tuned!


{{< youtube BuaXUdk-E3w >}}
