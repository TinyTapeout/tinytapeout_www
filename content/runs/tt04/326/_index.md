---
hidden: true
title: "326 RS Write Decodifier"
weight: 35
---

## 326 : RS Write Decodifier

* Author: Francisco Javier Rodriguez Navarrete
* Description: Project for the 12 bit reservation station decodifier
* [GitHub repository](https://github.com/fjrn-cinvestav/tt04-submission-rsdeco)
* [GDS submitted](https://github.com/fjrn-cinvestav/tt04-submission-rsdeco/actions/runs/6122793356)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It works via selecting the corresponding RS needed


### How to test

Manupulate the input switches to see the decodifier outputs


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | in_rs_write[7]  | out_rs_write[7] | in_rs_write[11] |
| 1 | in_rs_write[6]  | out_rs_write[6] | in_rs_write[10] |
| 2 | in_rs_write[5]  | out_rs_write[5] | in_rs_write[9] |
| 3 | in_rs_write[4]  | out_rs_write[4] | in_rs_write[8] |
| 4 | in_rs_write[3]  | out_rs_write[3] | out_rs_write[11] |
| 5 | in_rs_write[2]  | out_rs_write[2] | out_rs_write[10] |
| 6 | in_rs_write[1]  | out_rs_write[1] | out_rs_write[9] |
| 7 | in_rs_write[0]  | out_rs_write[0] | out_rs_write[8] |
