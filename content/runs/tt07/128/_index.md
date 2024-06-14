---
hidden: true
title: "128 4bit_CPU_td4"
weight: 46
---

## 128 : 4bit_CPU_td4

* Author: Ko Kosugi
* Description: 4bit_CPU
* [GitHub repository](https://github.com/KosugiSubaru/tt07-td4cpu)
* [GDS submitted](https://github.com/KosugiSubaru/tt07-td4cpu/actions/runs/9264662754)
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

4-bit CPU with 4 input ports and 4 output ports.

### How to test

Set the inputs and check the outputs.

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | data_0  | addres_0  | IO_0        |
| 1 | data_1  | addres_1  | IO_1        |
| 2 | data_2  | addres_2  | IO_2        |
| 3 | data_3  | addres_3  | IO_3        |
| 4 | data_4  | cf  | 0        |
| 5 | data_5  | ALU_to_reg_0  | ALU_to_reg_3        |
| 6 | data_6  | ALU_to_reg_1  | select_0        |
| 7 | data_7  | ALU_to_reg_2  | select_1        |


### Chip location

{{< shuttle-map "tt07" "128" >}}
