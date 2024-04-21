---
hidden: true
title: "559 24 H Clock"
weight: 109
---

## 559 : 24 H Clock

* Author: UABC Team
* Description: typical 23h-format 4 digits clock. Two digits for hours and the other for minutes.
* [GitHub repository](https://github.com/Miguelgrc032024/UABCReloj)
* [GDS submitted](https://github.com/Miguelgrc032024/UABCReloj/actions/runs/8458389680)
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

This is a typical 23h-format 4 digits clock. Two digits for hours and the other for minutes. Digits are in BCD format. It uses a 1 megahertz signal for reference.  One push button for setting the hour or minute and another push button for advancing forward the hours or the minutes. In order to display the hour it is needed four 7-segment-BCD decoders.

### How to test

A one MegaHertz clock signal must be connected to the clk pin. Reset goes from 1 to 0 to start the clock operation. In order to set the correct hour, a pulse signal is needed in the set pin, then M0 digit should be blinking, a pulse in the P0 pin will change this digit. A new pulse in the set pin will change the process to the M1, and another pulse to the H0 and H1.

### External hardware

3 push buttons,
1 MHz signal generator,
4 seven segment decoders.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | rst | M0[0] | H0[0] |
| 1 | clk | M0[1] | H0[1] |
| 2 | P0 | M0[2] | H0[2] |
| 3 | set | M0[3] | H0[3] |
| 4 |  | M1[0] | H1[0] |
| 5 |  | M1[1] | H1[1] |
| 6 |  | M1[2] | Dots |
| 7 |  | M1[3] |  |

### Chip location

{{< shuttle-map "tt06" "559" >}}
