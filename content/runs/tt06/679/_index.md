---
hidden: true
title: "679 8bit ALU"
weight: 34
---

## 679 : 8bit ALU

* Author: David Parent,Chih-Kaun Ho, Edric Ong
* Description: Building a simple 8-bit unsigned Arithmetic logic unit (ALU)
* [GitHub repository](https://github.com/EdricOngKhaiJieh/8bitALU_verilog)
* [GDS submitted](https://github.com/EdricOngKhaiJieh/8bitALU_verilog/actions/runs/8755837188)
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

<img width="860" alt="image" src="https://github.com/EdricOngKhaiJieh/8bitALU_verilog/assets/80259537/0bfb7c71-4778-402a-9428-13c1d3adae90">


### How to test

<img width="857" alt="image" src="https://github.com/EdricOngKhaiJieh/8bitALU_verilog/assets/80259537/a49bbcc7-b4ae-4c16-9147-324e2b67e3c3">
<img width="859" alt="image" src="https://github.com/EdricOngKhaiJieh/8bitALU_verilog/assets/80259537/601c812a-4820-44cb-8e97-a1b2c9cc2b98">


### External hardware

ADALM2000. https://www.analog.com/en/resources/evaluation-hardware-and-software/evaluation-boards-kits/adalm2000.html#eb-overview


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui_in  | uo_out  |      |
| 1 |   |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "679" >}}
