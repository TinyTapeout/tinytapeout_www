---
title: Demoscene
tags: [competition]
description: "Build a sound and graphics demo in less than 161 x 225 microns of 130nm ASIC"
weight: 10
---

## Demoscene competition!

{{< youtube tycS0vGcZIY >}}

The [home computer demoscene](https://en.wikipedia.org/wiki/Demoscene) has resulted in some amazing feats of hacking and pushing hardware to its limits.

The Tiny Tapeout demoscene competition sticks to the same audio/visual output format, but instead of using an existing computer, you create your own ASIC hardware!

All entrants will receive 1 free tile for their design.

All entrants who also purchase the [demoboard](/specs/pcb) will get a free [VGA](https://github.com/mole99/tiny-vga) and [Audio](https://github.com/MichaelBell/tt-audio-pmod) PMOD expansion module!

## What are the rules?

* 2 tiles or less.
* VGA pinout following [Leo's VGA PMOD pinout](https://github.com/mole99/tiny-vga)
    * your VGA timing should follow something from [http://www.tinyvga.com/vga-timing](http://www.tinyvga.com/vga-timing) or [https://tomverbeure.github.io/video_timings_calculator](https://tomverbeure.github.io/video_timings_calculator) 
    * The following projects have all been tested and work with one judge’s panel:
        * [Flappy VGA](https://tinytapeout.com/runs/tt05/134)
        * [VGA experiments](https://tinytapeout.com/runs/tt05/334)
        * [VGA dino game](https://tinytapeout.com/runs/tt05/458)
        * [VGA SPI ROM](https://tinytapeout.com/runs/tt05/645)
        * [One sprite pony](https://tinytapeout.com/runs/tt05/326/)
* Audio pinout following [Mike's audio PMOD pinout](https://github.com/MichaelBell/tt-audio-pmod). 
    * Mike has an [example project here](https://github.com/MichaelBell/tt08-pwm-example) that creates a sine wave on the audio output pin.
* No other hardware required.
* Start up sequence using the commander app:
    * Enable the project,
    * Judges will read the datasheet to understand how to set the inputs and clock,
    * Reset.
* Must be submitted to TT08 (closes September 6th).
* Entrants can submit multiple designs.

## Categories

* Newcomer - TT08 must be your first tapeout on Tiny Tapeout,
* Best sound track,
* Best single tile design,
* Best graphics,
* Most impressive for the size,
* Rulebreaker - example using more than 2 tiles, using RP2040 for something. be aware that judges must be able to test your design with no additional hardware,
* Mixed signal - uses some analog in the design,
* Most useful design,
* Secret category announced 1 week before the deadline!

## How to enter

* Once your design is passing the GitHub actions, submit it to the [competition form](https://forms.gle/WtNjEgWybs3vCQPF9) before the closing date of 6th the September.
* Once submitted to the form, we will send you a coupon within 48 hours for a free tile on TT08.
* You must also submit your design to the shuttle at [app.tinytapeout.com](https://app.tinytapeout.com).

## How to get help

* Discuss on the [competition channel](https://discord.com/channels/1009193568256135208/1259420274445516891) discord community channel. Join the [discord here](/discord)
* [Quick start VGA graphics at the VGA playground](https://tinytapeout.github.io/vga-playground/)
* [Audio output demo](https://github.com/MichaelBell/tt08-pwm-example)
* [Bitmap Fonts](https://github.com/ianhan/BitmapFonts)

## Prizes

![prizes](images/demoscene_prizes.png)

* All entrants who purchase the demoboard will get free [VGA](https://github.com/mole99/tiny-vga), [audio PMODs](https://github.com/MichaelBell/tt-audio-pmod) and a sticker pack.
* Winners of each category will receive combinations of:
    * Matt’s first ASIC die mounted in an epoxy cube, numbered and signed,
    * ASIC baseball caps,
    * Free tiles for future tapeouts,
    * Silicon wafers,
    * Previous TT chips.

## Judges

We have some fantastic judges lined up:

* Bitluni - best known for his [youtube channel](https://www.youtube.com/channel/UCp_5PO66faM4dBFbFFBdPSQ) showcasing his [hacks](https://youtu.be/muuhgrige5Q?si=h7A-GAaD8sdKA_Qy) and [investigations](https://youtu.be/z4uxC7ISd-c?si=VUvGwlB5MwNviq_d), Luni has also made the [best chip ever](https://youtu.be/DdF_nzMW_i8?si=F1zM9HOBrpG6yZhO) on Tiny Tapeout and started his computer journey in the demoscene.

* cnlohr - famed for squeezing [incredible amounts of functionality into the tiniest devices](https://youtu.be/j-QazXghkLY?si=v0-jduEzJHjFaqXS), he most recently persuaded a 10 cent microcontroller to [transmit LORA](https://youtu.be/eIdHBDSQHyw?si=dQ4GrKh07SfiKPnR)!

* Sprite_tm - legendary hacker who brought us the [Vectrex multi cart](https://spritesmods.com/?art=veccart), ported [Doom to a Rigol scope](https://github.com/Spritetm/prboom-mso5k) and made the [Hackaday FPGA Gameboy badge](https://hackaday.com/2020/02/19/machine-inside-of-a-chip-how-sprite_tm-built-the-fpga-game-boy-badge/).


## Small print

1. How will the competition be judged? A panel of appointed judges will vote and have the final say. The submissions will be judged on the results the judge gets on their boards.
2. Will there be any extension to the deadline? No, it’s September 6th.
3. You can change the documentation used by the judges up to the point of judging the design. Any changes must be submitted to the chip datasheet by pull request to the GitHub repository.
4. When will the competition be judged? 2 weeks after 75% of the boards have been received by entrants (estimated June 2025).
5. Your design must not depend on any other hardware.
6. You are not limited to a maximum clock frequency, but if the judges can’t get the design to work (because their ASIC is slower for example) then you run the risk of not qualifying. You are advised to use ~80MHz or less.
7. You are advised to stick with a standard VGA timing, if it doesn’t work on the judge’s display you run the risk of not qualifying.
