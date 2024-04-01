---
hidden: true
title: "202 Rotary encoder"
weight: 203
---

## 202 : 0b 011 001 010 : Rotary encoder

{{< tt-scanchain-switches "011001010" >}}

* Author: Wim Dams
* Description: Reads in a (incremental) rotary encoder and shows the result on the seven-segment display
* [GitHub repository](https://github.com/wimdams/tt02-rotary-encoder)
* HDL project
* [Extra docs]()
* Clock: 10000 Hz
* External hardware: Rotary encoder connected to pin A and pin B

![picture](images/rotary_encoder.png)

### How it works

The rotary pins are sampled every clock cycle. If a rising edge is detected on pin A, the 4 bit counter will be incremented/decremented depending on pin B. The counter is put on the seven segment display and a debounce time is started (125 clk cycles) 

### How to test

After reset, turn the rotary encoder and the counter should increment/decrement as you turn

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | Rotary encoder pin A (sometimes marked as CLK)  | segment c |
| 3 | Rotary encoder pin B (sometimes marked as DT)  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
