---
hidden: true
title: "234 Convolutional Network Circuit Chip Design"
weight: 145
---

## 234 : Convolutional Network Circuit Chip Design

* Author: Rogelio Franco
* Description: Silicon Chip design of a CNN
* [GitHub repository](https://github.com/suhrojo/ConvolutionalNC-Design)
* [GDS submitted](https://github.com/suhrojo/ConvolutionalNC-Design/actions/runs/6753370515)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Explain how the project works later...


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

{{< shuttle-map "tt05" "234" >}}
