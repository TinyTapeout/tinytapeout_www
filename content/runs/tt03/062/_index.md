---
hidden: true
title: "62 FSK modem"
weight: 63
---

## 62 : FSK modem

* Author: Balint Kovacs
* Description: Very simple FSK modem, comparable to Bell 103
* [GitHub repository](https://github.com/dratini0/tt03-fsk-modem)
* [Most recent GDS build](https://github.com/dratini0/tt03-fsk-modem/actions/runs/4778901456)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: 



### How it works

On the transmit side, it has two triangle wave synthesizers.
The frequency of one can be altered by the data in pin, and the other one can be mixed in for DTMF.

On the receive side, it takes the input, heterodynes it with some square waves, and then filters I and Q over a 31 tap FIR filter.
Finally, a phase detector is applied, that output is differentiated, and filtered for glitches.
The noise immunity of this approach is questionable.


### How to test

* Set registers over SPI.
* Connect the "incoming" phone line to a comparator, and to samples_in.
* Connect the "outgoing" phone line to an R-2R DAC, and to samples_out.
* Connect a serial port to data_in and data_out.
* Enjoy squawking 300bps serial!


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | data_out |
| 1 | reset  | valid_out |
| 2 | cs_n  | samples_out[0] |
| 3 | sck  | samples_out[1] |
| 4 | mosi  | samples_out[2] |
| 5 | data_in  | samples_out[3] |
| 6 | none  | samples_out[4] |
| 7 | samples_in  | samples_out[5] |
