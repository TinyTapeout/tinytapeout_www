---
hidden: true
title: "4 Time Multiplexed Neuron Ckt"
weight: 115
---

## 4 : Time Multiplexed Neuron Ckt

* Author: Karina Aguilar
* Description:  Utilize leaky-integrate-and-fire neurons to make multiple neurons
* [GitHub repository](https://github.com/KarinaAguilar/tt05-time-multiplexed-neuron-circuit)
* [GDS submitted](https://github.com/KarinaAguilar/tt05-time-multiplexed-neuron-circuit/actions/runs/6752582606)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Apply an input current to the LIF neurons through the switches.

This will add to the membrane potential that decays over time.
If the membrane potential exceeds the threshold, then a spike is triggered.


### How to test

After reset, the membrane potential will be set to 0.

Then change the inputs to change the current. A higher current should trigger a higher firing rate.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | membrane potential bit a | spike bit 1 |
| 1 | current bit 12  | membrane potential bit b | spike bit 2 |
| 2 | current bit 13  | membrane potential bit c | spike bit 3 |
| 3 | current bit 14  | membrane potential bit d | spike bit 4 |
| 4 | current bit 15  | membrane potential bit e | spike bit 5 |
| 5 | current bit 16  | membrane potential bit f | unspecified |
| 6 | current bit 17  | membrane potential bit g | unspecified |
| 7 | current bit 18  | membrane potential bit h | unspecified |

### Chip location

{{< shuttle-map "tt05" "4" >}}
