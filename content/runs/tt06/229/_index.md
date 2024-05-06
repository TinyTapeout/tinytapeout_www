---
hidden: true
title: "229 Analog 8bit R2R DAC"
weight: 125
---

## 229 : Analog 8bit R2R DAC

* Author: Matt Venn
* Description: A simple 8 bit DAC with a sawtooth waveform driver
* [GitHub repository](https://github.com/mattvenn/tt06-analog-r2r-dac)
* [GDS submitted](https://github.com/mattvenn/tt06-analog-r2r-dac/actions/runs/8590705228)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

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
| 0 | bit 0  |   |      |
| 1 | bit 1  |   |      |
| 2 | bit 2  |   |      |
| 3 | bit 3  |   |      |
| 4 | bit 4  |   |      |
| 5 | bit 5  |   |      |
| 6 | bit 6  |   |      |
| 7 | bit 7  |   |      |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 4 | DAC output           |

### Chip location

{{< shuttle-map "tt06" "229" >}}
