---
hidden: true
title: "183 7-Seg 'Tiny Tapeout' Display"
weight: 69
---

## 183 : 7-Seg 'Tiny Tapeout' Display

* Author: Tiny Tapeout 02 (J. Rosenthal)
* Description: This circuit will output a string of characters (’tiny tapeout’) to the 7-segment display.

* [GitHub repository](https://github.com/psychogenic/tt04-7segstringdisplay)
* [GDS submitted](https://github.com/psychogenic/tt04-7segstringdisplay/actions/runs/6092014809)
* [Wokwi](https://wokwi.com/projects/347497504164545108) project
* [Extra docs](https://wokwi.com/projects/347497504164545108)
* Clock: 1 Hz
* External hardware: 



### How it works

The logic to light the characters appears in the bottom half of the simulation window. The top half of the simulation window implements a modulo-11 counter. In other words, the counter increments up to 11 then resets. This counter is used to determine which character we should output to the 7-segment display. The truth table for the design can be found in the Design Spreadsheet: https://docs.google.com/spreadsheets/d/1-h9pBYtuxv6su2EC8qBc6nX_JqHXks6Gx5nmHFQh_30/edit


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | N/A  | segment a | none |
| 1 | N/A  | segment b | none |
| 2 | N/A  | segment c | none |
| 3 | Clock Disable (Test Mode)  | segment d | none |
| 4 | Test Logic A  | segment e | none |
| 5 | Test Logic B  | segment f | none |
| 6 | Test Logic C  | segment g | none |
| 7 | Test Logic D  | N/A | none |
