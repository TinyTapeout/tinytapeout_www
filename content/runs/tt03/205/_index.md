---
hidden: true
title: "205 Baudot Converter"
weight: 206
---

## 205 : Baudot Converter

* Author: Arthur Hazleden
* Description: This circuit will convert 5-bit Baudot from a teletype machine to 8-bit ASCII.
* [GitHub repository](https://github.com/Luthor2k/tt02-baudot)
* [Most recent GDS build](https://github.com/Luthor2k/tt02-baudot/actions/runs/3641986231)
* HDL project
* [Extra docs](https://github.com/Luthor2k/tt02-baudot/blob/main/README.md)
* Clock: 9600 Hz
* External hardware: "An optoisolaor is required at the Baudot input (IN1). A USB serial adapter or RS232 converter should be connected at the ASCII output (OUT0).
Hopefully the onboard clock can drive the ASCII UART at 9600 and lower baud. Baudot uses 45.5 Hz and a 100x clock divider drives the UART.
Since the TTY machines are not always on spec, drive IN1 with an adjustable 4550 Hz source. Baudot Out Ready and baudot[4:0] are available for
debugging purposes."


Image path is broken

### How it works

Two UARTs, a clock divider and a conversion ROM

### How to test

"Provide 9600Hz at IN0 and 5000Hz at IN1. This sets up a 50 baud input and 9600 baud output.
Us a PC set for 50 5n1 to drive the Baudot input. Check the baudot[4:0] pins and baudot_ready(OUT1) if the ASCII output isn't making sense."


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | ascii clock at 8x desired baudrate  | ASCII serial output at 9600 baud |
| 1 | baudot clock at 100x desired baudrate  | Baudot UART output byte ready |
| 2 | baudot input, should be held high when line is idle but connected  | none |
| 3 | none  | Baudot bit 0 |
| 4 | none  | Baudot bit 1 |
| 5 | none  | Baudot bit 2 |
| 6 | none  | Baudot bit 3 |
| 7 | none  | Baudot bit 4 |
