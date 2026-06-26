---
title: TT02 Premiere - Silicon Bring-up
description: World's first live open-source silicon bring-up
author: Tiny Tapeout Team
date: "2023-10-21"
type: news
tags: ['milestone']
layout: single
cover:
    image: images/live.jpg
    alt: Youtube Live
---

With the [TT02](/chips/tt02) chips finally back from the factory, Matt Venn hosted what we believe is the **world's first** live open-source silicon bring-up on [YouTube](https://www.youtube.com/live/MtnDSDFZuag), joined by Uri Shaked and Pat Deegan.

**No magic smoke.** Powering up the board for the first time drew 33.9 milliamps at 3.3V - well within range. Caravel flashed successfully and GPIO blinking worked straight away. Yus!

From there, the team worked through the bring-up methodically. 

The external scan chain required grounding pin 8 (likely a missing pull-down), after which the scan chain clock delay measured at 124ns on the rising edge and 163ns on the falling edge. Clock speeds of 1 MHz and 5 MHz worked cleanly; at 10 MHz the signal started to round, but adjusting the duty cycle got it working. 20 MHz also appeared to work. The internal scan chain test showed 2.5 kHz pulses with 100µs pulse widths.

Then came the designs:

- Inverter (first design) - works!
- Design [156](/chips/tt02/user_module_340805072482992722) - counted from 4 to 9 instead of 0 to 9, possibly due to setup/hold violations
- Design [157](/chips/tt02/seven_segment_seconds) - works as expected
- Design [103](/chips/tt02/user_module_341279123277087315) - works
- Clock divider - works
- bitLuni's Persistence of Vision design [138](/chips/tt02/option23) - inconclusive
- bitLuni's "Secret File" ([145](/chips/tt02/secretFile)) - outputs some bits; left as an exercise to the viewers
- Luca's design ([144](/chips/tt02/logisim_demo)), built in Logisim Evolution, clocked at 2 Hz - success!
- Luca's LCD display design ([56](/chips/tt02/tt2_tholin_namebadge)) - after a long battle with the contrast, eventually got it working on screen


Thanks to [Efabless](https://chipfoundry.io/efabless) for sponsoring the project and to [Aisler](https://aisler.net/en) for sponsoring the PCBs and fulfilment. All TT02 boards will be made, assembled, and shipped by Aisler.

{{< youtube MtnDSDFZuag >}}