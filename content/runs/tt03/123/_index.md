---
hidden: true
title: "123 5-bit Galois LFSR"
weight: 124
---

## 123 : 0b 001 111 011 : 5-bit Galois LFSR

{{< tt-scanchain-switches "001111011" >}}

* Author: Michael Bikovitsky
* Description: 5-bit Galois LFSR with configurable taps and initial state. Outputs a value every second.
* [GitHub repository](https://github.com/mbikovitsky/tt02-lfsr)
* [Most recent GDS build](https://github.com/mbikovitsky/tt02-lfsr/actions/runs/3603167022)
* HDL project
* [Extra docs]()
* Clock: 625 Hz
* External hardware: 



### How it works

https://en.wikipedia.org/wiki/Linear-feedback_shift_register#Galois_LFSRs

### How to test

1. Set the desired taps using the switches
2. Assert the reset_taps pin
3. Deassert reset_taps
4. Set the desired initial state
5. Assert reset_lfsr
6. Deassert reset_lfsr
7. Look at it go!
   - Values between 0x00-0x0F are output as hex digits.
   - Values between 0x10-0x1F are output as hex digits with a dot.
8. Did you know there is a secret CPU inside?


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset_lfsr  | segment b |
| 2 | reset_taps  | segment c |
| 3 | data_in1  | segment d |
| 4 | data_in2  | segment e |
| 5 | data_in3  | segment f |
| 6 | data_in4  | segment g |
| 7 | data_in5  | segment p |
