---
hidden: true
title: "520 Leaky Integrate and fire neuron(LIF)"
weight: 121
---

## 520 : Leaky Integrate and fire neuron(LIF)

* Author: Vyshnav P Dinesh
* Description: Single node of integrate and fire neuron (LIF)
* [GitHub repository](https://github.com/vyshnavthonichal/tt-um-duk-lif)
* [GDS submitted](https://github.com/vyshnavthonichal/tt-um-duk-lif/actions/runs/8753273818)
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

This is an analog implementation of rate based encoding technique using leaky integrate and fire neuron.

### How to test

The time varying input is applied to vin terminal, connect a threshold voltage in the Vth terminal and a rate encoded input single will produced in the Out terminal

### External hardware

Function generator, CRO, Multimeter.


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
| 0 | 7 | Out           |
| 1 | 9 | Vth           |
| 2 | 8 | Vin           |

### Chip location

{{< shuttle-map "tt06" "520" >}}
