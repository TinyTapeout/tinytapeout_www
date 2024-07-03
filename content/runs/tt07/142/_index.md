---
hidden: true
title: "142 RO-based Physically Unclonable Function (PUF)"
weight: 48
---

## 142 : RO-based Physically Unclonable Function (PUF)

* Author: Pablo Aravena
* Description: Implementation of a Ring Oscillator-based Physically Unclonable Function (PUF) in Sky130, with 8 bits of Challenge-Response Pairs (CRP)
* [GitHub repository](https://github.com/litneet64/tt07-RO-based-PUF)
* [GDS submitted](https://github.com/litneet64/tt07-RO-based-PUF/actions/runs/9319969941)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project works by...

### How to test

In order to test this RO-based PUF...

### External hardware

No external hardware is required for this project.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | challenge bit 1  | response bit 1  |         |
| 1 | challenge bit 2  | response bit 2  |         |
| 2 | challenge bit 3  | response bit 3  |         |
| 3 | challenge bit 4  | response bit 4  |         |
| 4 | challenge bit 5  | response bit 5  |         |
| 5 | challenge bit 6  | response bit 6  |         |
| 6 | challenge bit 7  | response bit 7  |         |
| 7 | challenge bit 8  | response bit 8  |         |


### Chip location

{{< shuttle-map "tt07" "142" >}}
