---
hidden: true
title: "69 Fibonacci & Gold Code"
weight: 70
---

## 69 : 0b 001 000 101 : Fibonacci & Gold Code

{{< tt-scanchain-switches "001000101" >}}

* Author: Daniel Estevez
* Description: This project includes two independent designs: a design that calculates terms of the Fibonacci sequence and displays them in hex one character at a time on a 7-segment display, and a Gold code generator that generates the codes used by CCSDS X-band PN Delta-DOR.
* [GitHub repository](https://github.com/daniestevez/tt02-gold-fibonacci)
* [Most recent GDS build](https://github.com/daniestevez/tt02-gold-fibonacci/actions/runs/3526309994)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: No external hardware is needed



### How it works

The Fibonacci calculator uses 56-bit integers, so the terms of the Fibonacci sequence are displayed using 7 hex characters. Since the TinyTapeout PCB only has one 7-segment display, the terms of the Fibonacci sequence are displayed one hex character at a time, in LSB order. The dot of the 7-segment display lights up whenever the LSB is being displayed. On each clock cycle, 4-bits of the next Fibonacci term are calculated using a 4-bit adder, and 4-bits of the current term are displayed in the 7-segment display. The 7-segment display is ANDed with the project clock, so that the digits flash on the display.
The Gold code generator computes a CCSDS X-band PN Delta-DOR Gold code one bit at a time using LFSRs. The output bit is shown on the 7-segment display dot. 6-bits of the second LFSR can be loaded in parallel using 6 project inputs in order to be able to generate different sequences. One of the project inputs is used to select whether the 7-segment display dot is driven by the Fibonacci calculator or by the Gold code generator.

### How to test

The project can be tested by manually driving the clock using a push button or switch. Just by de-asserting the reset and driving the clock, the digits of the Fibonacci sequence terms should appear on the 7-segment display. The output select input needs to be set to Gold code (high level) in order to test the gold code generator. The load enable input (active-low), as well as the 6 inputs corresponding to the load for the B register can be used to select the sequence to generate. The load value can be set in the 6 load inputs, and then the load enable should be pulsed to perform the load. This can be done with the clock running or stopped, as the load enable is asynchronous. After the load enable is de-asserted, for each clock cycle a new bit of the Gold code sequence should appear in the 7-segment display dot.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | {'segment a': 'Fibonacci hex digit'} |
| 1 | output select (high selects Gold code; low selects Fibonacci LSB marker) & Gold code load value bit 0  | {'segment b': 'Fibonacci hex digit'} |
| 2 | Fibonacci reset (active-low; asynchronous) & Gold code load value bit 1  | {'segment c': 'Fibonacci hex digit'} |
| 3 | Gold code load enable (active-low; asynchronous)  | {'segment d': 'Fibonacci hex digit'} |
| 4 | Gold code load value bit 2  | {'segment e': 'Fibonacci hex digit'} |
| 5 | Gold code load value bit 3  | {'segment f': 'Fibonacci hex digit'} |
| 6 | Gold code load value bit 4  | {'segment g': 'Fibonacci hex digit'} |
| 7 | Gold code load value bit 5  | {'none': 'Gold code output / Fibonacci LSB digit marker'} |
