---
title: Customisable Design - 7-Seg
tags: [customisable]
description: "Display a custom string of characters"
weight: 120
---

This circuit will output a string of characters ('tiny tapeout') to the 7-segment display.

The logic to light the characters appears in the bottom half of the simulation window.

The top half of the simulation window implements a modulo-11 counter. In other words, the counter increments up to 11 then resets. This counter is used to determine which character we should output to the 7-segment display.

The truth table for the design can be found in the [Design Spreadsheet](https://docs.google.com/spreadsheets/d/1-h9pBYtuxv6su2EC8qBc6nX_JqHXks6Gx5nmHFQh_30/edit?usp=sharing)

| SW      | Function| 
|---------|---------|
| 1       | N/A     | 
| 2       | Reset   | 
| 3       | N/A     |
| 4       | Clock Disable  | 
| 5       | A     | 
| 6       | B     |
| 7       | C     | 
| 8       | D     | 


Design [inspired by Rakesh Peter's tt01 submission](https://github.com/r4d10n/tinytapeout-HELLo-3orLd-7seg)

{{< wokwi 397140982440144897 >}}
<br>

{{% feedback %}}
