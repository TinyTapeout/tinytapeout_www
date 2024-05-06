---
hidden: true
title: "612 Simple Stopwatch"
weight: 3
---

## 612 : Simple Stopwatch

* Author: Fabio Ramirez Stern
* Description: A simple stopwatch counting in 100th seconds and outputing it via SPI to a MAX7219 chip controlling an 8 digit 7-segment display.
* [GitHub repository](https://github.com/faramire/TT06-simple-clock)
* [GDS submitted](https://github.com/faramire/TT06-simple-clock/actions/runs/8758880495)
* HDL project
* [Extra docs](None)
* Clock: 1000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

A clock divider turns 1 MHz into 100 Hz, which drives a stopwatch going from 00:00:00 to 59:59:99. To achieve this, a chain of two types of counting circuit, one per digit gives it's output to an SPI master that encodes the result to be displayed on a 7-segment display with at least 6 digits.

### How to test

The start/stop button toggles the clock, the lap time button pauses the display, while the clock keeps running in the background. Pressing it again re-enables the display. The time can be reset with the reset button on input 2, or with the chip/PCB wide reset. The PCB wide reset affects everything, the input pin driven reset does only resets the counters.

### External hardware

2-3 buttons, one for start/stop and one for lap times. For the reset, either a third button or the dev board's reset for the whole chip can be used.
1 MAX7219/MAX7221 driven 7-segment display, or something that can interpret the SPI signal according to the MAX's specifications.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | start/stop | SPI MOSI |  |
| 1 | lap time | SPI CS (active low) |  |
| 2 | reset (active high) | SPI CLK |  |
| 3 |  | stopwatch enabled (counting up) |  |
| 4 |  | display enabled (goes low when showing lap time) |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "612" >}}
