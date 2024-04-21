---
hidden: true
title: "261 Relaxation oscillator"
weight: 118
---

## 261 : Relaxation oscillator

* Author: Matt Venn
* Description: A relaxation oscillator
* [GitHub repository](https://github.com/mattvenn/tt06-analog-relax-osc)
* [GDS submitted](https://github.com/mattvenn/tt06-analog-relax-osc/actions/runs/8719175927)
* Analog project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

In electronics a [relaxation oscillator](https://en.wikipedia.org/wiki/Relaxation_oscillator) is a nonlinear electronic oscillator circuit that produces a nonsinusoidal repetitive output signal, such as a triangle wave or square wave.

The R&C have been chosen to make a ~2MHz signal.
An inverter after the oscillator makes a full swing square wave.

### How to test

Measure the oscillator out on pin 0 (tbc, might cause issues due to the analog mux parasitics). Measure the square wave out on digital output pin 0.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  | inverted output of oscillator |  |
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "261" >}}
