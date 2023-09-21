---
hidden: true
title: "23 4-bit Multiplier"
weight: 24
---

## 23 : 4-bit Multiplier

* Author: Fernando Dominguez Pousa
* Description: 4-bit Multiplier based on single bit full adders
* [GitHub repository](https://github.com/kuriousd/tt02-4bit-multiplier)
* [Most recent GDS build](https://github.com/kuriousd/tt02-4bit-multiplier/actions/runs/3516782325)
* HDL project
* [Extra docs]()
* Clock: 2500 Hz
* External hardware: Clock divider to 2500 Hz. Seven segment display with dot led. 8-bit DIP Switch



### How it works

Inputs to the multiplier are provided with the switch. As only eight inputs are available including clock and reset, only three bits remain available for each multiplication factor. Thus, a bit zero is set as the fourth bit. The output product is showed in the 7 segment display. Inputs are registered and a product is calculated. As output is 8-bit number, every 500ms a number appears. First the less significant 4 bits, after 500ms the most significant. When less significant 4-bits are displayed, the led dot including in the display is powered on.

### How to test

HDL code is tested using Makefile and cocotb. 4 set of tests are included: the single bit adder, the 4-bit adder, the 4-bit multiplier and the top design. In real hardware, the three less significant bits can create a number times the number created with the next three bits. Reset is asserted with the seventh bit of the switch.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment_1 (o_segments[0]) |
| 1 | reset  | segment_2 (o_segments[1]) |
| 2 | i_factor_a[0]  | segment_3 (o_segments[2]) |
| 3 | i_factor_a[1]  | segment_4 (o_segments[3]) |
| 4 | i_factor_a[2]  | segment_5 (o_segments[4]) |
| 5 | i_factor_b[3]  | segment_6 (o_segments[5]) |
| 6 | i_factor_b[4]  | segment_7 (o_segments[6]) |
| 7 | i_factor_b[5]  | segment_dot (o_lsb_digit) |
