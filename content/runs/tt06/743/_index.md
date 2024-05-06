---
hidden: true
title: "743 TWI Monitor"
weight: 52
---

## 743 : TWI Monitor

* Author: Nicklaus Thompson
* Description: A Two Wire Interface (I2C) bus monitor
* [GitHub repository](https://github.com/FangameEmpire/tt06-twi-monitor)
* [GDS submitted](https://github.com/FangameEmpire/tt06-twi-monitor/actions/runs/8757529618)
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

This project is a Two-Wire Interface (I2C) monitor. The TWI side is essentially a shift register and does not respond like a slave or have an address. The system runs at 50 MHz and uses a UART baud rate of 115200. The system cannot currently capture repeated TWI frames, but captured single frames during  testing on an FPGA.

### How to test

You can use an Arduino and any TWI-compatible module to generate TWI frames to view. The frames will be converted to three bytes, those being {addr, R/W}, {data}, and {{4{Addr Ack}}, {4{Data Ack}}}. I use Coolterm to view the hex output, you can download it at https://freeware.the-meiers.org/.

### External hardware

This project needs an external UART to USB adapter if you want to connect it to your PC.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | SDA_in  | TX_out  |      |
| 1 | SCL_in  |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "743" >}}
