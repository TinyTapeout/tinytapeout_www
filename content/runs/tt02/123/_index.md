---
hidden: true
title: "123 LED Chaser"
weight: 124
---

## 123 : 0b001111011 : LED Chaser

* Author: Bradley Boccuzzi
* Description: Push the button to fill in segments of the LED display, they will continue to shift and fill in the display until the button is released.`
* [GitHub repository](https://github.com/DaveyPocket/chaser_tt2)
* [Most recent GDS build](https://github.com/DaveyPocket/chaser_tt2/actions/runs/3599130372)
* [Wokwi](https://wokwi.com/projects/341178481588044372) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: None



### How it works

Input is button to input of shift register. Each segment of the 7 segment display is connected to an output of the shift register.

### How to test

Push switch number 8 to watch the LEDs fill in

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | none  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | shift register input  | none |
