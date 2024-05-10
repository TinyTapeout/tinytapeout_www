---
hidden: true
title: "654 RNG3"
weight: 154
---

## 654 : RNG3

* Author: Luca Collini
* Description: NIST RNG TESTS
* [GitHub repository](https://github.com/Lucaz97/RNG3_tt)
* [GDS submitted](https://github.com/Lucaz97/RNG3_tt/actions/runs/8560273862)
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
| 1 |   | valid  |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "654" >}}
