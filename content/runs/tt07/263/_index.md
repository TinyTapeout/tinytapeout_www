---
hidden: true
title: "263 MOS Bandgap"
weight: 82
---

## 263 : MOS Bandgap

* Author: Matt Venn
* Description: bandgap using only MOSFETs
* [GitHub repository](https://github.com/mattvenn/tt07-mos-bandgap)
* [GDS submitted](https://github.com/mattvenn/tt07-mos-bandgap/actions/runs/9320457745)
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

[Read the paper here](http://www.av.it.pt/conftele2009/Papers/16.pdf) and see the DTMOS variant below.

### Circuit

![bandgap circuit](images/bandgap_circuit.png)

DTMOS variant connects the lower PMOS body to VSS instead of VDD.

![opamp buffer](images/bandgap_opamp.png)

### Simulation

### MOS

* Simulated output is 0.714 to 0.716v across 10 to 120 degrees C.
* Simulated output is 0.6 to 0.8v across 1.6 to 2v VDD.

![sim](images/vdd_and_temp_sweep.png)

### DTMOS

* Simulated output is 0.515 to 0.510v across 10 to 120 degrees C.
* Simulated output is 0.3 to 0.6v across 1.6 to 2v VDD.

![sim](images/dtmos_vdd_and_temp_sweep.png)

### How to test

#### MOS

Connect a multimeter to analog output 0. It should measure around 0.7v and remain constant with temperature.

#### DTMOS

Connect a multimeter to analog output 0. It should measure around 0.5v and remain constant with temperature.

### External hardware

Multimeter, hot air gun to heat the chip

### References

* [A sky130 reference bandgap with results](https://github.com/johnkustin/bandgapReferenceCircuit)
* [DTMOS varient](https://www.researchgate.net/publication/4157633_Low-power_bandgap_references_featuring_DTMOSTs)


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
| 0 | 9 | bandgap           |
| 1 | 8 | bandgap_dtmos           |

### Chip location

{{< shuttle-map "tt07" "263" >}}
