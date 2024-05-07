---
hidden: true
title: "526 Analog Sigmoid"
weight: 39
---

## 526 : Analog Sigmoid

* Author: aleena
* Description: Activation functions for neuromorphic computing
* [GitHub repository](https://github.com/aleena-duk/tinytapeoutsig)
* [GDS submitted](https://github.com/aleena-duk/tinytapeoutsig/actions/runs/8756035538)
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

ReLu and sigmoid activation functions are included

### How to test

For ReLu:The output is same as the input value if it is positive and zero otherwise.
For Sigmoid:Used for binary classification and predict the probability as output.

### External hardware

A voltage source at analog pin 1 and analog pin 4 which is an output of an ANN


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |      |
| 1 |   |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | in1           |
| 1 | 6 | out1           |
| 2 | 10 | gnd1           |
| 3 | 7 | in2           |
| 4 | 9 | out2           |

### Chip location

{{< shuttle-map "tt06" "526" >}}
