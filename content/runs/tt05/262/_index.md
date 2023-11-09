---
hidden: true
title: "262 Analog emulation monosynth"
weight: 47
---

## 262 : Analog emulation monosynth

* Author: Toivo Henningsson
* Description: One synth voice with two oscillators and a 2nd order filter
* [GitHub repository](https://github.com/toivoh/tt05-synth)
* [GDS submitted](https://github.com/toivoh/tt05-synth/actions/runs/6755671643)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz
* External hardware: 



### How it works

TODO: Describe oscillators and filter, PWM


### How to test

The synth is controlled by writing to its configuration registers:

- Keep the write strobe low when not writing
- Set the 4 bit write address, and an 8 bit data value
- While keeping the address and data stable, bring the write strobe high and then low again
  - The write address and data are sampled at 2-10 cycles after the rising edge of the write strobe

The output comes in two forms:

- As a Pulse Width Modulated (PWM) signal.
- As an 8 bit value on the 8 output pins, that can be reconstructed using a resistor ladder.

The PWM signal should be simpler to use, but be sure reduce the voltage with a resistive divider or similar
before connecting it to an audio device.
**Note:Make sure that you know what you are doing when connecting an audio device to the output.
Don't apply more than 1 V between the terminals of an audio plug this connected to line in.
5 V direct from the chip might damage your audio device.**

TODO: Register descriptions


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | write data bit 0  | sample bit 0 | write address bit 0 |
| 1 | write data bit 1  | sample bit 1 | write address bit 1 |
| 2 | write data bit 2  | sample bit 2 | write address bit 2 |
| 3 | write data bit 3  | sample bit 3 | write address bit 3 |
| 4 | write data bit 4  | sample bit 4 | unused |
| 5 | write data bit 5  | sample bit 5 | unused |
| 6 | write data bit 6  | sample bit 6 | PWM output |
| 7 | write data bit 7  | sample bit 7 | write strobe |
