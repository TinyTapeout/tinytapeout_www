---
hidden: true
title: "64 HiddenCPU"
weight: 65
---

## 64 : HiddenCPU

* Author: HiddenRoom
* Description: Basic 8 bit CPU.
* [GitHub repository](https://github.com/HiddenRoom/tt03-hiddenCPU)
* [Most recent GDS build](https://github.com/HiddenRoom/tt03-hiddenCPU/actions/runs/4771437008)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: No absolute requirements but external memory and hardware for addressing is not a bad idea



### How it works

Each instruction is executed in one clock cycle.

Instructions are inputed on io_in[2:7].


### How to test

After reset, registers will initialize, in order of ascending address, to 00000000b, 00000001b, 00000010b, 00000011b


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | bit zero of hardwired output reg number at address 11b or pc |
| 1 | reset  | bit one of hardwired output reg number at address 11b or pc |
| 2 | opcode bit zero  | bit two of hardwired output reg number at address 11b or pc |
| 3 | opcode bit one  | bit three of hardwired output reg number at address 11b or pc |
| 4 | result reg address bit zero  | bit four of hardwired output reg number at address 11b or pc |
| 5 | result reg address bit one  | bit five of hardwired output reg number at address 11b or pc |
| 6 | non result operand reg address bit zero  | bit six of hardwired output reg number at address 11b or pc |
| 7 | non result operand reg address bit one  | bit seven of hardwired output reg number at address 11b or pc |
