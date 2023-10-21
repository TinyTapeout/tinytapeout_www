---
hidden: true
title: "78 Zinnia+ (MCPU5+) 8 Bit CPU"
weight: 79
---

## 78 : 0b001001110 : Zinnia+ (MCPU5+) 8 Bit CPU

* Author: cpldcpu
* Description: A minimal 8 bit CPU
* [GitHub repository](https://github.com/cpldcpu/tt02-mcpu5plus)
* [Most recent GDS build](https://github.com/cpldcpu/tt02-mcpu5plus/actions/runs/3557667622)
* HDL project
* [Extra docs](https://github.com/cpldcpu/tt02-mcpu5plus)
* Clock: high Hz
* External hardware: External program memory and bus demultiplexer is required.

Image path is broken

### How it works

The CPU is based on the Harvard Architecture with separate data and program memories. The data memory is completely internal to the CPU. The program memory is external and is accessed through the I/O. All data has to be loaded as constants through machine code instructions.
Two of the input pins are used for clock and reset, the remaining ones are used as program input, allowing for an instruction length of 6 bit. The output is multiplexed between the program counter (when clk is '1') and the content of the main register, the Accumulator. Interpreting the accumulator content allows reading the program output.

### How to test

Execute the shell script 'run.sh primes' in the src folder. This will invoke the testbench with a rom emulator and execute a small program to compute prime numbers.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | cpu_out[0] |
| 1 | reset  | cpu_out[1] |
| 2 | inst_in[0]  | cpu_out[2] |
| 3 | inst_in[1]  | cpu_out[3] |
| 4 | inst_in[2]  | cpu_out[4] |
| 5 | inst_in[3]  | cpu_out[5] |
| 6 | inst_in[4]  | cpu_out[6] |
| 7 | inst_in[5]  | cpu_out[7] |
