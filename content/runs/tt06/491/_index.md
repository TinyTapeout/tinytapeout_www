---
hidden: true
title: "491 BF Processor"
weight: 83
---

## 491 : BF Processor

* Author: Ivan Pancheniak
* Description: Implementation of a Brainf*ck processor in hardware
* [GitHub repository](https://github.com/loco-choco/tt-bf-processor)
* [GDS submitted](https://github.com/loco-choco/tt-bf-processor/actions/runs/8748526353)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a 75% implementation (the IO operations of `.` and `,` weren't implemented) of the esoteric language [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) as small factor processor.
It works as any "regular" microprocessor would, executing the given ASCII values of each character as an opcode, following this state machine:

![fsm](images/fsm.png)

With an internal implementation close to the following one:

![diagram](images/diagram.png)

### How to test

This circuit has the following pinout:
![pinout](images/pinout.png)
To drive it, you need to have an external address register, as it requests reads/writes data in alternating cycles, some memory organization to support, at the minimum, 256 x 8 of program memory and 256 x 8 of instruction memory (this can be expanded until 1KB memories by also using the *pc_ext* pins), and a clock, preferably at 20MHz. If you don't want for the program to access instruction memory, the pin *instr_addr* is only set if the address being requested is for instructions, so you can use that to avoid it.

### External hardware

These are some components that you can use for interfacing with the processor:

- 256 x 8 SRAM
- 8 bits to 13 bits Register
- 256 x 8 to 1K x 8 ROM
- LED bars with 8 segments to show the current value exiting the processor on the data bus (*uio_out*)


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | Write  | Data_0        |
| 1 |   | Addr  | Data_1        |
| 2 |   | Instr_Addr  | Data_2        |
| 3 |   | PC_Ext_8  | Data_3        |
| 4 |   | PC_Ext_9  | Data_4        |
| 5 |   | PC_Ext_10  | Data_5        |
| 6 |   | PC_Ext_11  | Data_6        |
| 7 |   | PC_Ext_12  | Data_7        |


### Chip location

{{< shuttle-map "tt06" "491" >}}
