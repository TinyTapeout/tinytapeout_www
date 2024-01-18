---
hidden: true
title: "66 MSF Clock"
weight: 67
---

## 66 : 0b 001 000 010 : MSF Clock

{{< tt-scanchain-switches "001000010" >}}

* Author: Jamie Wood & Daniel Cannell
* Description: MSF radio clock
* [GitHub repository](https://github.com/JMW95/tt03-msf-clock)
* [Most recent GDS build](https://github.com/JMW95/tt03-msf-clock/actions/runs/4780577983)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: 



### How it works

The MSF radio clock bitstream is synchronised, decoded, and the time displayed on an LED display driven by a shift-register.


### How to test

* Provide 12.5kHz clock to the clock pin, e.g. using the clock divider set to 0.
* Connect the data input to a WWVB / MSF receiver module.
* Connect the inverted input high if the module outputs a 1 when there is no carrier.
* Connect the shift_date input to a button. If held, the display will show date instead of time.
* Connect the shift register outputs to a 42-bit shift register chain. Bit 41 is shifted out first.

Bit | Segment
----|--------
41-35 | Hours tens G-A (41=G, 35=A)
34-28 | Hours ones G-A as above
27-21 | Minutes tens G-A as above
20-14 | Minutes ones G-A as above
13-7  | Seconds tens G-A as above
6-0   | Seconds ones G-A as above

Time and date are always both shifted out, so an 84-bit shift register will show both simultaneously.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | shift_clk |
| 1 | reset  | shift_data |
| 2 | data  | shift_latch |
| 3 | inverted  | none |
| 4 | shift_date  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
