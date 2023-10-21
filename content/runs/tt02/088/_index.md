---
hidden: true
title: "88 Frequency Counter"
weight: 89
---

## 88 : 0b001011000 : Frequency Counter

* Author: Andrew Ramsey
* Description: Estimates the frequency of an input signal
* [GitHub repository](https://github.com/ARamsey118/tiny_tapeout_freq_counter)
* [Most recent GDS build](https://github.com/ARamsey118/tiny_tapeout_freq_counter/actions/runs/3599337352)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: Clock and test signal generator



### How it works

'Diffs' (XORs) the previous input with the current one to detect any edges (rising or falling). The edges are then fed into a windowed sum (think moving average, but without the division step). The summation is then converted into a value from 0-9 based on how close to the maximum frequency it is, where 0 is [0, 10)%, 1 is [10, 20)%, etc. which is displayed on the seven segment.

### How to test

Input a clock into the clock pin, toggle reset, and verify that the seven segment reads 0. Then apply a test signal and check that the seven segment displays the expected relationship between the clock and test signals. The actual frequency of the clock doesn't matter as long as timing constraints of the chip are met. 1000 Hz makes for convenient math and is a good starting point. If needed, the design will loop the input signal back to the output for a quick sanity check.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | signal  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | signal |
