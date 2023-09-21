---
hidden: true
title: "105 A (7, 1/2) Convolutional Encoder"
weight: 106
---

## 105 : A (7, 1/2) Convolutional Encoder

* Author: Jos van 't Hof
* Description: A (7, 1/2) Convolutional Encoder following the CCSDS 131.0-B-4 standard.
* [GitHub repository](https://github.com/Josvth/tt02-convolutional-encoder)
* [Most recent GDS build](https://github.com/Josvth/tt02-convolutional-encoder/actions/runs/3826192543)
* [Wokwi](https://wokwi.com/projects/349729432862196307) project
* [Extra docs](https://github.com/Josvth/tt02-convolutional-encoder/blob/main/README.md)
* Clock: 0 Hz
* External hardware: 



### How it works

A Convolutional Encoder adds additional bits to a data stream or message that may later be used to correct errors in the transmission of the data. The specific implemented encoder is used in space applications and is a half-rate (R = 1/2) code with a constrain lenght of seven (K = 7). This means that the encoder generates two output bits (called symbols) for every input bit, and the encoder has m = K - 1 = 6 states.

### How to test

Pull the write_not_shift input (IN1) high and set a 6-bit binary input (using IN2 to IN7), for example 0b100110. Provide a clock cycle on the clock input (IN0) to write the input into the shift register and clear the encoder. Pull the write_not_shift input (IN2) low to start shifting. Provide 24 clock cycles (2 each for the 6 shift registers and 6 encoder registers 2x(6+6) = 24). After each clock cycle a 0 or 1 is displayed on the 8-segment display. The encoded output for the input 0b100110 is 0b10111|0010001101000111001. The first 6 bits of the encoded output may be discared.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | write_not_shift  | segment b |
| 2 | shift_input_0  | segment c |
| 3 | shift_input_1  | segment d |
| 4 | shift_input_2  | segment e |
| 5 | shift_input_3  | segment f |
| 6 | shift_input_4  | segment g |
| 7 | shift_input_5  | segment dp (used to indicate clock) |
