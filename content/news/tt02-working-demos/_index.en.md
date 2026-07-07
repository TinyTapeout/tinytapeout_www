---
title: TT02 working demos
description: Showcasing the TT02 community designs
author: Tiny Tapeout Team
date: "2023-11-16"
type: news
tags: ['milestone']
layout: single
cover:
    image: images/header.jpg
    alt: Tiny Tapeout 2 working demos!
---

Following the success of the [TT02](/chips/tt02) silicon bring-up, we put together a showcase [video](https://youtu.be/psR2ax-LScc?si=hxVJW7iEwUZrGF7-) running through some of the community designs in action.

Thomas's [pseudo-random number generator](/chips/tt02/086), built in Wokwi, produces a fresh random output every time you press the button. 

Tim Victor's ["worm in a maze"](/chips/tt02/084) animation shows a little worm navigating its maze once given a clock signal. 

William's [M0 a 16-bit subtle microprocessor](/chips/tt02/039) written in Verilog, was tested without external ROM and RAM, but the I/O activity showed it attempting to read from ROM to boot.

One of the standout demos: [project 36](/chips/tt02/036) calculates pi and prints it to the display digit by digit, starting with 3.14159 after reset.

Tholin, who holds the record for most submissions to a single Tiny Tapeout run with six designs, contributed a [dice-roll random number generator](/chips/tt02/061) using a linear feedback shift register, complete with a spinning animation that slows to a stop. 

[Project 68](/chips/tt02/068) is a PWM project producing a triangle wave and a breathing LED animation. And Tholin's TT02 [LCD name tag](/chips/tt02/056), a 20×4 character LCD design, displays a personal message on its second page.

The community has already proven these designs work on real silicon!

As [@bitluni](https://x.com/bitluni) put it: "Custom ASIC achievement unlocked! Just got the hands on the ASIC #HackadaySupercon and proved that my POV controller on tt02 works! I'm 🤩🤯🥹🤖❤️"

{{< figure src="images/bitluni.jpg" title="@bitluni" >}}

Want to see more? Browse the full [TT02 project list](/chips/tt02) or watch the showcase video on [YouTube](https://youtu.be/psR2ax-LScc?si=hxVJW7iEwUZrGF7-).

{{< youtube psR2ax-LScc >}}