---
hidden: true
title: "15 Event Denoising Circuit"
weight: 107
---

## 15 : Event Denoising Circuit

* Author: Emily Lee
* Description: Implementing a Denoiser for Event Based Data in Silicon
* [GitHub repository](https://github.com/nerfectt/tt05-verilog-demo)
* [GDS submitted](https://github.com/nerfectt/tt05-verilog-demo/actions/runs/6750545350)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

The 8 switches correspond to the tuple data input (L-R):
Switches 1 & 2: Value of x (2 bits)
Switches 3 & 4: Value of y ''
Switches 5 & 6: Value of p ''
Switches 7 & 8: Value of t ''

The denoiser is implemented as a debouncer. A high or low event will only be output if the data
remains the same for 5 clock cycles. Due to white/thermal noise in an event camera, a cluster of
coordinates that have no movement may incorectly spike high and the result would be a singular bright bit.
The debouncing avoids this by first ensuring the event is consistent before outputting.


### How to test

Switches (L-R) 5 & 6 corresponds to the input value of the polarity of the tuple.
If a high event is wanted - switch 5 should be low and switch 6 should be high.
If a low event is wanted = switch 5 must be low, and switch 6 must be low.
This will cause the chip to output the debounced tuple corresponding to a high or low event.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | bit 1 of x  | bit 1 of x | Unused |
| 1 | bit 0 of x  | bit 0 of x | Unused |
| 2 | bit 1 of y  | bit 1 of y | Unused |
| 3 | bit 0 of y  | bit 0 of y | Unused |
| 4 | bit 1 of p - no real use  | bit 1 of p | Unused |
| 5 | toggles event to be passed through if high  | bit 0 of p | Unused |
| 6 | bit 1 of t  | bit 1 of t | Unused |
| 7 | bit 0 of t  | bit 0 of t | Unused |
