---
hidden: true
title: "327 Password FSM"
weight: 136
---

## 327 : Password FSM

* Author: Francisco Javier Rodriguez Navarrete
* Description: Project for the Password FSM
* [GitHub repository](https://github.com/RSX92/tt04-submission-fsmlock)
* [GDS submitted](https://github.com/RSX92/tt04-submission-fsmlock/actions/runs/6122733563)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

This is a FSM that has a hard coded password that the user has to guess.


### How to test

The password is 3044238


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | iv_data[3]  | o_acknowledge[7] | none |
| 1 | iv_data[2]  | o_acknowledge[6] | none |
| 2 | iv_data[1]  | o_acknowledge[5] | none |
| 3 | iv_data[0]  | o_acknowledge[4] | none |
| 4 | N/C  | o_acknowledge[3] | none |
| 5 | N/C  | o_acknowledge[2] | none |
| 6 | i_send_data  | o_acknowledge[1] | none |
| 7 | i_CE  | o_acknowledge[0] | none |
