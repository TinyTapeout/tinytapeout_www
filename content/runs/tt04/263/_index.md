---
hidden: true
title: "263 FCFM 7-segment display"
weight: 103
---

## 263 : FCFM 7-segment display

* Author: Diego Sanz
* Description: Displays UCHILE-FCFM- into the 7-segment display
* [GitHub repository](https://github.com/DiegoSanzB/tinytapeout_submission)
* [GDS submitted](https://github.com/DiegoSanzB/tinytapeout_submission/actions/runs/6113937772)
* [Wokwi](https://wokwi.com/projects/375176944142127105) project
* [Extra docs](README.md)
* Clock: 0 Hz
* External hardware: 



### How it works

It uses a Ripple Counter made from DSR flip-flops to count each character from UCHILE-FCFM- and displays it into the 7-segment display, the logic behind was optimized using the Quine McCluskey algorithm.


### How to test

You can test the desing by stepping the clock to see UCHILE-FCFM- in the 7-segment display. Also you can disable the counter with the 3th input and input a counter value by hand using the 4th to 7th inputs.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock  | segment a | none |
| 1 | reset  | segment b | none |
| 2 | none  | segment c | none |
| 3 | counter_disable  | segment d | none |
| 4 | A (most significant bit of the counter)  | segment e | none |
| 5 | B  | segment f | none |
| 6 | C  | segment g | none |
| 7 | D (least significant bit of the counter)  | dot | none |
