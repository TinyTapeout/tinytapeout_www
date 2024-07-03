---
hidden: true
title: "974 RISCV32I with spi wrapper"
weight: 6
---

## 974 : RISCV32I with spi wrapper

* Author: Devin Macy
* Description: A mostly support riscv32i CPU with a bare bones spi wrapper allowing you to upload programs to instruction memory and echo information sent through SPI
* [GitHub repository](https://github.com/devin-macy/tt06-riscv32i-spi-wrapper)
* [GDS submitted](https://github.com/devin-macy/tt06-riscv32i-spi-wrapper/actions/runs/9307960071)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

My project is a 5-stage riscv32i cpu core supporting most of the bare bones instruction set. The instructions that are not supported are any instructions dealing with csr's, harts, memory fences, or modes of operation. The cpu core has 16 words (64 bytes) of instruction memory and registers and 8 words (32 bytes) of data memory.

For programmability, a spi wrapper has been added that starts in boot mode, requiring you to upload a program and entering echo mode before the cpu can do anything. When the exit boot command is given to the spi it will enter echo mode, releasing the cpu from reset, and repeat back any byte given to it as a sort of health check.

In its current state, there is no way to observe the status of the cpu not in simulation, since the spi doesn't hand over control of itself to the cpu to output data. However the passed/failed signals on `uo_out[6]` and `uo_out[7]` respectively, check to see if register 10 is equal to 45. Which you can upload a simple program that adds numbers from 1-10 and stores them into register 10 to test functionality.

#### Impact

This project was developed in part with the Microelectronics Security Training Center (MEST) through the class ["ChipCraft: The Art of Chip Design for Non-Experts"](https://github.com/efabless/chipcraft---mest-course) deveoped and taught by Efabless and Redwood EDA. The class is designed for non-experts in the field and covers
the entire microelectronics ecosystem including RTL design, Verification, GDS generation, tape-out process, and fabrication.

During the class, you get hands on experience and learn concepts of microelectronics design by designing a calculator and prototyping on the first time use of the TT FPGA
demo board before moving to designing a 5-stage riscv32i cpu using [Makerchip](https://www.makerchip.com/) and [TL-Verilog](https://www.redwoodeda.com/tl-verilog).

### How to test

Have prepared a riscv32i binary of up to 16 instructions [here is a pretty good rescource for putting together binaries](https://riscvasm.lucasteske.dev/)
The cpu has 3 control and status registers (csr's) in data memory, taking up the first 3 entries and giving the user 5 words to work with.

|data memory|csr usage|
|:---------:|---------|
|`dmem[0]`  |32-bit cycle counter                                                                                                |
|`dmem[1]`  |spi wrapper csr - bits 7-0 is the last byte recieved and bit 8 is a recieved byte valid signal. the rest are unused |
|`dmem[2]`  |the last 32-bit instruction written to instruction memory. populated when command 0xC5 is issued                    |

Connect the spi signals `SCLK`, `CS`, `MOSI`, and `MISO` to their respective pins. The spi commands are as follows:

|command|code|description|
|-------|:--:|-----------|
|load `ll_byte`              |0xC0     | load bits 7-0 of the instruction word                                                     |
|load `lh_byte`              |0xC1     | load bits 15-8 of the instruction word                                                    |
|load `hl_byte`              |0xC2     | load bits 23-16 of the instruction word                                                   |
|load `hh_byte`              |0xC3     | load bits 31-24 of the instruction word                                                   |
|load `imem_addr`            |0xC4     | load what 3-bit address you want to write the previously built instruction word to        |
|write to `imem[imem_addr]`  |0xC5     | write built instruction to address loaded into imem_addr                                  |
|exit boot mode              |0xC6     | enter echo mode, echoing back any byte given afterwards                                   |
|re-enter boot mode          |0xC7     | re-enter boot mode, holding cpu in reset                                                  |
|command error               |default  | invalid command was given, throw cmd_error on `uo_out[5]` high requiring a reset to clear |

*The spi commands require 2-bytes per command, even if the command doesnt use the second byte

**The current mode can be observed on `uo_out[4]`. Mode is low when in boot and high when in echo

Toggle `CS` high then low after power on. Program the cpu through spi by following a cmd,data,cmd,data cadence loading all the bytes of the instruction word, then loading the address to write to, then writing to imem until finish writing your program to instruction memory. Send the exit boot command to release the cpu and observe the results.

Here is an example (in verilog syntax) of a buffer used to program the instruction word  `addi x10, x0, 45` into address 5 then echo 0xAA

```
buff[14*8] = {8'hc0, 8'h13, 8'hc1, 8'h05, 8'hc2, 8'hd0, 8'hc3, 8'h02, 
              8'hc4, 8'h05, 8'hc5, 8'hxx, 8'hc6, 8'haa}
```

Transmitted MSB of the buffer first, and in words is

```
buff[14*8] = {load, ll_byte, load, lh_byte, load, hl_byte, load, hh_byte,
              load, imem_addr, write imem[imem_addr], dont care, exit boot, echo data}
```

You will need to program more than 5 instructions to really see any results, since it is a 5-stage pipeline and takes 5-cycles to see a write-back to the register file. An example program that adds up numbers 1-10 and stores them into register 10, in assembly, is as follows:

```assembly
.text
         reset:
            ADD x10, x0, x0             # Initialize r10 (a0) to 0
            ADD x14, x10, x0            # Initialize sum register a4 with 0x0
            ADDI x12, x10, 10           # Store count of 10 in register a2
            ADD x13, x10, x0            # Initialize intermediate sum register a3 with 0
         loop:
            ADD x14, x13, x14           # Incremental addition
            ADDI x13, x13, 1            # Increment count register by 1
            BLT x13, x12, loop          # If a3 is less than a2, branch to label named <loop>
         done:
            ADD x10, x14, x0            # Store final result to register a0 so that it can be read by main program
            JAL x1, done                # Infinite loop storing result to register a0 to not let PC run off into lala land
```

### External hardware

male-to-male connectors and a arduino


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | sclk  |   |         |
| 1 | cs  |   |         |
| 2 | mosi  |   |         |
| 3 |   | miso  |         |
| 4 |   | mode  |         |
| 5 |   | cmd_error  |         |
| 6 |   | passed  |         |
| 7 |   | failed  |         |


### Chip location

{{< shuttle-map "tt07" "974" >}}
