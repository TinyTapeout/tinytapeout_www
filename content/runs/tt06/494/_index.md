---
hidden: true
title: "494 Analog loopback"
weight: 69
---

## 494 : Analog loopback

* Author: Matt Venn
* Description: Analog loopback test
* [GitHub repository](https://github.com/TinyTapeout/tt06-analog-loopback)
* [GDS submitted](https://github.com/TinyTapeout/tt06-analog-loopback/actions/runs/8324836549)
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

Each pair of analog pins are shorted together.

### How to test

Measure the resistance, step response through each pair to characterise the analog mux.

### External hardware

n/a


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |      |
| 1 |   |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 5 | connected to 1           |
| 1 | 0 | connected to 0           |
| 2 | 4 | connected to 3           |
| 3 | 1 | connected to 2           |
| 4 | 3 | connected to 5           |
| 5 | 2 | connected to 4           |

### Chip location

{{< shuttle-map "tt06" "494" >}}
