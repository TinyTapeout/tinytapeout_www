---
hidden: true
title: "99 PiMAC"
weight: 118
---

## 99 : PiMAC

* Author: Steffen Reith
* Description: A simple pipelined multiply and accumulate unit to compute a*b+c
* [GitHub repository](https://github.com/SteffenReith/TT06_PiMac)
* [GDS submitted](https://github.com/SteffenReith/TT06_PiMac/actions/runs/8745370239)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This circuit is a simple pipelined multiply and accumulate unit to compute a*b+c using SpinalHDL as a generator.

It uses the classic textbook method of multiplication with base 2. So if the numbers a and b
are multiplied, the sum of the version of argument a shifted to the left by i bits must be summed up
if and only if the ith bit of b is 1.

These bit products, i.e. (a << i) * b(i), are determined in the individual stages of the pipeline
and the result is calculated step by step.

The full code can be found at https://github.com/SteffenReith/PiMAC

### How to test

Simply feed a, b, and c as 4 bit unsigned integer into the unit. The latency is 3 clocks, hence the
(hopefully correct) answer can be found at the result output after 3 cycles.

### External hardware

No external hardware it needed.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | a[0]  | result[0]  |      |
| 1 | a[1]  | result[1]  |      |
| 2 | a[2]  | result[2]  |      |
| 3 | a[3]  | result[3]  |      |
| 4 | b[0]  | result[4]  |      |
| 5 | b[1]  | result[5]  |      |
| 6 | b[2]  | result[6]  |      |
| 7 | b[3]  | result[7]  |      |


### Chip location

{{< shuttle-map "tt06" "99" >}}
