---
hidden: true
title: "295 Neuron"
weight: 139
---

## 295 : Neuron

* Author: David Leonardo Caro Estepa
* Description: Artificial Neuron with 2 inputs of 2 bits
* [GitHub repository](https://github.com/dlcaro1004/tt04-wokwi-cmua-Neuron)
* [GDS submitted](https://github.com/dlcaro1004/tt04-wokwi-cmua-Neuron/actions/runs/6117316614)
* [Wokwi](https://wokwi.com/projects/375165100039571457) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Our Neuron is a component that emulates the behavior of an artificial neuron. It is a simple demonstration with 2 inputs of 2 bits that emulate the inputs of the neuron and 2 inputs of 2 bits that emulate the corresponding weights. These weights would simulate values that have already been calculated, that is, the inference state. As an activation function, a small test with a linear comparator was proposed. The output of the neuron is one or zero depending on the value of the inputs and the weights.


### How to test

To test the neuron, values must be placed on the 2 2-bit inputs and on the two weight values. The system generates an output at 1 or 0 that represents activation or not of the neuron.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | X0  | Y | none |
| 1 | X1  | n/a | none |
| 2 | Y0  | n/a | none |
| 3 | Y1  | n/a | none |
| 4 | WX0  | n/a | none |
| 5 | WX1  | n/a | none |
| 6 | WY0  | n/a | none |
| 7 | XY1  | n/a | none |
