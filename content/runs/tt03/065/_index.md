---
hidden: true
title: "65 Simple UART interface"
weight: 66
---

## 65 : Simple UART interface

* Author: Aleksandr Zlobin
* Description: UART interface with access to internal registers
* [GitHub repository](https://github.com/ZlobinAS/tt03-verilog-uart)
* [Most recent GDS build](https://github.com/ZlobinAS/tt03-verilog-uart/actions/runs/4776848242)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: 



### How it works

Each transaction consists of two bytes. First byte - address and r/w bit.
Second byte - data to be written (write transaction), or data read from internal registers (read transaction).


### How to test

After reset LEDs should show 3 horisontal segments.

Read transaction: first byte is send by host, device will reply with one data byte. List of implemented commands:

  1. Read 15:18 bits of signature: send 0x00, device will reply with 0xDA byte

  2. Read 7:0 bits of signature: send 0x02, device will reply with 0xDE byte

  3. Read internal register: send 0x04, device will reply with 0x00 byte (initial value of internal register is 0)

  4. Read led register: send 0x06, device will reply with 0x49 byte (initial value of led register is 0x49)

  5. Read status of input4-input7: send 0x08, device sill reply with byte containing state of the inputs.

Write transaction: host should send two bytes first - command, second data:

  1. Write to internal register: send 0x05, send byte you want to write

  2. Write to LED register: send 0x07, send byte you want to write to LED register


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | rx  | segment c |
| 3 | input4  | segment d |
| 4 | input5  | segment e |
| 5 | input6  | segment f |
| 6 | input7  | segment g |
| 7 | input8  | tx |
