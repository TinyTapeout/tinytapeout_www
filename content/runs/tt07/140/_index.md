---
hidden: true
title: "140 Subleq CPU with FRAM and UART"
weight: 88
---

## 140 : Subleq CPU with FRAM and UART

* Author: Philip Mohr
* Description: Stupid slow Subleq CPU using an external SPI FRAM
* [GitHub repository](https://github.com/BTFLV/tt07-subleq-fram-cpu)
* [GDS submitted](https://github.com/BTFLV/tt07-subleq-fram-cpu/actions/runs/9332425581)
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

Subleq refers to a kind of OISC where the one instruction is "SUBtract and branch if Less-than or EQual to zero", conventionally abbreviated to subleq.

Subleq is a simple one instruction language. Each Subleq instruction has 3 memory address operands. Since Subleq has only one instruction, the opcode itself is conventionally omitted, so each instruction is three addresses long.

You can easily output data in the C Code. Look in the examples how it's done. In Subleq it's implemented like this:
If B is -1 (negative unity), then the number contained in the address given by A is interpreted as a character and written to the machine's output. C is unused.

The Baud is 115200, when a 10MHz clock is used.

There is a C Compiler for Subleq. It only supports a typeless simplified subset of C, but most simple things can be done with it.
It is written in C++ and doesn't depend on libraries or external tools. The original website for it is offline, but infos about the compiler still exist on the Esolang Wiki (->Higher Subleq) with a Download Link at the web archive on the bottom of the page. But i will also include the compiler code in the repo.

### How to test

Use an Arduino compatible Microcontroller with at least 16KB Memory. Convert the output from the compiler with the given converter to an array, import it to the given Arduino Sketch, flash it and run it. The cpu is designed for 10MHz, but it needs to be tested how fast or slow it can go. The SPI clock is half the input clock. Keep in mind that when changing the clock speed the uart baud will also change.
I will make a kinda userfriendly toolchain and publish it on my github. It will include a Subleq to hex converter (for Quartus etc.), a Subleq to C string converter, an Arduino sketch for flashing to FRAM and example C/Subleq codes.

### External hardware

SPI FRAM

As RAM an 8KB FRAM is used with a 20MHZ SPI interface (MB85RS64V). The advantage of SPI RAM in comparison to SPI Flash is the access time. Every byte can be accessed directly without having bank switching, which leads to different access when randomly accessing data. But in comparison to usual RAM, FRAM is non-volatile. So it has the advantages of Flash and RAM memory (but costs much more).


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | in_miso  | out_mosi  | data_0        |
| 1 |   | out_sck  | data_1        |
| 2 |   | out_cs  | data_2        |
| 3 |   | tx  | data_3        |
| 4 |   | tx_credits  | data_4        |
| 5 |   |   | data_5        |
| 6 |   |   | data_6        |
| 7 |   |   | data_7        |


### Chip location

{{< shuttle-map "tt07" "140" >}}
