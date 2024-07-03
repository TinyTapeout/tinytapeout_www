---
hidden: true
title: "265 Aron's analog buffer test"
weight: 34
---

## 265 : Aron's analog buffer test

* Author: Aron Dennen
* Description: Double inverter project from Matt's analog course
* [GitHub repository](https://github.com/adennen/tt07-arond-analog)
* [GDS submitted](https://github.com/adennen/tt07-arond-analog/actions/runs/9332781926)
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

This is the double inverter project from Matt's analog course,
it's two inverters (one big and one small) connected to form a buffer

### How to test

Analog input is ua[1], output is ua[0]

### External hardware

none


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
| 0 | 7 | analog output           |
| 1 | 9 | analog input           |

### Chip location

{{< shuttle-map "tt07" "265" >}}
