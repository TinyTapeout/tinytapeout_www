---
hidden: true
title: "79 4 bit CPU"
weight: 80
---

## 79 : 0b 001 001 111 : 4 bit CPU

{{< tt-scanchain-switches "001001111" >}}

* Author: Paul Campell
* Description: simple cpu
* [GitHub repository](https://github.com/MoonbaseOtago/tt-cpu)
* [Most recent GDS build](https://github.com/MoonbaseOtago/tt-cpu/actions/runs/3555302577)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: sram, latch

Image path is broken

### How it works

 It has a 4-bit accumulator, a 7-bit PC, 2 7-bit index registers and a carry bit.
The main limitations are the 6/8-bit bus - it's designed to run with an external SRAM and a 7-bit address latch, code is loaded externally.
There are 25 instructions. each 2 or 3 nibbles:
- 0 V:	 add a, V(x/y)	- sets C - 1 V: 	 sub a, V(x/y)	- sets C - 2 V:	 or a, V(x/y) - 3 V:	 and a, V(x/y) - 4 V:	 xor a, V(x/y) - 5 V:	 mov a, V(x/y) - 6 V:	 movd a, V(x/y) - 7 0:	 swap x, y - 7 1:   add a, c - 7 2:   mov x.l, a - 7 3:   ret - 7 4:   add y, a - 7 5:   add x, a - 7 6:   add y, #1 - 7 6:   add x, #1 - 8 V:	 mov a, #V - 9 V:	 add a, #V - a V:	 movd V(x/y), a - b V: 	 mov  V(x/y), a - c H L: mov x, #hl - d H L: jne a/c, hl	if H[3] the test c otherwise test a - e H L: jeq a/c, hl	if H[3] the test c otherwise test a - f H L: jmp/call hl    if H[3] call else jmp
Memory is 128/256 (128 unified or 128xcode+128xdata) 4-bit nibbles, references are a 3 bit (8 nibble) offset from the X or Y index registers - the general idea is that the Y register points to an 8 register scratch pad block (a bit like an 8051) but can also be repurposed for copies when required. There is an on-chip SRAM block for data access only (addressed with the MSB of the data address) - mostly just to soak up any additional gates.
There is also a 4-deep hardware call stack.


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
