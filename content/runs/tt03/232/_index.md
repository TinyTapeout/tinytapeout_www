---
hidden: true
title: "232 Femto 4-bit CPU"
weight: 233
---

## 232 : Femto 4-bit CPU

* Author: Majdi Abdul Samad, ECE Dept., American University of Beirut (mia42@mail.aub.edu)
* Description: Design of a small single-cycle CPU with simple RISC/Accumulator ISA
* [GitHub repository](https://github.com/majdiabdulsamad/tt02-Femto)
* [Most recent GDS build](https://github.com/majdiabdulsamad/tt02-Femto/actions/runs/3620410709)
* HDL project
* [Extra docs](README.md)
* Clock: 5 Hz
* External hardware: None

Image path is broken

### How it works

NOTE: ISA is included in the ReadMe. Contains a register file, ALU, and 7 segment decoder. Instructions are sent in from inputs 7 downto 1 (0 reserved for clk), the register source and destination are sent to the register file (synch write/asynch read). Opcode and register read data are sent to the ALU for the operation. The output data could be stored in the ALU, the reigster file, or sent to the 7 segment decoder to power the LED output. See the ReadMe for more details.

### How to test

Design was tested with a ModelSim TCL script, provided here and should be compatible with other TCL accepting simulators. A cocotb testbench will also be made available.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | opcode[0]  | segment b |
| 2 | opcode[1]  | segment c |
| 3 | opcode[2]  | segment d |
| 4 | reg_dest[0]  | segment e |
| 5 | reg_dest[1]  | segment f |
| 6 | reg_src[0]  | segment g |
| 7 | reg_src[1]  | none |
