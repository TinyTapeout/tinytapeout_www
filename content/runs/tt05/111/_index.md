---
hidden: true
title: "111 Leaky Integrate-and-Fire Neuron"
weight: 82
---

## 111 : Leaky Integrate-and-Fire Neuron

* Author: Mariana_Huerta
* Description: Implement a LIF neuron in 130 nm CMOS
* [GitHub repository](https://github.com/huertma/tt05-leaky-integrate-fire-neuron)
* [GDS submitted](https://github.com/huertma/tt05-leaky-integrate-fire-neuron/actions/runs/6753250302)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

Image path is broken

### How it works

Start by applying an input current injection to the LIF neuron.

This gets added to a membrane potential which decays by a factor beta over time.

When the membrane potential exceeds the threshold, a spike is triggered.


### How to test

Reset the circuit to set the membrane potential to 0.

The inputs can be changed to vary the current. A higher current will result in a
higher spike rate.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | membrane potential bit a | spike bit 0 |
| 1 | current bit 12  | membrane potential bit b | unspecified |
| 2 | current bit 13  | membrane potential bit c | unspecified |
| 3 | current bit 14  | membrane potential bit d | unspecified |
| 4 | current bit 15  | membrane potential bit e | unspecified |
| 5 | current bit 16  | membrane potential bit f | unspecified |
| 6 | current bit 17  | membrane potential bit g | unspecified |
| 7 | current bit 18  | membrane potential bit h | unspecified |

### Chip location

{{< shuttle-map "tt05" "111" >}}
