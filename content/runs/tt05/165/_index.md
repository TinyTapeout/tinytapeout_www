---
hidden: true
title: "165 Classic 8-bit era Programmable Sound Generator AY-3-8913"
weight: 43
---

## 165 : Classic 8-bit era Programmable Sound Generator AY-3-8913

* Author: ReJ aka Renaldas Zioma
* Description: The AY-3-8913 is a 3-voice programmable sound generator (PSG) chip from General Instruments. The AY-3-8913 is a smaller variant of AY-3-8910 or its analog YM2149.
* [GitHub repository](https://github.com/rejunity/tt05-psg-ay8913)
* [GDS submitted](https://github.com/rejunity/tt05-psg-ay8913/actions/runs/6755738941)
* HDL project
* [Extra docs](README.md)
* Clock: 2000000 Hz
* External hardware: DAC (for ex. Digilent R2R PMOD), RC filter, amplifier, speaker

![picture](images/picture.jpg)

### How it works

This Verilog implementation is a replica of the classical **[AY-3-8913](https://en.wikipedia.org/wiki/General_Instrument_AY-3-8910)** programmable sound generator.
With roughly a 1500 logic gates this design fits on a **single tile** of the TinyTapeout.

The main goals of this project are:

1. closely replicate the behavior and eventually the complete **design of the original** AY-3-891x with builtin DACs
2. provide a readable and well documented code for educational and hardware **preservation** purposes
3. leverage the **modern fabrication** process

A significant effort was put into a thorough **test suite** for regression testing and validation against the original chip behavior.

#### Chip technical capabilities

- **3 square wave** tone generators
- **1 noise** generator
- **1 envelope** generator with 10 patterns
- Capable to produce a range of waves typically from **122 Hz** to **125 kHz**, defined by **12-bit** registers.
- **16** different volume levels

#### Historical use of the AY-3-891x

The AY-3-891x family of programmable sound generators was introduced by General Instrument in 1978. Variants of the AY-3-891x were broadly used:

- home computers: Amstrad CPC, Atari ST, Oric-1, Sharp X1, MSX, ZX Spectrum 128/+2/+3
- game consoles: Intellivision, Vectrex
- and arcade machines

The AY-3-891x chip family competed with the similar [Texas Instruments SN76489](https://en.wikipedia.org/wiki/Texas_Instruments_SN76489).

###### The reverse engineered AY-3-891x

This implementation would not be possible without the reverse engineered [schematics and analysis](https://github.com/lvd2/ay-3-8910_reverse_engineered)
based on decapped [AY-3-8910](https://siliconpr0n.org/map/gi/ay-3-8910) and [AY-3-8914](https://siliconpr0n.org/map/gi/ay-3-8914) chips.


### How to test

###### Test-suite

First of all, run the test suite:

```
$ cd src
$ make
```

###### Connect chip to the speaker

There are several ways to connect this chip to the microcontroller and speaker.

One option is to connect off the shelf data parallel Digital to Analog Converter (DAC)
for example [Digilent R2R Pmod](https://digilent.com/reference/pmod/pmodr2r/start) to the output pins and
route the resulting analog audio to piezo speaker or amplifier.

Another option is to use the Pulse Width Modulated (PWM) AUDIO OUT pin with OpAmp+capacitor based integrator or capacitor based low-pass filter and a speaker:

```
  uController             AY-3-8913
  ,---------.            ,---._.---. 
  |         |    2 Mhz ->|CLK  SEL0|<-- 0
  |    GPIOx|----------->|BC1  SEL1|<-- 0
  |    GPIOx|----------->|BDIR     |
  |    GPIOx|----------->|D0       |
  |    GPIOx|----------->|D1       |
  |    GPIOx|----------->|D2       |          C1
  |    GPIOx|----------->|D3       |     ,----||----.
  |    GPIOx|----------->|D4       |     |          | 
  |    GPIOx|----------->|D5       |     |  OpAmp   |        Speaker     
  |    GPIOx|----------->|D6  AUDIO|     |   |X     |            /|
  |    GPIOx|----------->|D7   OUT |-----.---|-X    |   C2   .--/ |
  `---------'            `---------'         |  }---.---||---|    |
                                          ,--|+/             `--` |
                                          |  |/               |  `|
                                          |                   |
                                     GND ---             GND ---  
```

###### Externally configurable clock divider

| SEL1 | SEL0 | Description                        | Clock frequency|
|------|------|------------------------------------|----------------|
| 0    |    0 | Standard mode, clock divided by 8  | 1.7 .. 2.0 MHz |
| 1    |    1 |           -----//-----             | 1.7 .. 2.0 MHz |
| 0    |    1 | New mode for TT05, no clock divider| 250 .. 500 kHZ |
| 1    |    0 | New mode for TT05, clock div. 128  |  25 .. 50  MHz |


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | DA0 - multiplexed data/address bus  | audio out (pwm) | (in) **BC1** bus control |
| 1 | DA1 - multiplexed data/address bus  | digita audio least significant bit | (in) **BDIR** bus direction |
| 2 | DA2 - multiplexed data/address bus  | digita audio | (in) **SEL0** 0 = clock div 8, 1 = no divider |
| 3 | DA3 - multiplexed data/address bus  | digita audio | (in) **SEL1** 0 = clock div 8, 1 = clock div 128 |
| 4 | DA4 - multiplexed data/address bus  | digita audio | (out) channel A (PWM) |
| 5 | DA5 - multiplexed data/address bus  | digita audio | (out) channel B (PWM) |
| 6 | DA6 - multiplexed data/address bus  | digita audio | (out) channel C (PWM) |
| 7 | DA7 - multiplexed data/address bus  | digita audio most significant bit | (out) AUDIO OUT master (PWM) |

### Chip location

{{< shuttle-map "tt05" "165" >}}
