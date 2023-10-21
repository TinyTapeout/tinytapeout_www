---
hidden: true
title: "56 TinyTapeout 2 LCD Nametag"
weight: 57
---

## 56 : 0b 000 111 000 : TinyTapeout 2 LCD Nametag

* Author: Tholin
* Description: Echoes out a predefined text onto a 20x4 character LCD.
* [GitHub repository](https://github.com/89Mods/tt2-lcd-namebadge)
* [Most recent GDS build](https://github.com/AvalonSemiconductors/tt2-lcd-namebadge/actions/runs/3603899616)
* HDL project
* [Extra docs]()
* Clock: 100 Hz
* External hardware: A 20x4 character LCD.



### How it works

Mostly just contains a ROM holding the text to be printed, and some logic to print the reset sequence and cursor position changes.

### How to test

Connect up a character LCD according to the pinout, set the clock and hit reset. Run using an extra slow clock, as there is no internal clock divider. It’ll send data to the display as fast as it’s able to. After that, it should initialize the display and start printing stuff. Also, connect LEDs to LED0 and LED1 if you want some blinkenlights.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | CLK  | RS |
| 1 | RST  | E |
| 2 | EF0  | D4 |
| 3 | EF1  | D5 |
| 4 | EF2  | D6 |
| 5 | NC  | D7 |
| 6 | NC  | LED0 |
| 7 | NC  | LED1 |
