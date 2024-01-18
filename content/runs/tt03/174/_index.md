---
hidden: true
title: "174 8 bit CPU"
weight: 175
---

## 174 : 0b 010 101 110 : 8 bit CPU

{{< tt-scanchain-switches "010101110" >}}

* Author: Paul Campell
* Description: 8-bit version of the MoonBase 4-bit CPU
* [GitHub repository](https://github.com/OneRNG/tt-cpu8)
* [Most recent GDS build](https://github.com/OneRNG/tt-cpu8/actions/runs/3572192785)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: sram, latch

Image path is broken

### How it works

 It has an 8-bit accumulator, a 12-bit PC, 2 13-bit index registers and a carry bit.
The main limitations are the 6/8-bit external bus - it's designed to run with an external SRAM and a 12-bit address latch, code is loaded externally.
There are 33 instructions. each 1, 2 or 3 bytes:
0v:         add a, v(x/y)   - sets C 1v:         sub a, v(x/y)   - sets C 2v:         or a, v(x/y) 3v:         and a, v(x/y) 4v:         xor a, v(x/y) 5v:         mov a, v(x/y) 6v:         movd a, v(x/y) 70:         add a, c 71:         inc a 72:         swap x, y 73:         ret 74:         add y, a 75:         add x, a 76:         add y, #1 77:         add x, #1 78:         mov a, y 79:         mov a, x 7a:         mov b, a 7b:         swap b, a 7c:         mov y, a 7d:         mov x, a 7e:         clr a 7f:         mov a, p 8v:         nop 9v:         nop av:         movd v(x/y), a bv:         mov  v(x/y), a cv:         nop dv:         nop ev:         nop f0 HL:      mov a, #HL f1 HL:      add a, #HL f2 HL:      mov y, #EEHL f3 HL:      mov x, #EEHL f4 HL:      jne a/c, EEHL     if EE[4] the test c otherwise test a f5 HL:      jeq a/c, EEHL     if EE[4] the test c otherwise test a f6 HL:      jmp/call EEHL f7 HL:      nop
Memory is 4096 8-bit bytes, references are a 3 bit (8 byte) offset from the X or Y index registers - the general idea is that the Y register points to a register scratch pad block (a bit like an 8051) but can also be repurposed for copies when required. There is an on-chip SRAM block for data access only (addressed with the MSB of the data address) - mostly just to soak up any additional gates.
There is also a 3-deep hardware call stack.
Assembler is here: https://github.com/MoonbaseOtago/tt-asm 

### How to test

needs a 7-bit external address latch and SRAM

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | data_out_0 |
| 1 | reset  | data_out_1 |
| 2 | ram_data0  | data_out_2 |
| 3 | ram_data1  | data_out_3 |
| 4 | ram_data2  | write_data_n |
| 5 | ram_data3  | write_ram_n |
| 6 | io_data0  | a |
| 7 | io_data1  | strobe |
