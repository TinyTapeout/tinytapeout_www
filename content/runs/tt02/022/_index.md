---
hidden: true
title: "22 A LED Flasher"
weight: 23
---

## 22 : 0b 000 010 110 : A LED Flasher

* Author: Ben Everard
* Description: Select different inputs to generate different LED patterns
* [GitHub repository](https://github.com/benevpi/tt02-LED-flasher)
* [Most recent GDS build](https://github.com/benevpi/tt02-LED-flasher/actions/runs/3593379517)
* [Wokwi](https://wokwi.com/projects/342981109408072274) project
* [Extra docs](https://github.com/benevpi/tt02-LED-flasher/blob/main/README.md)
* Clock: 0 Hz
* External hardware: A LED on each pin

Image path is broken

### How it works

see How To Test

### How to test

 input 1 - clock input input 2 - feed NOT LED 1 back into the shift register -- this creates a pattern where every other LED is switched on input 3 - feed 1 into the shift register if both the first two LEDs are off. This creates a pattern where every third LED is on input 4 - feed 1 into the shift register if the first three LEDs are off. This creates a pattern where every fourth LED is on input 5 - feed 1 into the shift register if all the LEDs are off. This creates a pattern of one light scanning across the LEDs input 6 - set the direction of the shift register input 7 - toggles fixed direction or alternating direction. If alternating direction is set, the direction of the shift register will flip if all the LEDs are off input 8 - enable the clock divider

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | LED1 |
| 1 | not_1  | LED2 |
| 2 | not_1_2  | LED3 |
| 3 | not_1_2_3  | LED4 |
| 4 | not_all  | LED5 |
| 5 | direction  | LED6 |
| 6 | toggle_direction  | LED7 |
| 7 | clock_div_enable  | LED8 |
