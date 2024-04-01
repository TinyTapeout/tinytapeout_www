---
hidden: true
title: "25 Parallel Nibble to UART"
weight: 26
---

## 25 : 0b 000 011 001 : Parallel Nibble to UART

{{< tt-scanchain-switches "000011001" >}}

* Author: Andrew M
* Description: Loads two half-bytes into registers, then sends over UART
* [GitHub repository](https://github.com/andrewmourcos/tt03-verilog-demo)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: Arduino can be used for testing UART RX



### How it works

4 bits should be loaded into registers through the `data` pins twice - once for the LSB of a byte, once for the MSB of a byte (specified using the `mode` pins). 
Once ready, `mode` can be set to transmit to send the loaded byte over UART.


### How to test

When mode[1,2]=01, data is clocked in as the least-significant 4-bits for a UART transmissions. When mode[1,2]=10, the same occurs for the most-significant 4-bits. When mode[1,2]=11, the complete data should get sent over UART.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | uart_tx |
| 1 | reset  | none |
| 2 | data1  | none |
| 3 | data2  | none |
| 4 | data3  | none |
| 5 | data4  | none |
| 6 | mode1  | none |
| 7 | mode2  | none |
