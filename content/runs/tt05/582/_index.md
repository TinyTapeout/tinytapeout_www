---
hidden: true
title: "582 Chonky Spiking Neural Net"
weight: 95
---

## 582 : Chonky Spiking Neural Net

* Author: ReJ aka Renaldas Zioma, Paola Vitolo, Andrew Wabnitz. Big thanks to Jason Eshraghian!
* Description: 3 layer Spiking Neural Net with on-chip weights
* [GitHub repository](https://github.com/rejunity/tt05-spiking-neural-net)
* [GDS submitted](https://github.com/rejunity/tt05-spiking-neural-net/actions/runs/6755900046)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

3 layer Spiking Neural Net with on-chip weights


### How to test

After reset...


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input bus LSB  | last layer neuron 0 | (in) EXEC |
| 1 | input bus  | last layer neuron 1 | (in) SYNC |
| 2 | input bus  | last layer neuron 2 | (in) SETUP_CONTROL 0 bit |
| 3 | input bus  | last layer neuron 3 | (in) SETUP_CONTROL 1 bit |
| 4 | input bus  | last layer neuron 4 | (in) SETUP_CONTROL 2 bit |
| 5 | input bus  | last layer neuron 5 | (out) debug neuron layer 1 |
| 6 | input bus  | last layer neuron 6 | (out) debug neuron layer 2 |
| 7 | input bus MSB  | last layer neuron 7 | (out) debug neuron layer 2 |

### Chip location

{{< shuttle-map "tt05" "582" >}}
