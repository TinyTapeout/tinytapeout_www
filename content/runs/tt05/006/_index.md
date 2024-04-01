---
hidden: true
title: "6 Current Based Leaky Integrate and Fire Model"
weight: 129
---

## 6 : Current Based Leaky Integrate and Fire Model

* Author: Shatoparba Banerjee
* Description: Implement a current based LIF neuron
* [GitHub repository](https://github.com/shatoparbabanerjee/tt05-verilog-demo)
* [GDS submitted](https://github.com/shatoparbabanerjee/tt05-verilog-demo/actions/runs/6751851585)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Current-based LIF neurons are a simplified abstraction of the behavior of real neurons,
and they are often used in large-scale neural network simulations due to their computational efficiency.
These models are useful for studying the dynamics of spiking neurons and their role in information
processing in the brain.


### How to test

To test the current-based LIF project, follow these steps: Connect the LIF module to the input switches,
7-segment display, and clock source as specified in the Verilog module. Use input switches to control the
input current, and observe the 7-segment display for spike detection, while ensuring the clock signal is appropriately set to provide the desired clock frequency for the simulation.


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

{{< shuttle-map "tt05" "6" >}}
