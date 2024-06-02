---
hidden: true
title: "40 Iterative MAC"
weight: 81
---

## 40 : Iterative MAC

* Author: Raju Machupalli
* Description: Iterative multiply and accumulation unit for ML accelerators
* [GitHub repository](https://github.com/RajuMachupalli/tt07_iterativeMAC)
* [GDS submitted](https://github.com/RajuMachupalli/tt07_iterativeMAC/actions/runs/9332674809)
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

The design contains iterative multiplication and addition unit. The multiplier is a 7x8 bit unit. At reset time, input through ui_in pins stores in a reg and used as operand 1 for multiplier. After reset, operand 2 for multiplier is supplied through ui_in at each clock cycle. The bidirectional pins provide operand 3 which will be added to the multiplier output. the output is read through uo_out pins.

### How to test

It's a bit complex, as bias values are supplied in different sequences, and output needs to change or align with the read output. Full instructions will be added here once the design is submitted for fabrication.

### External hardware

It does not require any additional hardware supply the input data using CPU.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui_in[0]  | uo_out[0]  | uio_in[0]        |
| 1 | ui_in[1]  | uo_out[1]  | uio_in[1]        |
| 2 | ui_in[2]  | uo_out[2]  | uio_in[2]        |
| 3 | ui_in[3]  | uo_out[3]  | uio_in[3]        |
| 4 | ui_in[4]  | uo_out[4]  | uio_in[4]        |
| 5 | ui_in[5]  | uo_out[5]  | uio_in[5]        |
| 6 | ui_in[6]  | uo_out[6]  | uio_in[6]        |
| 7 | ui_in[7]  | uo_out[7]  | uio_in[7]        |


### Chip location

{{< shuttle-map "tt07" "40" >}}
