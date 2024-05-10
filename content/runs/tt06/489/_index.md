---
hidden: true
title: "489 SADdiff_v1"
weight: 84
---

## 489 : SADdiff_v1

* Author: Daniel Burke
* Description: digital neuron component test
* [GitHub repository](https://github.com/drburke3/SADdiff_v1)
* [GDS submitted](https://github.com/drburke3/SADdiff_v1/actions/runs/8728099970)
* HDL project
* [Extra docs]()
* Clock: 10 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Takes two 8bit values in and performs addition/subtraction

### How to test

Supply two 8bit numbers and get back sum

### External hardware

None needed.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui_in[0]  | uo_out[0]  | uio[0]        |
| 1 | ui_in[1]  | uo_out[1]  | uio[1]        |
| 2 | ui_in[2]  | uo_out[2]  | uio[2]        |
| 3 | ui_in[3]  | uo_out[3]  | uio[3]        |
| 4 | ui_in[4]  | uo_out[4]  | uio[4]        |
| 5 | ui_in[5]  | uo_out[5]  | uio[5]        |
| 6 | ui_in[6]  | uo_out[6]  | uio[6]        |
| 7 | ui_in[7]  | uo_out[7]  | uio[7]        |


### Chip location

{{< shuttle-map "tt06" "489" >}}
