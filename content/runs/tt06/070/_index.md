---
hidden: true
title: "70 Projekt KEIS Hadner Thomas"
weight: 12
---

## 70 : Projekt KEIS Hadner Thomas

* Author: Thomas Hadner
* Description: Demodulator for RC Receiver with different Outputs
* [GitHub repository](https://github.com/ThomasHadner/jku-tt06-pwm-analyzer-hadner)
* [GDS submitted](https://github.com/ThomasHadner/jku-tt06-pwm-analyzer-hadner/actions/runs/8628730551)
* HDL project
* [Extra docs](None)
* Clock: 1000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Decodes PWM-Signal from RC Receiver with counter and threshold values to decide wether to set the output to HIGH or LOW.

### How to test

The program can be tested by applying a PWM-Signal to the input with a longer pulse time than 1.9ms, then the output will go to HIGH. If then you apply a PWM-Signal with a pulse time lower than 1.1 the output will go to LOW.

Additionally the 7-Segment-Display will always show how many outputs are currently active (HIGH).


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | input PWM of channel 0 | segment a | output of channel 0 |
| 1 | input PWM of channel 1 | segment b | output of channel 1 |
| 2 | input PWM of channel 2 | segment c | output of channel 2 |
| 3 | input PWM of channel 3 | segment d | output of channel 3 |
| 4 | input PWM of channel 4 | segment e | output of channel 4 |
| 5 | input PWM of channel 5 | segment f | output of channel 5 |
| 6 | input PWM of channel 6 | segment g | output of channel 6 |
| 7 | input PWM of channel 7 | UART Transmit Wire | output of channel 7 |

### Chip location

{{< shuttle-map "tt06" "70" >}}
