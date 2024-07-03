---
hidden: true
title: "907 7-Seg 'Tiny Tapeout' Display"
weight: 70
---

## 907 : 7-Seg 'Tiny Tapeout' Display

* Author: J. Rosenthal &amp; htfab
* Description: This circuit will output a string of characters (’tiny tapeout’) to the 7-segment display.
* [GitHub repository](https://github.com/htfab/tt07-7seg)
* [GDS submitted](https://github.com/htfab/tt07-7seg/actions/runs/8985107091)
* [Wokwi](https://wokwi.com/projects/397140982440144897) project
* [Extra docs]()
* Clock: 0 Hz

### How it works

The logic to light the characters appears in the bottom half of the simulation window. The top half of the simulation window implements a modulo-12 counter. In other words, the counter increments up to 11 then resets. This counter is used to determine which character we should output to the 7-segment display. The truth table for the design can be found in the [Design Spreadsheet](https://docs.google.com/spreadsheets/d/1-h9pBYtuxv6su2EC8qBc6nX_JqHXks6Gx5nmHFQh_30/edit).

### How to test

Turn all pins OFF, keep the clock running and watch the rolling text on the 7-segment display. Or turn pin 3 ON and manually select a letter using pins 4 to 7.

### External hardware

None


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | segment a  |         |
| 1 | reset (sync)  | segment b  |         |
| 2 |   | segment c  |         |
| 3 | clock override  | segment d  |         |
| 4 | clock bit 3  | segment e  |         |
| 5 | clock bit 2  | segment f  |         |
| 6 | clock bit 1  | segment g  |         |
| 7 | clock bit 0  |   |         |


### Chip location

{{< shuttle-map "tt07" "907" >}}
