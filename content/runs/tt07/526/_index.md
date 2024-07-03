---
hidden: true
title: "526 QIF Neuron"
weight: 12
---

## 526 : QIF Neuron

* Author: Katie Burrows and David Parent
* Description: Models a QIF spiking neuron 
* [GitHub repository](https://github.com/davidparent/tt_resistor_test)
* [GDS submitted](https://github.com/davidparent/tt_resistor_test/actions/runs/8993272551)
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

When the input hits a certain voltage, the output will spike and reset to a known value
E. J. Basham and D. W. Parent, "Compact digital implementation of a quadratic integrate-and-fire neuron," 2012 Annual International Conference of the IEEE Engineering in Medicine and Biology Society, San Diego, CA, USA, 2012, pp. 3543-3548, doi: 10.1109/EMBC.2012.6346731.
keywords: {Mathematical model;Clocks;Equations;Vectors;Computational modeling;Field programmable gate arrays;Neurons},

### How to test

Input a content 8-bit digital singal when the voltage crosses the threshold, and see if it spikes.  See: https://www.dropbox.com/s/6pjsgwxqhryaggs/ee122_lab_manual.pdf?dl=0

### External hardware

ADLAM2000


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |         |
| 1 |   |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 6 | Vout           |
| 1 | 10 | Vinp           |
| 2 | 7 | Vinn           |
| 3 | 9 | VoutM           |
| 4 | 8 | VinM           |

### Chip location

{{< shuttle-map "tt07" "526" >}}
