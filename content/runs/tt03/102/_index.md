---
hidden: true
title: "102 16x8 SRAM & Streaming Signal Generator"
weight: 103
---

## 102 : 0b 001 100 110 : 16x8 SRAM & Streaming Signal Generator

{{< tt-scanchain-switches "001100110" >}}

* Author: James Ross
* Description: Write to, Read from, and Stream 16 addressable 8-bit words of memory
* [GitHub repository](https://github.com/jar/tt02_sram)
* HDL project
* [Extra docs](https://github.com/jar/tt02_sram/blob/main/README.md)
* Clock: 0 Hz
* External hardware: 

![picture](images/16x8sram.png)

### How it works

*WRITE MODE*: Write Enable (WE) pin high while passing 4-bits low data, 4-bits high data into an 8-bit temporary shift register. After loading data into the temporary shift register, setting Commit high while passing a 4-bit address will place the register value into memory.  Fast memset, such as zeroing memory, can be performed with Commit high while passing a new address per clock cycle.  *READ MODE*: While Output Enable (OE) high, a 4-bit address will place the data from memory into the temporary register returns 8-bit register to output data interface.  *STREAM MODE*: While WE, OE, and Commit high, pass the starting stream index address.  Then, while WE and OE are both high, the output cycles through all values in memory.  This may be used as a streaming signal generator.

### How to test

After reset, you can write values into memory and read back. See the verilator testbench.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | data[0] |
| 1 | we  | data[1] |
| 2 | oe  | data[2] |
| 3 | commit  | data[3] |
| 4 | addr[0]/high[0]/low[0]  | data[4] |
| 5 | addr[1]/high[1]/low[1]  | data[5] |
| 6 | addr[2]/high[2]/low[2]  | data[6] |
| 7 | addr[3]/high[3]/low[3]  | data[7] |
