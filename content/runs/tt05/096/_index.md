---
hidden: true
title: "96 Ring Oscillator and Clock Source Switch"
weight: 40
---

## 96 : Ring Oscillator and Clock Source Switch

* Author: Dave Cox
* Description: A series of NOT gates with whip outs to measure self oscillation, and a clock switch
* [GitHub repository](https://github.com/davecoxhome/tinytapeout)
* [GDS submitted](https://github.com/davecoxhome/tinytapeout/actions/runs/6750963417)
* [Wokwi](https://wokwi.com/projects/380408455148316673) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

There are two functional blocks - a ring oscillator with multiple taps, and a glitchless clock switch.


### How to test

To test the oscillator - Input 0 is input to first inverter in the oscillator. One of the inverted outputs either 0 (slowest), 1 (mid), or 2 (fastest) should be connected to input 0. To test the clock switch - input 1 selects between clock0 (on input 2) and clock 1 (on input 3). Selected CLK appears on OUT3


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | 0 Osc In  | 0 OSC OutSlow/segment a | none |
| 1 | 1 ClkSel  | 1 OSC OutMid/segment b | none |
| 2 | 2 CLK0 in  | 2 OSC OutFast/segment c | none |
| 3 | 3 Clk1 in  | 3 ClkOut/segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | dot | none |
