---
hidden: true
title: "260 Variable Duty-Cycle TRNG"
weight: 127
---

## 260 : Variable Duty-Cycle TRNG

* Author: Thomas Pluck
* Description: Generates a random bit with a given probability with a special ring oscillator
* [GitHub repository](https://github.com/ThomasPluck/tt04-biased-trng)
* [GDS submitted](https://github.com/ThomasPluck/tt04-biased-trng/actions/runs/6077140176)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

This design is a close adaptation of the concept presented by:

Minh-Hai Nguyen; Cong-Kha Pham
A wide frequency range and adjustable duty cycle CMOS ring voltage controlled oscillator
https://ieeexplore.ieee.org/abstract/document/5670690

This design has seven 7-stage ring oscillators that have a final stage NAND which is takes as input
the inverter chain and the `ena` wire - that is, the oscillator should only run when `ena` is high.

The oscillators are all tied at their NAND-outputs to a single node which passes the signal
through an "inverter bias" system that are biased using Harald Pretl's vDAC system which uses
the first 4 input pins to select a voltage:

https://github.com/iic-jku/tt03-tempsensor/tree/main/src

Note: This circuit is only active when `ena` is enabled.

The inverter-bias system pass through two D-flip flops connected in series with their `set` signals tied high
and `reset` being connected to the `rst_n` control wire and their clocks being controlled by `CLK`. Finally,
these are passed through a `ena`-enabled `AND` which gates the final output of the TRNG.


### How to test

Simulate the analog, hope for the best.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | signal  | sample | none |
| 1 | control 1  | none | none |
| 2 | control 2  | none | none |
| 3 | control 3  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
