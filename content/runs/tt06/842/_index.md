---
hidden: true
title: "842 rng Test"
weight: 13
---

## 842 : rng Test

* Author: Luca Collini
* Description: HLS implementation of NIST 800.22 Monobit Test for RNGs.
* [GitHub repository](https://github.com/Lucaz97/tt06_RNG2)
* [GDS submitted](https://github.com/Lucaz97/tt06_RNG2/actions/runs/8528401403)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This design takes a bit every clock cycles and evaluates if the bit source is random. This particular test is the Monobit test from NIST 800.22.
The output is given every 65536 cycles. The is_random signal is to be checked only when the valid signal is high.

### How to test

Provide Clock and input bit.

### External hardware

Non for now. Planning to add soon

### How to use

send one bit per clock cycle to the epsilon port. check is_random when valid is high. The design evaluates every 65536 bits.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | epsilon  | is_random  |         |
| 1 |   | is_random_triosy_lz  |         |
| 2 |   | valid  |         |
| 3 |   | valid_triosy_lz  |         |
| 4 |   | epsilon_triosy_lz  |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "842" >}}
