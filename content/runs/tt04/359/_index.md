---
hidden: true
title: "359 LIF Neuron, Telluride 2023"
weight: 113
---

## 359 : LIF Neuron, Telluride 2023

* Author: Paola Vitolo, Andrew Wabnitz, ReJ aka Renaldas Zioma
* Description: Standalone test for a Binarized Leaky Integrate and Fire neuron that is part of the larger experimental design from Telluride Neuromorphic Workshop 2023
* [GitHub repository](https://github.com/rejunity/tt04-LIF-neuron-telluride2023)
* [GDS submitted](https://github.com/rejunity/tt04-LIF-neuron-telluride2023/actions/runs/6125865472)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Binarized Leaky Integrate and Fire (LIF) neuron supports binary [0/1] inputs and [-1/1] binarized weights.
Inputs are multiplied by weights and accumulated on the internal membrane. Membrane is exponentially decaying with every clock cycle.
Once membrane value (potential) reaches threshold, neuron spikes and membrane value is decreased.

```
membrane += inputs * weights
membrane *= decay_factor
membrane -= threshold if membrane > threshold
spike = 1 if membrane > threshold
```


### How to test

While reset is held high, input values are assigned to weights
After reset cycle neuron is active. The only output of the neuron is the binary spike!


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input1 / weight1  | spike | none |
| 1 | input2 / weight2  | none | none |
| 2 | input3 / weight3  | none | none |
| 3 | input4 / weight4  | none | none |
| 4 | input5 / weight5  | none | none |
| 5 | input6 / weight6  | none | none |
| 6 | input7 / weight7  | none | none |
| 7 | input8 / weight8  | none | none |
