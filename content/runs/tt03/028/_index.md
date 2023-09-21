---
hidden: true
title: "28 LED Panel Driver"
weight: 29
---

## 28 : LED Panel Driver

* Author: Tom Keddie
* Description: Drives a 16x16 P10 LED panel
* [GitHub repository](https://github.com/TomKeddie/tinytapeout-2023-1a)
* [Most recent GDS build](https://github.com/TomKeddie/tinytapeout-2023-1a/actions/runs/4789487984)
* HDL project
* [Extra docs]()
* Clock: 6000 Hz
* External hardware: led panel, level converter to 5V logic

![picture](images/2023-04-15_07-18-57.jpg)

### How it works

* The circuit updates half of a P10 16x16 LED display module
* It initially displays the string TT03
* It provides a 600baud uart input to
  - paint pixels
  - erase pixels
  - clear the display
  - change the displayed colour
* Functionality is limited by resource availability and clock rate
  - single colour at once
  - no double buffer, updates may have artifacts
  - refresh rate is low, some flicker is observed (16*8=128 pixels at 6kHz is ~46Hz, plus overhead)
* Mode pin to allow for 2 different clocking patterns


### How to test

* Connect the display module as per the outputs
* Connect the uart
* Power on and see the TT03 text
* If the display is swapped by quadrant change the mode pin
* Use the script(s) in the software directory to control the display


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | red |
| 1 | reset  | blue |
| 2 | uart  | b |
| 3 | mode  | blank |
| 4 | none  | green |
| 5 | none  | a |
| 6 | none  | clk |
| 7 | none  | latch |
