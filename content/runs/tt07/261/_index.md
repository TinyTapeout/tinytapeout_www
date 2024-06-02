---
hidden: true
title: "261 4-bit R2R DAC"
weight: 30
---

## 261 : 4-bit R2R DAC

* Author: Vishal Bingi
* Description: It is a 4-bit R2R DAC with a sawtooth waveform driver
* [GitHub repository](https://github.com/Vishalbingi1999/tt07_r2r)
* [GDS submitted](https://github.com/Vishalbingi1999/tt07_r2r/actions/runs/9307507238)
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

It is a simple 4-bit R2R DAC, which is driven externally by an openlane generated sawtooth waveform generator.

### How to test

Drive externally:
Set the "external data" input high to provide the DAC with external data. Then drive the 4 inputs and observe the analog output.

Drive with internal sawtooth wave generator:
Set the "external data" input low to enable the sawtooth generator. A sawtooth wave should be seen on the analog output.
To change the frequency of the sawtooth wave, set the inputs and then raise the "load divider" input.

### External hardware

A multimeter to measure the output voltage on analog pin 0.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | bit 0  |   | external data        |
| 1 | bit 1  |   | load divider        |
| 2 | bit 2  |   |         |
| 3 | bit 3  |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 7 | DAC output           |

### Chip location

{{< shuttle-map "tt07" "261" >}}
