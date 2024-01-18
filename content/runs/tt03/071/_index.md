---
hidden: true
title: "71 Tiny binarized neural network"
weight: 72
---

## 71 : 0b 001 000 111 : Tiny binarized neural network

{{< tt-scanchain-switches "001000111" >}}

* Author: ReJ aka Renaldas Zioma
* Description: 8 neurons
* [GitHub repository](https://github.com/rejunity/tt03-tiny-bnn)
* [Most recent GDS build](https://github.com/rejunity/tt03-tiny-bnn/actions/runs/4801780609)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

TODO


### How to test

TODO


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | output neuron 1 |
| 1 | setup  | output neuron 2 |
| 2 | in0 / in parameter (if setup is high)  | output neuron 3 |
| 3 | in1  | output neuron 4 |
| 4 | in2  | output neuron 5 |
| 5 | in3  | output neuron 6 |
| 6 | in4  | output neuron 7 |
| 7 | in5  | output neuron 8 / out parameter (if setup is high) |
