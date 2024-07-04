---
hidden: true
title: "520 Classic 8-bit era Programmable Sound Generator AY-3-8913"
weight: 91
---

## 520 : Classic 8-bit era Programmable Sound Generator AY-3-8913

* Author: ReJ aka Renaldas Zioma
* Description: The AY-3-8913 is a 3-voice programmable sound generator (PSG) chip from General Instruments. The AY-3-8913 is a smaller variant of AY-3-8910 or its analog YM2149.
* [GitHub repository](https://github.com/rejunity/tt07-psg-ay8913-with-analog-dac)
* [GDS submitted](https://github.com/rejunity/tt07-psg-ay8913-with-analog-dac/actions/runs/9331262157)
* Analog project
* [Extra docs]()
* Clock: 2000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

A simple 8 bit R2R DAC. Driven externally or by an OpenLane generated sawtooth waveform generator.

### How to test

#### Drive externally

Set the `external data` input high to provide the DAC with external data.
Then drive the 8 inputs and observe the analog output.

#### Drive with internal sawtooth wave generator

Set the `external data` input low to enable the sawtooth generator.
A sawtooth wave should be seen on the analog output.

To change the frequency, set the inputs and then raise the 'load divider' input.

### External hardware

A multimeter to measure the output voltage on analog pin 0.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | multiplexed data/address bus LSB  | (pwm) channel C   | (in) **BC1** bus control        |
| 1 | multiplexed data/address bus  | (pwm) channel B  | (in) **BDIR** bus direction        |
| 2 | multiplexed data/address bus  | (pwm) channel A  | (in) **SEL0** clock divider        |
| 3 | multiplexed data/address bus  |   | (in) **SEL1** clock divider        |
| 4 | multiplexed data/address bus  |   |         |
| 5 | multiplexed data/address bus  |   |         |
| 6 | multiplexed data/address bus  |   |         |
| 7 | multiplexed data/address bus MSB  |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | (out) channel C           |
| 1 | 6 | (out) channel B           |
| 2 | 10 | (out) channel A           |

### Chip location

{{< shuttle-map "tt07" "520" >}}
