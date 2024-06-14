---
hidden: true
title: "975 ALU 74181"
weight: 104
---

## 975 : ALU 74181

* Author: Caio Alonso da Costa
* Description: SPI peripheral and an 8-bit ALU implemented with 2x 4-bit slice arithmetic logic unit 74181
* [GitHub repository](https://github.com/calonso88/tt07_alu_74181)
* [GDS submitted](https://github.com/calonso88/tt07_alu_74181/actions/runs/9323946760)
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

Replica of the famous 4-bit slice arithmetic logic unit (ALU).
https://en.wikipedia.org/wiki/74181

The project instantiate two times the replica of the 74818 to perform mathematical and logical operations on 8 bit words.

A multiplex  is used to taps different parts of the user logic and map them to the 7 segment display to support debug.

Due to I/O constraints, a SPI slave peripheral has been created to load/read data into the design.

SPI Slave peripheral implementation supports all 4 SPI modes of operation. 8 Configurable (Read/Write) registers. 8 Status (Read only) registers.

RP2040 SPI1 is used to communicate with the device. Map SPI1 IOs to GPIOs 24 to 27.

### Limitations on SPI:

- Single register access per SPI transaction.
- SPI transaction is limited to 16 bits transfer at a time (Addr + Data). Please refer to [Protocol](#protocol) for timing diagrams.
- Design tested for 8 configuration registers + 8 status registers.
- Even though the number of configuration registers and status registers is configurable, design only supports equal number of configuration and status registers for now.
- Writes targeting Read Only address are dropped, i.e., no configuration registers gets updated.

### Address Space:

| Address | Type of register |
| ---| --- |
| 0 | Configurable Read/Write register [0] - Data A (8 bits) |
| 1 | Configurable Read/Write register [1] - Data B (8 bits) |
| 2 | Configurable Read/Write register [2] - {c_in, M, S3, S2, S1, S0} [5:0] (6 bits) |
| 3 | Configurable Read/Write register [3] - Select for 7 segment display [2:0] (3 bits) |
| 4 | Configurable Read/Write register [4] |
| 5 | Configurable Read/Write register [5] |
| 6 | Configurable Read/Write register [6] |
| 7 | Configurable Read/Write register [7] |
| 8 | Status Read Only register [0] - Data F (8 bits)||
| 9 | Status Read Only register [1] - {c_out0, equal0, p0, g0, c_out1, equal1, p1, g1} [7:0] (8 bits) |
| 10 | Status Read Only register [2] - Output of debug Multiplexer [3:0] (4 bits) and Zeros [7:4] (4 bits) |
| 11 | Status Read Only register [3] - Output of bin_to_7seg_decoder (8 bits) |
| 12 | Status Read Only register [4] - Fixed data 8'hC4 (8 bits) |
| 13 | Status Read Only register [5] - Fixed data 8'h10 (8 bits) |
| 14 | Status Read Only register [6] - Fixed data 8'h66 (8 bits) |
| 15 | Status Read Only register [7] - Output of bin_to_7seg_decoder delayed by 1 clock cycle (8 bits) |

### Connection

RP2040 SPI Master <--SPI--> SPI_WRAPPER <--regaccess--> User logic

* SPI: MOSI MISO SCLK CS
* regaccess: config_regs (used to drive/control user logic), status_regs (used to read/monitor user logic)

### Protocol

#### SPI settings

* Address Bits = 4 and Databits = 8, MSB First
* Tested SPI frequency: spi_clk <= clk / 20

#### SPI commands

* Write data
  cmd = 0x80+addr, addr = 0 ~ 7

```txt
    Bit:       | <15>      <14>         <13>         <12>        <11>     <10>       <9>       <8>       <7>       <6>       <5>       <4>       <3>       <2>       <1>       <0>   |
    MOSI:      |   1  | Don't Care | Don't Care | Don't Care | addr[3] | addr[2] | addr[1] | addr[0] | data[7] | data[6] | data[5] | data[4] | data[3] | data[2] | data[1] | data[0] |
    MISO:      |   0  |      0     |      0     |      0     |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |
    CS:     1  |   0  |      0     |      0     |      0     |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |    0    |  1
```

* Read data
  cmd = 0x00+addr, addr = 0 ~ 15

```txt
    Bit:     | <15>      <14>         <13>         <12>       <11>       <10>      <9>       <8>           <7>             <6>             <5>             <4>             <3>             <2>             <1>             <0>     |
    MOSI:    |   0  | Don't Care | Don't Care | Don't Care | addr[3] | addr[2] | addr[1] | addr[0] |   Don't Care  |   Don't Care  |   Don't Care  |   Don't Care  |   Don't Care  |   Don't Care  |   Don't Care  |   Don't Care  |
    MISO:    |   0  |      0     |      0     |      0     |    0    |    0    |    0    |    0    | data[addr][7] | data[addr][6] | data[addr][5] | data[addr][4] | data[addr][3] | data[addr][2] | data[addr][1] | data[addr][0] |
    CS:   1  |   0  |      0     |      0     |      0     |    0    |    0    |    0    |    0    |       0       |       0       |       0       |       0       |       0       |       0       |       0       |       0       |  1
```

### How to test

Use SPI1 Master peripheral in RP2040 to start communication on SPI interface towards this design. Remember to configure the SPI mode using the switches in DIP switch (if you'd like to have CPOL=1 and CPHA=1). Alternatively, don't use the DIP switches and use the RP2040 GPIOs to configure the SPI mode in the desired mode.

### External hardware

Not required.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | cpol  | decod_reg[0]  |         |
| 1 | cpha  | decod_reg[1]  |         |
| 2 |   | decod_reg[2]  |         |
| 3 |   | decod_reg[3]  | spi_miso        |
| 4 |   | decod_reg[4]  | spi_cs_n        |
| 5 |   | decod_reg[5]  | spi_clk        |
| 6 |   | decod_reg[6]  | spi_mosi        |
| 7 |   | decod_reg[7]  |         |


### Chip location

{{< shuttle-map "tt07" "975" >}}
