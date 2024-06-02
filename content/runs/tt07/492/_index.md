---
hidden: true
title: "492 RF_peripheral_circuits"
weight: 44
---

## 492 : RF_peripheral_circuits

* Author: Shilpa Pavithran, Vineeta V Nair, Sruthi P, Aravind S, Vyshnav P Dinesh, Aswani A R
* Description: Peripheral circuits for RF based transmission.
* [GitHub repository](https://github.com/ShilpaPavithranManju/AnalogRF_peripheral_circuit)
* [GDS submitted](https://github.com/ShilpaPavithranManju/AnalogRF_peripheral_circuit/actions/runs/9332326315)
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

Based upon different modes differnt circuits are selected including RF based transmission.

### How to test

Select a mode with proper input so as to select the rquired Rf transmission peripheral circuit.

### External hardware

VNA, Multimeter and CRO.


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
| 0 | 5 | vth/out           |
| 1 | 0 | vin/vin[+]           |
| 2 | 4 | vin[1]/vin[-]           |
| 3 | 1 | s           |
| 4 | 3 | ant           |
| 5 | 2 | ind           |

### Chip location

{{< shuttle-map "tt07" "492" >}}
