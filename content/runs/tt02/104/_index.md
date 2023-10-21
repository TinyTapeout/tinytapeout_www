---
hidden: true
title: "104 2bitALU"
weight: 105
---

## 104 : 0b 001 101 000 : 2bitALU

* Author: shan
* Description: 2 bit ALU which performs 16 different operations
* [GitHub repository](https://github.com/shan1293/tt02-2bitCPU)
* [Most recent GDS build](https://github.com/shan1293/tt02-2bitCPU/actions/runs/3588691245)
* HDL project
* [Extra docs]()
* Clock: none Hz
* External hardware: 



### How it works

Based on the 4 bit opcode, the ALU performs 16 different operations on the 2 bit inputs A & B and stores the result in 8 bit output ALU_out

### How to test

Provide A, B inputs. Select opcode based on the operation to perform. Check output at ALU_out

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | A1  | ALU_out |
| 1 | A2  | ALU_out |
| 2 | B1  | ALU_out |
| 3 | B2  | ALU_out |
| 4 | opcode  | ALU_out |
| 5 | opcode  | ALU_out |
| 6 | opcode  | ALU_out |
| 7 | opcode  | ALU_out |
