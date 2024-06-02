---
hidden: true
title: "68 Dummy Counter"
weight: 11
---

## 68 : Dummy Counter

* Author: Chinmay
* Description: A 16-bit counter
* [GitHub repository](https://github.com/pyamnihc/tt07-dummy-counter)
* [GDS submitted](https://github.com/pyamnihc/tt07-dummy-counter/actions/runs/9329904887)
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

Like a 16-bit counter

### How to test

Like a 16-bit counter

### External hardware

NA


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | count_en  | b0  | b8        |
| 1 | mult_en  | b1  | b9        |
| 2 | m_a0  | b2  | b10        |
| 3 | m_a1  | b3  | b11        |
| 4 | m_a2  | b4  | b12        |
| 5 | m_b0  | b5  | b13        |
| 6 | m_b1  | b6  | b14        |
| 7 | m_b2  | b7  | b15        |


### Chip location

{{< shuttle-map "tt07" "68" >}}
