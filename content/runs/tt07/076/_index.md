---
hidden: true
title: "76 GDS counter-measures experiment 1"
weight: 20
---

## 76 : GDS counter-measures experiment 1

* Author: Aurélien Hernandez
* Description: Experiment with GDS-level open-source countermeasure implementation
* [GitHub repository](https://github.com/N0vaPixel/tt07-cm-1)
* [GDS submitted](https://github.com/N0vaPixel/tt07-cm-1/actions/runs/9332148993)
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

PoC of custom hardened macro for fab testing and research purposes. It simply expose a set of customized matrices hardened.

### How to test

Select one of the two sets of matrices using the MAT_SEL input. Compare the observated IN --> OUT mapping using the reference model (GDS).

### External hardware

Nothing required.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | in_mat_0  | out_mat_0  | mat_sel        |
| 1 | in_mat_1  | out_mat_1  |         |
| 2 | in_mat_2  | out_mat_2  |         |
| 3 | in_mat_3  | out_mat_3  |         |
| 4 | in_mat_4  | out_mat_4  |         |
| 5 | in_mat_5  | out_mat_5  |         |
| 6 | in_mat_6  | out_mat_6  |         |
| 7 | in_mat_7  | out_mat_7  |         |


### Chip location

{{< shuttle-map "tt07" "76" >}}
