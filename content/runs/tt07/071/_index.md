---
hidden: true
title: "71 TT7 Simple Clock"
weight: 42
---

## 71 : TT7 Simple Clock

* Author: Joseph Hsu
* Description: This is a very simple, configurable clock. By default it's 20 MHz, but it can be configured to 10/12/14 Mhz.
* [GitHub repository](https://github.com/JHsu01/tt07-clock)
* [GDS submitted](https://github.com/JHsu01/tt07-clock/actions/runs/9308176372)
* HDL project
* [Extra docs]()
* Clock: 20000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

So this clock is configured off of the FPGA clock at 20 MhZ. However, the clock is configurable to different frequencies and settings.

### How to test

See if the clock works. The first, second, and third switches should speed up/slow down the clock, which can be used to set the clock. The fourth switch is used to go to arduino mode. The fifth, sixth switches should allow you to switch between the minutes display and the hours display respectively. The seventh switch should allow you you to run the clock in 4 segment display mode.

### External hardware

PMOD 2 segment display, possible 4 segment


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |         |
| 1 | Clock Option - 10 MHz  |   |         |
| 2 | Clock Option - 12 MHz  |   |         |
| 3 | Clock Option - 14 MHz  |   |         |
| 4 | Arduino Mode  |   |         |
| 5 | Minute Display  |   |         |
| 6 | Hour Display  |   |         |
| 7 | 4 Digit Mode  |   |         |


### Chip location

{{< shuttle-map "tt07" "71" >}}
