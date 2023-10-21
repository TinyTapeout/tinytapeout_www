---
hidden: true
title: "116 Baudot Converter"
weight: 117
---

## number : 0b001110100 : Baudot Converter

* Author: Arthur Hazleden
* Description: This circuit will convert ASCII serial data to baudot serial data provide the reverse funtion as well
* [GitHub repository](https://github.com/Luthor2k/tt02-baudot)
* [Most recent GDS build](https://github.com/Luthor2k/tt02-baudot/actions/runs/3641986231)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: The ASCII is expected to come in/out from a USB-serial adapter. The baudot is a 60mA current loop so something hefty is required.



### How it works

UARTS and two conversion ROMs

### How to test

Serial data in and see how it goes.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | ascii clock at 8x desired baudrate  | segment a |
| 1 | baudot clock at 100x desired baudrate  | segment b |
| 2 | baudot input, should be held high when line is idle but connected  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
