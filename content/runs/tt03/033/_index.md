---
hidden: true
title: "33 Pulse-Density Modulators"
weight: 34
---

## 33 : 0b 000 100 001 : Pulse-Density Modulators

{{< tt-scanchain-switches "000100001" >}}

* Author: Marco Merlin
* Description: An implementation of a DDPM, PWM and Sigma-Delta Pulse-Density Modulators with python libraries myHDL and PuEDA.
* [GitHub repository](https://github.com/bat52/tt03-ddpm-pwm)
* [Most recent GDS build](https://github.com/bat52/tt03-ddpm-pwm/actions/runs/4572574989)
* HDL project
* [Extra docs](https://github.com/bat52/tt03-ddpm-pwm/blob/main/README.md)
* Clock: 12500 Hz
* External hardware: clock source

![picture](images/ddpm.pdf)

### How it works

This project implements three different architectures of Pulse Density Modulators (PDM), to compare performances and 
implementation complexity of the different schemes.

PDM modulators are of particular interest because exploiting oversampling, they allow to implement 
Digital-to-Analog-Conversion (DAC) schemes with an equivalent resolution of multiple bits, based on 
a single-bit digital output, by means of a straightforward analogue low-pass filter.      

The PDM modulators implemented in this project are the following:
  1) Pulse Width Moulation (PWM)
  2) Dyadic Digital Pulse Modulation (DDPM)
  3) Sigma-Delta (SD)

PWM is arguably the simplest and possibly most widespread PDM technology that is praised for its low complexity.      

DDPM [1][2][3] is a type of digital modulation technique in which the pulse width are quantized in a dyadic manner, 
meaning that they are quantized in powers of two, which allows for efficient implementation using binary arithmetic. 
As a consequence, DDPM modulators are relatively inexpensive to deploy, with a complexity comparable to that of widespread 
Pulse-Width Moduldation (PWM) modulators.

SD modulators are perhaps the best-performing PDM technology, that is particularly well suited for higher resolution 
data conversion, and typically find use in audio DACs and fractional PLLs. 
In spite their good performaces, SD modulators are Infinite-Impulse-Response (IIR) closed-loop systems 
which behavior depends on the input signal, resulting in a number of concerns (most notably stability), that typically
require careful modeling of the systems and condition under which they will be required to operate.

This design is separated into two section:
  1) 6 bits resolution instance of PWM, DDPM and SD fed by a static DC value from the input pins
  2) 8 bits resolution instance of PWM, DDPM and SD fed sine look-up-table (LUT) that allows to evaluate the spectral content
  of the modulated signals.


### How to test

Common:
The circuit needs to be fed with a clock on pin io_in[0]. 
Reset signal needs to be released by raising to 1 pin io_in[1].

Static DC:      
The input inval of the first set of DC modulators is fed through pins io_in[7:2].
The low-passed dc component of the outputs on pins io_out[0] (PWM), io_out[1], and io_out[2] is
proportional to the decimal value of the input inval. 

Sinusoidal output:
The low-passed outputs on pins io_out[4] (PWM), io_out[5], and io_out[6] is a sinusoidal wave.
When clocking the chip with a clock frequency of 12.5kHz, the frequency of the sine is of 0.76z (fsin = fclock / 2^14), so that it should 
be visible at naked eye. The different designs should achieve an ENOB of 8 bits in the band 0-40Hz, with different
level of out-of-band emission between each other.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | pwm       / segment a |
| 1 | resetn  | ddpm      / segment b |
| 2 | inval[0]  | sd        / segment c |
| 3 | inval[1]  | 0'b1      / segment d |
| 4 | inval[2]  | pwm_sine  / segment e |
| 5 | inval[3]  | ddpm_sine / segment f |
| 6 | inval[4]  | sd_sine   / segment g |
| 7 | inval[5]  | 0'b1      / dot |
