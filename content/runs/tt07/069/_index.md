---
hidden: true
title: "69 MicroCode Multiplier"
weight: 98
---

## 69 : MicroCode Multiplier

* Author: Neil Powell
* Description: microcode unit for shift and add multiplication
* [GitHub repository](https://github.com/neilbluejohn/tt07-micro-mult)
* [GDS submitted](https://github.com/neilbluejohn/tt07-micro-mult/actions/runs/9306388888)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Input two 4-bit numbers A and B. 8-bit product is returned.

### How to test

Just reset and supply the inputs

### External hardware

Switches and LEDs


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | inputA[0]  | SMP_out[0]  |         |
| 1 | inputA[1]  | SMP_out[1]  |         |
| 2 | inputA[2]  | SMP_out[2]  |         |
| 3 | inputA[3]  | SMP_out[3]  |         |
| 4 | inputB[0]  | SMP_out[4]  |         |
| 5 | inputB[1]  | SMP_out[5]  |         |
| 6 | inputB[2]  | SMP_out[6]  |         |
| 7 | inputB[3]  | SMP_out[7]  |         |


### Chip location

{{< shuttle-map "tt07" "69" >}}
