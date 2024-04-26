---
hidden: true
title: "47 4-Bit CPU mit FSM"
weight: 33
---

## 47 : 4-Bit CPU mit FSM

* Author: Jacqueline Gislai
* Description: Mini CPU, that can do simple calculations and logic operations as well as storing and loading values and execute shifting operations
* [GitHub repository](https://github.com/jacquygis/jku-tt06-MiniCPU)
* [GDS submitted](https://github.com/jacquygis/jku-tt06-MiniCPU/actions/runs/8661828724)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Based on the input information, a few operations can be used to process the input values. If there should be operations done with two or more values, store- and loading- operations have to be executed in between before going to the next calculation step.

### How to test

For example giving the CPU a value to store and next to load into the accumulator by giving the correct operation codes and the storage address.
Next giving the CPU the next value and the operation that should be processes onto those to values, for example a AND function. The result will be given to the output converted to a 8-Bit signal.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | storage address Bit 0 | output data Bit 0 | input write-access in storage |
| 1 | storage address Bit 1 | output data Bit 1 |  |
| 2 | storage address Bit 2 | output data Bit 2 |  |
| 3 | storage address Bit 3 | output data Bit 3 |  |
| 4 | value of input data Bit 0 | output data Bit 4 | input Operation Code Bit 0 |
| 5 | value of input data Bit 1 | output data Bit 5 | input Operation Code Bit 1 |
| 6 | value of input data Bit 2 | output data Bit 6 | input Operation Code Bit 2 |
| 7 | value of input data Bit 3 | output data Bit 7 | input Operation Code Bit 3 |

### Chip location

{{< shuttle-map "tt06" "47" >}}
