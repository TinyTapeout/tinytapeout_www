---
hidden: true
title: "967 Basilisc-2816"
weight: 36
---

## 967 : Basilisc-2816

* Author: Toivo Henningsson
* Description: Small 2-bit serial 8/16 bit CPU
* [GitHub repository](https://github.com/toivoh/tt07-basilisc-2816-cpu)
* [GDS submitted](https://github.com/toivoh/tt07-basilisc-2816-cpu/actions/runs/9249808965)
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

Basilisc-2816 is a small 2-bit serial 8/16 bit processor.
It is made to work together with a RAM emulator implementing a custom serial protocol, which can be supported by the RP2040 microcontroller on the Tiny Tapeout 06 Demo Board.

Features:

- 64 kB address space
- 8x 8-bit registers that can be paired into 4x 16-bit registers
- 16 bits/instruction (some instructions might take an additional 16 bit immediate)
- 4-bit wide serial interface to RAM emulator: 2x TX and 2x RX
  - Saves most pins for other purposes
- 2-bit serial execution:
  - ALU operations etc are calculated 2 bits/cycle
  - 2-bit-serial register file with two read/write ports realized as a bank of shift registers
  - Saves area compared to processing 8/16 bits per cycle
  - No point in calculating faster than the memory interface allows
- Quite regular and orthogonal instruction encoding
- Instruction forms: (`add/adc/sub/sbc/and/or/xor/mov`)
  - `op dest, reg`, where `dest` can be
    - `reg`
    - `[r16 + imm2]`
    - `[r16 + r8]`
    - `[r16]` with postincrement/predecrement (2 steps for 16 bit operations)
    - `[imm7] / [2*imm7]`: Zero page, `[2*imm7]` is for 16 bit operations
  - `op reg, src`
    - Anything that `dest` can be
    - `sign_extend(r8)`
    - `zero_extend(r8)`
    - `sign_extend(imm6)`
    - `sign_extend(imm8)` for `mov`
- 13 branch conditions:
  - signed / unsigned `&amp;gt; &amp;gt;= &amp;lt; &amp;lt;=` (includes carry / not carry)
  - equal / not equal
  - signed / not signed
  - always
- 3 instruction prefetch queue

### How to test

TODO


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | rx_in[0]  | tx_out[0]  |         |
| 1 | rx_in[1]  | tx_out[1]  |         |
| 2 |   | tx_fetch  |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "967" >}}
