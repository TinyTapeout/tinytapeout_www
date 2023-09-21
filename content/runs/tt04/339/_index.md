---
hidden: true
title: "339 i2c_6 bits"
weight: 94
---

## 339 : i2c_6 bits

* Author: Sergio Alejandro Rosales Nuñez
* Description: i2c address 0x04
* [GitHub repository](https://github.com/sergio7000/tt04-submission-template)
* [GDS submitted](https://github.com/sergio7000/tt04-submission-template/actions/runs/6118110050)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk  | data_from_master[0] | sda_in |
| 1 | rst  | data_from_master[1] | sda_out |
| 2 | scl  | data_from_master[2] | data_to_master[0] |
| 3 | none  | data_from_master[3] | data_to_master[1] |
| 4 | none  | data_from_master[4] | data_to_master[2] |
| 5 | none  | data_from_master[5] | data_to_master[3] |
| 6 | none  | ctrl | data_to_master[4] |
| 7 | none  | none | data_to_master[5] |
