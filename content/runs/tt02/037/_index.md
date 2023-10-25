---
hidden: true
title: "37 Siren"
weight: 38
---

## 37 : 0b 000 100 101 : Siren

{{< tt-scanchain-switches "000100101" >}}

* Author: Alan Green
* Description: Pretty patterns and a siren straight from the 1970s
* [GitHub repository](https://github.com/alanvgreen/tt02-siren)
* [Most recent GDS build](https://github.com/alanvgreen/tt02-siren/actions/runs/3458952591)
* [Wokwi](https://wokwi.com/projects/348242239268323922) project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: For the audio output on pin 7, either use an audio amplifier or, if bravely connecting a speaker directly, place a resistor in series to limit the current.




### How it works

A long chain of D flip flops divides down the clock to produce a range of frequencies  that are used for various purposes.
Some of the higher frequencies are used to produce the tones. Lower frequencies are used to control the patterns of lights and to change the tones being sent to the speaker.
An interesting part of the project is a counter that counts to 5 and resets to zero. This is used for one of the two patterns of lights, where the period of pattern is six.


### How to test

Connect a speaker to the last digital output pin, the one which is also connected to the decimal point on the seven segment display. Switch 8 is used to select between two groups of patterns.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | none  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | pattern_select  | none |
