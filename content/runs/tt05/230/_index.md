---
hidden: true
title: "230 Thermocouple-to-temperature converter (digital backend)"
weight: 63
---

## 230 : Thermocouple-to-temperature converter (digital backend)

* Author: Aidan Medcalf
* Description: Converts digitized thermocouple voltage into temperature.
* [GitHub repository](https://github.com/AidanMedcalf/tt05-thermocouple)
* [GDS submitted](https://github.com/AidanMedcalf/tt05-thermocouple/actions/runs/6753146420)
* HDL project
* [Extra docs](https://github.com/AidanMedcalf/tt05-thermocouple/blob/main/README.md)
* Clock: 10000000 Hz
* External hardware: Thermocouple AFE with compatible ranging, for chosen thermocouple type



### How it works

Converts 10-bit thermocouple ADC counts into temperature by approximating the transfer function with
piecewise linear segments and interpolating.

* Interface: SPI (16-bit word)
* ADC interface: SPI (16-bit word, 10 bits used)
* Output: Temperature in "centi-celsius", predivided by 4; 16-bit over full positive range of thermocouple type
* ADC passthrough: When enabled, directly connects SPI master to ADC for configuration
* Type-J and type-K thermocouples supported

ADC range: 0 counts = 0 mV = 0 C, max counts (1023) = max mV = max C. Example: For type-K
thermocouple, 1023 counts = 54.886 mV = 1372 C

Temperature output: Output is in "centi-Celsius", or hundredths of degrees C, pre-divided by 4, with a granularity of 0.4C.
`T = A / 25.0`
Where T is in degrees C, and A is the value read from SPI. For example, for a type-K thermocouple
at 415.06C, A = 10376 (0x2888), and T = 415.04. Note the error of 0.02C.

Configuration: There are two configuration bits. Write to cfg[1:0] by issuing a SPI transaction
with the high bit set (i.e. write 0x800X).

* cfg[1]: Thermocouple type: 0 = J, 1 = K
* cfg[0]: ADC passthrough enable


### How to test

Requires a J or K thermocouple analog front-end with compatible ranging. Wait 20 clocks after reset,
then read 16-bit temperaute from device.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | unused  | unused | SCE |
| 1 | unused  | unused | SIN |
| 2 | unused  | unused | SOUT |
| 3 | unused  | unused | SCK |
| 4 | unused  | unused | ADC_SCE |
| 5 | unused  | unused | ADC_SOUT |
| 6 | unused  | unused | ADC_SIN |
| 7 | unused  | unused | ADC_SCK |
