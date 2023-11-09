---
hidden: true
title: "256 Wavetable Sound Generator"
weight: 95
---

## 256 : Wavetable Sound Generator

* Author: Ryota Suzuki
* Description: Small wavetable/PSG type sound generator with I2S output
* [GitHub repository](https://github.com/JA1TYE/tt05-TYE-tone-generator)
* [GDS submitted](https://github.com/JA1TYE/tt05-TYE-tone-generator/actions/runs/6755895423)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz
* External hardware: I2S DAC is required (I tested this design with FPGA and PCM5102A DAC)



### How it works

This project is Small wave table/PSG type sound generator with I2S output.
Major features are:

- 4 channel sound generator
- 4-bit x 32depth wave table (can be uses as 2 of 16depth wave table)
- 8 selectable waveform (3x pulse,1x noise, 4x wave table)
- 8-bit volume(only for PSG mode, wave table mode is 4-step volume)
- 16-bit frequency
- Sampling Frequency is 48828.125Hz (at 50MHz clock)
- I2S output (16-bit mono)
- SPI control interface

You can control this sound generator by SPI interface.
SPI mode is mode 0 (CPOL=0, CPHA=0), and transaction length is 24-bit.
first 8-bit is register address, and next 16-bit is data. Data is MSB first.

| Addr | Description | Width |
| ---- | ---- | ---- |
| 0x00-0x03 | Frequency[0]-[3] | 16bit |
| 0x04-0x07 | Volume[0]-[3] | 8bit (lower 8bits are valid)|
| 0x08-0x0b | Waveform Select[0]-[3] | 3bit (lower 3bits are valid)|
| 0x20-0x3f | WaveTable[0]-[31] | 4bit (lower 4bits are valid)|


### How to test

Connect I2S output to I2S DAC, and control this sound generator by SPI interface.
SPI input is connected to RP2040's SPI1 on TT05 breakout board.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | SPI CS Input  | I2S Bit Clock | none |
| 1 | SPI CLK Input  | I2S Word Select | none |
| 2 | SPI MOSI Input  | I2S Data | none |
| 3 | none  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
