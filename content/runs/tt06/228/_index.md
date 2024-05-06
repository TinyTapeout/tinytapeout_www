---
hidden: true
title: "228 10-bit Linear feedback shift register"
weight: 113
---

## 228 : 10-bit Linear feedback shift register

* Author: Shivam Bhardwaj, Sachin Sharma, Pankaj Lodhi and Ambika Prasad Shah
* Description: This Verilog module implements a 10-bit Linear Feedback Shift Register (LFSR) for generating pseudo-random sequences with clock and reset inputs.
* [GitHub repository](https://github.com/beaprog/tt06-LFSR)
* [GDS submitted](https://github.com/beaprog/tt06-LFSR/actions/runs/8649458875)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This Verilog module defines a 10-bit Linear Feedback Shift Register (LFSR). It features clock (`clk`) and reset (`rst`) input pins. The output pin (`out`) delivers a pseudo-random sequence based on clock edges and reset conditions. It's designed for digital applications requiring pseudo-random sequence generation and pattern generation.

### How to test

We test it on Vivado and open sources (OpenROAD and OpenLane).

### External hardware

defaults


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | clk  | out  |      |
| 1 | rst  |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "228" >}}
