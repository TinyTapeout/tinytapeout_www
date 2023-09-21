---
hidden: true
title: "306 4-bits 1-channel PWM and ALU 4 bits"
weight: 10
---

## 306 : 4-bits 1-channel PWM and ALU 4 bits

* Author: Alonso
* Description: This is a 4-bits and 1-channel PWM module
* [GitHub repository](https://github.com/alonso59/tt04-submission-alu4)
* [GDS submitted](https://github.com/alonso59/tt04-submission-alu4/actions/runs/6114918221)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Set ui_in[7:0] as input


### How to test

Read u0_out to get the output


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ui_in[7]  | uo_out[4] | none |
| 1 | ui_in[6]  | uo_out[3] | none |
| 2 | ui_in[5]  | uo_out[2] | none |
| 3 | ui_in[4]  | uo_out[1] | none |
| 4 | ui_in[3]  | uo_out[0] | none |
| 5 | ui_in[2]  | n/a | none |
| 6 | ui_in[1]  | n/a | none |
| 7 | ui_in[0]  | n/a | none |
