---
hidden: true
title: "144 Logisim demo - LED blinker"
weight: 145
---

## 144 : 0b 010 010 000 : Logisim demo - LED blinker

* Author: Tholin
* Description: Example of how to use Logisim Evolution generated Verilog for TinyTapeout.
* [GitHub repository](https://github.com/AvalonSemiconductors/tt02-logisim-example)
* [Most recent GDS build](https://github.com/AvalonSemiconductors/tt02-logisim-example/actions/runs/3603613290)
* HDL project
* [Extra docs]()
* Clock: 2 Hz
* External hardware: A button for reset, some way to display the output (LEDs)



### How it works

Its a 4-bit ring-shift register with a single '1' cycling through it after reset.

### How to test

After starting the clock, the 4 outputs will remain off or in a random state until the reset input is activated. Then it should work as described.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | CLK  | O_0 |
| 1 | RST  | O_1 |
| 2 | none  | O_2 |
| 3 | none  | O_3 |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
