---
hidden: true
title: "168 Basic Spiking Neural Network"
weight: 55
---

## 168 : Basic Spiking Neural Network

* Author: Abhinandan singh
* Description: Study of spike generation in a SNN.
* [GitHub repository](https://github.com/abhiucsc/SNN293)
* [GDS submitted](https://github.com/abhiucsc/SNN293/actions/runs/6752767833)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

Image path is broken

### How it works

Spiking pattern of the three input neurons will be used as an input.
The Spikes of the two output neurons can be plotted on time charts.
Example:


### How to test

Feed in diferent spiking patterns of the input neurons (1, 2 and 3).
The network will pass the spikes in the forward direction accoding to the defined weights.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | spike bit 11  | spike bit a | unspecified |
| 1 | spike bit 12  | spike bit b | unspecified |
| 2 | spike bit 13  | unspecified | unspecified |
| 3 | unspecified  | unspecified | unspecified |
| 4 | unspecified  | unspecified | unspecified |
| 5 | unspecified  | unspecified | unspecified |
| 6 | unspecified  | unspecified | unspecified |
| 7 | unspecified  | unspecified | unspecified |

### Chip location

{{< shuttle-map "tt05" "168" >}}
