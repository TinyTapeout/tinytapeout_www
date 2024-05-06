---
hidden: true
title: "736 UACJ-MIE-Booth 4"
weight: 197
---

## 736 : UACJ-MIE-Booth 4

* Author: UACJ Group A
* Description: Booth 4 multiplier
* [GitHub repository](https://github.com/HHRB98/UACJ-MIE-booth4)
* [GDS submitted](https://github.com/HHRB98/UACJ-MIE-booth4/actions/runs/8746999207)
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

The Booth-4 algorithm is a multiplication algorithm that uses a combination of shifting and addition/subtraction operations to perform signed multiplication of two numbers. It is specifically designed to optimize the multiplication process by reducing the number of required partial products and improving efficiency.

### How to test

using test bench, applying phhysicial outputs and see output

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | X[0]  | Z[0]  |      |
| 1 | X[1]  | Z[1]  |      |
| 2 | X[2]  | Z[2]  |      |
| 3 | X[3]  | Z[3]  |      |
| 4 |   | Z[4]  |      |
| 5 |   | Z[5]  |      |
| 6 |   | Z[6]  |      |
| 7 |   | Z[7]  |      |


### Chip location

{{< shuttle-map "tt06" "736" >}}
