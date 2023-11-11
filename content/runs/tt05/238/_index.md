---
hidden: true
title: "238 Binary Neural Network (Verilog Demo)"
weight: 41
---

## 238 : Binary Neural Network (Verilog Demo)

* Author: Aravind Ramamoorthy
* Description: a single neuron in a Binarized Neural Network (BNN), performing binary multiplication with XNOR, accumulation, and sign activation.
* [GitHub repository](https://github.com/aravindbe/tt05-BNN-demo)
* [GDS submitted](https://github.com/aravindbe/tt05-BNN-demo/actions/runs/6753374238)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

Image path is broken

### How it works

This model simulates the behavior of a single neuron within a Binarized Neural Network (BNN)

The XNOR operation is used to perform binary multiplication.
A 32-bit signal used for accumulating the results of multiple XNOR operations, simulating the weighted sum of inputs.

"Sign activation function" applies to the accumulated result.
It maps the accumulated value to either +1 or -1 based on the sign.


### How to test

Reset the circuit to set to 0.
The constant Input and weight is provided with enable signal to begin XNOR multiplication


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | compare bit 11  | segment a | second counter bit 0 |
| 1 | compare bit 12  | segment b | second counter bit 1 |
| 2 | compare bit 13  | segment c | second counter bit 2 |
| 3 | compare bit 14  | segment d | second counter bit 3 |
| 4 | compare bit 15  | segment e | second counter bit 4 |
| 5 | compare bit 16  | segment f | second counter bit 5 |
| 6 | compare bit 17  | segment g | second counter bit 6 |
| 7 | compare bit 18  | dot | second counter bit 7 |

### Chip location

{{< shuttle-map "tt05" "238" >}}
