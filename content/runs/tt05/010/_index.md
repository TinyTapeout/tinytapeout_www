---
hidden: true
title: "10 Neural network on chip"
weight: 5
---

## 10 : Neural network on chip

* Author: Faculty of Technical Sciences Cacak, University of Kragujevac
* Description: Neural network built out of perceptrons
* [GitHub repository](https://github.com/vladamladenovic/neural_network_FTS_Cacak_Serbia)
* [GDS submitted](https://github.com/vladamladenovic/neural_network_FTS_Cacak_Serbia/actions/runs/6735242886)
* HDL project
* [Extra docs](https://github.com/vladamladenovic/neural_network_FTS_Cacak_Serbia)
* Clock: 50 000 000 Hz
* External hardware: 



### How it works

Network calculates output based on user provided input and predefined weight parameters of neural network


### How to test

Drive inputs to [7:0] ui_in and result of computation of neural network can be obesrved on [7:0] uo_out


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ui_in[0]  | uo_out[0] | none |
| 1 | ui_in[1]  | uo_out[1] | none |
| 2 | ui_in[2]  | uo_out[2] | none |
| 3 | ui_in[3]  | uo_out[3] | none |
| 4 | ui_in[4]  | uo_out[4] | none |
| 5 | ui_in[5]  | uo_out[5] | none |
| 6 | ui_in[6]  | uo_out[6] | none |
| 7 | ui_in[7]  | uo_out[7] | none |

### Chip location

{{< shuttle-map "tt05" "10" >}}
