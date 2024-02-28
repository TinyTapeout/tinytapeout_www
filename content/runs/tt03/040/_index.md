---
hidden: true
title: "40 POV display"
weight: 41
---

## 40 : 0b 000 101 000 : POV display

{{< tt-scanchain-switches "000101000" >}}

* Author: Balint Kovacs
* Description: Small POV display
* [GitHub repository](https://github.com/dratini0/tt03-pov-display)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: A line of LEDs, an MCU to load the image data, and some means of timing



### How it works

The image is stored in a 8x32 loop, this can be updated over the SPI bus.
Additionally, there is a clock generator that generates 48-128 pulses for every cycle of the hall effect sensor.
Finally, a controller passes 32 of those pulses each cycle to the loop memory, and also handles blanking.

Relevant registers are reset by transitions of the hall effect sensor and the CS lines.


### How to test

* Supply a regular clock, up to f_clk/1024, on hall_in.
* Load an image in a single, 32 byte SPI transaction.
* Move the device quickly


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led0 |
| 1 | cs_n  | led1 |
| 2 | sck  | led2 |
| 3 | mosi  | led3 |
| 4 | hall_in  | led4 |
| 5 | hall_invert  | led5 |
| 6 | divider[0]  | led6 |
| 7 | divider[1]  | led7 |
