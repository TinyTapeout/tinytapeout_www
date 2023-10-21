---
hidden: true
title: "3 Scrolling Binary Matrix display"
weight: 4
---

## number : 0b000000011 : Scrolling Binary Matrix display

* Author: Chris
* Description: Display scrolling binary data from input pin on 8x8 SK9822 LED matrix display
* [GitHub repository](https://github.com/chrisruk/matrixchip)
* [Most recent GDS build](https://github.com/chrisruk/matrixchip/actions/runs/3500414798)
* HDL project
* [Extra docs](https://github.com/chrisruk/matrixchip/blob/main/README.md)
* Clock: 6000 Hz
* External hardware: Requires 8x8 matrix SK9822 LED display and 3.3V to 5V logic level shifter to convert the data and clock signals to the correct voltage for the display.

![picture](images/animation.gif)

### How it works

Uses 8x8 matrix SK9822 LED display to scroll binary data as 0s and 1s in a simple font, from the input pin.  Designed in verilog and tested using iCEstick FPGA Evaluation Kit.  Each LED takes a 32 bit value, consisting of r,g,b and brightness.

### How to test

Need 8x8 matrix SK9822 LED display and level shifter to convert output clock and data logic to 5V logic.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | LED Clock |
| 1 | reset  | LED Data |
| 2 | digit  | none |
| 3 | none  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
