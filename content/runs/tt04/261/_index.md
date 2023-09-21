---
hidden: true
title: "261 Pseudo Random Number Generator"
weight: 91
---

## 261 : Pseudo Random Number Generator

* Author: International Hellenic University - Department of Information and Electronic Engineering
* Description: This project implements a pseudo-random number generator using Verilog. It generates pseudo-random numbers and outputs them to drive two 7-segment displays.
* [GitHub repository](https://github.com/IIntzes/tt4_prng)
* [GDS submitted](https://github.com/IIntzes/tt4_prng/actions/runs/6113917957)
* HDL project
* [Extra docs](https://github.com/IIntzes/tt4_prng/blob/main/README.md)
* Clock: 50000000 Hz
* External hardware: 7 segment display

Image path is broken

### How it works

The pseudo-random number generator is based on LFSR. It takes three inputs:

- `clk`: Clock input.
- `en`: Enable signal.
- `rst_n`: Active-low reset signal.

The generator produces 8-bit pseudo-random numbers, which can be used to control two 7-segment displays.
As source of pseudo-randomnes used 2 LFSRs. One that works with 8 bit and one with 16 bit. The circuit dont have input data, just 1 clock and 1 enable pin. The output will be a 7 segment display, so 14 output pins.
The 16 bit LFSR produce the input of a 16-to-8 multiplexer and the 8 bit LFSR produce the selection bits of 16-to-8 multiplexer.
The 16-to-8 multiplexer is implemented by 8 2-to-1 multiplexers.
The final stage is convert the data readable by 2 7 segment displays.

LFSR16 ------ bit 0  ------> | 16-to-8 mux   |
------ bit 1  ------> |               |----------> output 0
.                     |               |----------> output 1
.                     |               |        .
.                     |inputs         |        .
------ bit 15 ------> |               |        .
|               |
|               |----------> output 7
LFSR8  ------ bit 0  ------> |select         |
------ bit 1  ------> |               |
.                     |               |
.                     |               |
.                     |               |
------ bit 7 ------>  |               |


### How to test

To test the pseudo-random number generator, you can follow these steps:

- Connect the `clk`, `en`, and `rst_n` signals appropriately.
- Connect 2 7 segments display as output.
- Apply clock pulses at 50MHz and high logic control signals at `en` to generate and display pseudo-random numbers.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk  | segment0 a | segment1 b |
| 1 | en  | segment0 b | segment1 c |
| 2 | rst_n  | segment0 c | segment1 d |
| 3 | n/a  | segment0 d | segment1 e |
| 4 | n/a  | segment0 e | segment1 f |
| 5 | n/a  | segment0 f | segment1 g |
| 6 | n/a  | segment0 g | n/a |
| 7 | n/a  | segment1 a | n/a |
