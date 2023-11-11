---
hidden: true
title: "203 7-segment Name Display"
weight: 158
---

## 203 : 7-segment Name Display

* Author: Gerry Chen
* Description: Displays names on the 7-segment display one at a time.
* [GitHub repository](https://github.com/gchenfc/Gerrys-Custom-ASIC-tt05)
* [GDS submitted](https://github.com/gchenfc/Gerrys-Custom-ASIC-tt05/actions/runs/6686315331)
* HDL project
* [Extra docs](https://github.com/gchenfc/Gerrys-Custom-ASIC-tt05)
* Clock: 10000000 Hz
* External hardware: 



### How it works

Uses a counter to display names on a 7-segment display.

A clock divider slows down the segments to 1 per second (default) as in the 7-segment counter template project.  The bottom 8-bits of the counter are output on the bidirectional outputs.
The bottom-5 bits of the dedicated inputs define how fast the clock divider is: if non-zero, this formula is used for the wraparound value of the divider: {ui_in[4:2], 18'b0, ui_in[1:0]}.
Setting the input to 0bxxx00001 will therefore have clock divider of 1 (i.e. match the clock) so that a manual debounced push-button can be used in place of the clock.

Each second, one letter of a name is displayed.  The top 3-bits of the dedicated inputs define which name is displayed.


### How to test

After reset, a new letter should displayed each second with a 10MHz input clock.
Changing the 3 MSB of the input should change which name is displayed.
Changing the 5 LSB of the input should change how quickly the letters are updated.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | name bit 2  | segment a | second counter bit 0 |
| 1 | name bit 1  | segment b | second counter bit 1 |
| 2 | name bit 0  | segment c | second counter bit 2 |
| 3 | clock divider bit 23  | segment d | second counter bit 3 |
| 4 | clock divider bit 22  | segment e | second counter bit 4 |
| 5 | clock divider bit 21  | segment f | second counter bit 5 |
| 6 | clock divider bit 1  | segment g | second counter bit 6 |
| 7 | clock divider bit 0  | dot | second counter bit 7 |

### Chip location

{{< shuttle-map "tt05" "203" >}}
