---
hidden: true
title: "231 Analog comparator"
weight: 59
---

## 231 : Analog comparator

* Author: Diego Carrera and Leonel Miranda
* Description: Analog comparator made by the MNEL team from USFQ.
* [GitHub repository](https://github.com/EduHolg/EjemploAnalog2)
* [GDS submitted](https://github.com/EduHolg/EjemploAnalog2/actions/runs/9293595477)
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

Circuit that compares two voltages or currents and produces a binary output indicating which input is greater.

### How to test

To test a comparator, apply known input voltages and check if the output logic level matches the expected result based on the input conditions. Vary the input voltages across the entire range and verify the output transitions occur at the specified threshold voltage.

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
| 0 | 1 | analog input           |
| 1 | 3 | analog reference           |
| 2 | 2 | analog output           |

### Chip location

{{< shuttle-map "tt07" "231" >}}
