---
hidden: true
title: "174 Perceptron and basic binary neural network"
weight: 32
---

## 174 : Perceptron and basic binary neural network

* Author: Connor Guzikowski
* Description: Taking in the number of curves and edges of a number, the output is the expected number.
* [GitHub repository](https://github.com/connorguzi/tt05-perceptron)
* [GDS submitted](https://github.com/connorguzi/tt05-perceptron/actions/runs/6752539232)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Takes in a 7 bit input, with the 3 leftmost bits being the number of edges of a number, and the other bits are the numbers of curves in the number.
The output has 8 bits, separated into two halves the first half is the output of the perceptron, and the second half is the output of the binary neural network.


### How to test

After reset, the counter should increase by one every second with a 10MHz input clock.
Experiment by changing the inputs to change the counting speed.


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

{{< shuttle-map "tt05" "174" >}}
