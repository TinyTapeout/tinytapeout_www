---
hidden: true
title: "482 Field Programmable Resistor Network"
weight: 101
---

## 482 : Field Programmable Resistor Network

* Author: htfab
* Description: A few resistors and switches wired up in a matrix pattern.
* [GitHub repository](https://github.com/htfab/tt07-fprn)
* [GDS submitted](https://github.com/htfab/tt07-fprn/actions/runs/9332633896)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

### How it works

A few resistors and switches are wired up in a matrix pattern.
Switches are implemented as pass gates controlled by latches that keep the configuration.
Can be used as a makeshift DAC by controlling the "bitstream".

### How to test

First configure the network.
Each cell of the 3×3 matrix is controlled by 6 bits:
`VD_SHORT`, `VD_NEXT`, `VD_LINE`, `HD_SHORT`, `HD_NEXT` and `HD_LINE`.
Set these bits, then briefly turn on `H_GATE_i` and `V_GATE_j` to
save this configuration in the latches.
Continue for the other cells of the matrix.

Once the network is configured, manipulate the digital inputs
`H_INPUT_i` and `V_INPUT_j` and read the voltage at the analog output.

### External hardware

Multimeter or microcontroller with ADC to measure voltages.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | H_INPUT_0  |   | V_GATE_2        |
| 1 | H_GATE_2  |   | V_INPUT_2        |
| 2 | HD_LINE  |   | H_GATE_1        |
| 3 | HD_SHORT  |   | V_GATE_1        |
| 4 | HD_RES  |   | V_INPUT_1        |
| 5 | VD_LINE  |   | H_GATE_0        |
| 6 | VD_SHORT  |   | V_GATE_0        |
| 7 | VD_RES  |   | V_INPUT_0        |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 0 | ANALOG_PIN           |

### Chip location

{{< shuttle-map "tt07" "482" >}}
