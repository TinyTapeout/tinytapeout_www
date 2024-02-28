---
hidden: true
title: "90 3-bit 4-position register"
weight: 91
---

## 90 : 0b 001 011 010 : 3-bit 4-position register

{{< tt-scanchain-switches "001011010" >}}

* Author: Chris Burton
* Description: 3-bit 4-position register using Multiplexers
* [GitHub repository](https://github.com/burtyb/tt03-3x4-Register)
* [Wokwi](https://wokwi.com/projects/362886316051042305) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Decodes addresses and stores the bits using multiplexers.


### How to test

To write set the 3 data bits (WriteData0-WriteData2), address of the register to be written to (WriteAddress0/WriteAddress1) and toggle WriteEnable to write the 3-bits to the register at address. To read data set the address of the register to read (ReadAddress0/ReadAddress1) and the data is output on Data0-Data2. The internal state for Data2 at all addresses and an inverted WriteEnable is also output.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | WriteData0  | OutData0 |
| 1 | WriteData1  | Data2Address0 |
| 2 | WriteData2  | Data2Address1 |
| 3 | WriteAddress0  | OutData2 |
| 4 | Writeaddress0  | Data2Address2 |
| 5 | WriteEnable  | Data2Address3 |
| 6 | ReadAddress0  | OutData1 |
| 7 | ReadAddress1  | NotWriteEnable |
