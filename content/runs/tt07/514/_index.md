---
hidden: true
title: "514 Tiny Eater 8 Bit"
weight: 79
---

## 514 : Tiny Eater 8 Bit

* Author: Jason Kaufmann
* Description: Recreation of Ben Eater's 8 bit breadboard computer
* [GitHub repository](https://github.com/jasonkaufmann/tt07-beneater8bit)
* [GDS submitted](https://github.com/jasonkaufmann/tt07-beneater8bit/actions/runs/8991088556)
* HDL project
* [Extra docs]()
* Clock: 12000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is Ben Eater's 8 Bit computer on an ASIC!

All credit for the design, amazing instructional videos, and diagams below goes to Ben Eater.

![overview-with-chip-descriptions1](https://github.com/jasonkaufmann/ice40FPGAProjects/assets/41923667/0995715c-218d-4779-85be-36083b9d3e90)

#### High level overview

Full Computer Schematic:
![high_level_diagram](https://github.com/jasonkaufmann/ice40FPGAProjects/assets/41923667/f122dd7a-d9fc-4a3f-b961-beee40d9fa35)

Simple Control Signal Diagram:
![simple_diagram](https://github.com/jasonkaufmann/ice40FPGAProjects/assets/41923667/25b4c402-da54-4372-9458-7b1f4c095c3a)

*Note: The output register and logic to display the digits is not included on the ASIC. The 8 bit output value is put on the bus and the "output register in" control signal (oi) is on an output pin. This way you can use the data bus as a general purpose interface to any display you want. (i.e. you can read in the data to the RP2040 and show it on the screen, you can build the actual output register as shown in the videos and connect it to the PMOD header, etc.)

ASIC 2D:
![asic](https://github.com/jasonkaufmann/ice40FPGAProjects/assets/41923667/75a44e3f-531d-49fc-af93-cacfedb2afdd)

ASIC 3D:
![asic_3d](https://github.com/jasonkaufmann/ice40FPGAProjects/assets/41923667/da51dff7-3b9d-46f9-a9b1-e6c4dc9bc3e7)

### How to test

To program the computer follow these steps:

- enable my design in TT
- send prog_mode bit high
- set the four prog_address bits to the address you want to write to, put the data you want to store at that address on the I/O lines, and then pulse the clock.
- since this computer only has a 4 bit address space you can only store 16 bytes total in the internal RAM.
- see https://eater.net/8bit/ for more details.

#### Instructions

| OPC | DEC | HEX  | DESCRIPTION                                                    |
|-----|-----|------|----------------------------------------------------------------|
| NOP | 00  | 0000 |                                                                |
| LDA | 01  | 0001 | Load contents of memory address aaaa into register A.          |
| ADD | 02  | 0010 | Put content of memory address aaaa into register B, add A + B, store result in A. |
| SUB | 03  | 0011 | Put content of memory address aaaa into register B, subtract A - B, store result in register A. |
| STA | 04  | 0100 | Store contents of register A at memory address aaaa.           |
| LDI | 05  | 0101 | Load 4 bit immediate value in register A (loads 'vvvv' in A).   |
| JMP | 06  | 0110 | Unconditional jump. Set program counter (PC) to aaaa, resume execution from that memory address. |
| JC  | 07  | 0111 | Jump if carry. Set PC to aaaa when carry flag is set and resume from there. When carry flag is not set, resume normally. |
| JZ  | 08  | 1000 | Jump if zero. As above, but when zero flag is set.              |
|     | 09  | 1001 |                                                                |
|     | 10  | 1010 |                                                                |
|     | 11  | 1011 |                                                                |
|     | 12  | 1100 |                                                                |
|     | 13  | 1101 |                                                                |
| OUT | 14  | 1110 | Output register A to 7 segment LED display as decimal.         |
| HLT | 15  | 1111 | Halt execution.                                                |

### External hardware

You will need the RP2040 or a similar microcontroller to write the program into the internal memory. If you really wanted to, you could go old school and use DIP switches and a manual clock pulse as well.

You will want to make the output register on a breadboard to connect it to the 8 bit I/O lines from the PMOD header. See https://eater.net/8bit/output for detailed design info.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | prog_mode  | output_enable  | data0        |
| 1 | addr0  |   | data1        |
| 2 | addr1  |   | data2        |
| 3 | addr2  |   | data3        |
| 4 | addr3  |   | data4        |
| 5 | clock_change_mode  |   | data5        |
| 6 | clock_max_count  |   | data6        |
| 7 |   |   | data7        |


### Chip location

{{< shuttle-map "tt07" "514" >}}
