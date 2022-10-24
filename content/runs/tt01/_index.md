---
title: "Tiny Tapeout 01"
weight: 10
description: Our first trial run
---

{{% toc %}}

# Design details

* [Github repository](https://github.com/mattvenn/tinytapeout-mpw7)
* [PDF datasheet](/tt01.pdf)
* [How the scan chain works, pinout, tech details](https://github.com/mattvenn/tinytapeout-mpw7/blob/mpw7/INFO.md)
* [Verification](https://github.com/mattvenn/tinytapeout-mpw7/blob/mpw7/verification.md)
* [Efabless MPW submission is here](https://platform.efabless.com/projects/1229)

# Launch stats

* Launched: 2022-08-17
* Submission closed: 2022-09-01
* Submitted to Efabless 2022-09-05 for the MPW7 shuttle using Skywater 130nm open source PDK

# Community stats (as of 2022-09-05)

* Discord: 206 members
* Website 17k visits, 430 link clicks
* Mailing list: 380 subscriptions
* Twitter: 300k impressions

# Press

* [Adafruit](https://blog.adafruit.com/2022/08/31/tinytapeout-making-it-easier-to-get-a-chip-design-manufactured-tinytapeout-matthewvenn/)
* [Hackernews](https://news.ycombinator.com/item?id=32617620)
* [eenews](https://www.eenewseurope.com/en/tinytapeout-boost-for-open-source-silicon-chip-design/)

# Project statistics

* 152 projects submitted. Each project is 100um x 100um
* 100 people willing to pay $100 for the chip mounted on a PCB.
* 115 used Wokwi graphical editor, 31 Verilog, 3 XLS, 2 Chisel, 1 Amaranth
* 15k standard cells used across all projects.
* Most cells used in a design was 600, the least was 14.
* Total wire length 772 mm.

# Images

## Whole die

![whole die](images/whole_die.png)

## Render of whole die

![render](images/render.png)

By [Maximo Balestrini](https://twitter.com/maxiborga)

## Zoom on 6 individual designs

![zoom](images/zoom.png)

Click to launch an interactive GDS [Viewer automatically created by the Github Action](https://proppy.github.io/tinytapeout-xls-test/) 

# Project Showcase

We had several methods for submitting to Tiny Tapeout, the Wokwi graphical version, and HDL support for Verilog, Chisel, Amaranth etc.

## Wokwi projects

* [LFSR](https://wokwi.com/projects/341344337258349139)
* [PopCount](https://wokwi.com/projects/340285391309374034)
* [RGB LED driver](https://wokwi.com/projects/341188777753969234)
* [BCD counter](https://wokwi.com/projects/341296149788885588)

## HDL projects

* [4bit CPU](https://github.com/tommythorn/tinytapeout-4-bit-cpu)
* [6bit CORDIC](https://github.com/sfmth/tinytapeout-tinycordic)
* [Ring oscillator research test](https://github.com/BarsMonster/MicroASICV)
* [FPGA](https://github.com/gatecat/tinytapeout-fpga-test)

# Selected community contributions

* [Overview video](https://twitter.com/bovensiepen/status/1563600293472141313) 
* [Animated GDS exploded view](https://twitter.com/ChrisPVille/status/1565566061814185984)
* [3D renders](https://twitter.com/maxiborga/status/1565081697057660928)

# Testimonials / Endorsements

I want to change my VLSI class in the spring (April-June) to utilise your tiny chip infrastructure. If I could say every student in my class got something made, that would be awesome.

---
I teach digital design in UAE and would be keen to get in contact and learn about the next submission date where my students could submit their test structures for tapeout.

---
I am a CS and EE teacher and in my final year as a PhD student at the University of South-Eastern Norway (USN). Since we teach courses on both digital and analog electronics, I thought it would be a great opportunity for students to materialise their work.

---
Built a CRC logic for the http://tinytapeout.com of @matthewvenn with my son. Looking forward if the tapeout happens 🥰 Yet either way, the workflow is astonishing. CI/CD for chip design 🤯

---
Thank you for doing it - I always wanted to join these OpenMPW shuttles, but never felt ready for it. TinyTapeout provided a way for me to get in, while only spending 1 evening of effort on my end. That's amazing! 

---
Just made a 4-bit barrel shifter by using this http://tinytapeout.com toolkit. It's quick and fun to use. The GDS even generated within minutes. Everyone should try this.

---
More on [Twitter](https://twitter.com/search?q=tinytapeout).
