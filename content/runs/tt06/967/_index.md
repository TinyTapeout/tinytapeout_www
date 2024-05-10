---
hidden: true
title: "967 jku-tt06-advanced-counter"
weight: 225
---

## 967 : jku-tt06-advanced-counter

* Author: Martin Putz
* Description: Multi-Digit Counter with changeable maximum values and carry over.
* [GitHub repository](https://github.com/k12005911/jku-tt06-advanced-counter)
* [GDS submitted](https://github.com/k12005911/jku-tt06-advanced-counter/actions/runs/8628055571)
* HDL project
* [Extra docs]()
* Clock: 1000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The design uses in it's core a series of modified 2-bit-up-down-counters that allow for setting a custom maximum value. Carry information is only provided if this is intended by the operating mode. The mode can is selected from individual inputs by a mode selection module. The output of the counters is serialized and encoded for the 7-segment-display.

### External hardware

For each digit used (due to limitations that's only 2) a push button in active high configuration is used. A third push button for the refreshing of limits is also required. Further more, 3 switches are used to determine the operating mode.
On the output side, for each digit an 8-bit-shift-register and a 7-segment-display is used, as the output value is serialized. For the shift clock two inverse outputs are provided, in case a shift register with both a load and output input. In that case, the shift_clk is used for loading and not_shift_clk is used for output. The design was made with the register HC595 in mind, but will work with other 8-bit shift registers.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Button 0 In  | Digit 0 Out  | Up-Down-Select In        |
| 1 | Button 1 In  | Digit 1 Out  | Set-Carry In        |
| 2 |   |   | Set-Max In        |
| 3 |   |   | Refresh-Limits In        |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   | Shift-Clk Out        |
| 7 |   |   | Not-Shift-Clk Out        |


### Chip location

{{< shuttle-map "tt06" "967" >}}
