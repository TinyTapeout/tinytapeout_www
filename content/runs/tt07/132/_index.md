---
hidden: true
title: "132 Ripple Carry Adder 8 bit"
weight: 103
---

## 132 : Ripple Carry Adder 8 bit

* Author: Jason Kaufmann
* Description: Adds two 8 bit numbers together
* [GitHub repository](https://github.com/jasonkaufmann/tt07-fulladder8bit)
* [GDS submitted](https://github.com/jasonkaufmann/tt07-fulladder8bit/actions/runs/9332486579)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The "Ripple Carry Adder 8 bit" project adds two 8-bit numbers together using a ripple carry adder (RCA) architecture. This is implemented using a series of full adders, each of which adds two bits along with a carry-in from the previous less significant bit. The result is an 8-bit sum and a carry-out bit for the most significant bit.

The project consists of the following modules:

1. `halfadder`: A simple module that computes the sum and carry-out of two 1-bit inputs.
2. `fulladder`: A module that uses two `halfadder` instances to add three 1-bit inputs (two bits and a carry-in) and produces a sum and carry-out.
3. `rca8`: An 8-bit ripple carry adder module that cascades eight `fulladder` instances to add two 8-bit numbers.
4. `tt_um_example`: The top module that connects the inputs and outputs to the `rca8` module, performing the addition operation and providing the result through the output pins.

The `tt_um_example` module takes two 8-bit inputs (`ui_in` and `uio_in`), adds them using the `rca8` module, and outputs the 8-bit sum (`uo_out`).

### How to test

To test the "Ripple Carry Adder 8 bit" project:

1. Provide two 8-bit numbers as inputs via the `ui_in` and `uio_in` pins.
2. Observe the 8-bit sum output on the `uo_out` pins.
3. Ensure that all connections are made correctly as per the pinout configuration.

For example, if you input the binary numbers `00001101` (13 in decimal) and `00000111` (7 in decimal) on `ui_in` and `uio_in` respectively, the output on `uo_out` should be `00010010` (20 in decimal).

### External hardware

No external hardware is required for this project. It operates purely based on the digital inputs provided and generates a digital output. However, for testing and demonstration purposes, you may use input switches and output LEDs or a similar setup to visualize the input and output binary numbers.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | A0  | OUT0  | B0        |
| 1 | A1  | OUT1  | B1        |
| 2 | A2  | OUT2  | B2        |
| 3 | A3  | OUT3  | B3        |
| 4 | A4  | OUT4  | B4        |
| 5 | A5  | OUT5  | B5        |
| 6 | A6  | OUT6  | B6        |
| 7 | A7  | OUT7  | B7        |


### Chip location

{{< shuttle-map "tt07" "132" >}}
