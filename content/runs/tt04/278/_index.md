---
hidden: true
title: "278 A Risc-V Instruction memory i2c programmer"
weight: 129
---

## 278 : A Risc-V Instruction memory i2c programmer

* Author: Pablo Alonso
* Description: This proyect implements an i2c port capable of programing memory of a RISC-V processor
* [GitHub repository](https://github.com/Pablopabota/tt04-submission-demo_design)
* [GDS submitted](https://github.com/Pablopabota/tt04-submission-demo_design/actions/runs/6115402488)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The i2c port is capable of handle 4 registers:

- register 0: Set the instruction memory to read/write
- register 1: It loads the value of the instruction memory setted in register 0
- register 2: the desired value to be loaded to instruction memory setted in register 0
- register 3: Not used, yet read and write to it is possible.


### How to test

Connect any controller with an i2c master port and next is how to read, or write the memory:

- To Read:
  MASTER: Start + device_addr [0x55] (7-bits) + master ACK + address_to_read + ACK |                             | STOP
  SLAVE:                                                                           | 8bit_data_from_memory + ACK |


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ext_sda_in  | ext_sda_out | none |
| 1 | ext_scl_in  | ext_scl_out | none |
| 2 | ext_i2c_rst  | none | none |
| 3 | i2c_cs  | none | none |
| 4 | pc_src  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | sda_oe  | none | none |
