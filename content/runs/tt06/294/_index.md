---
hidden: true
title: "294 8-bit PRNG"
weight: 115
---

## 294 : 8-bit PRNG

* Author: Jakub Duchniewicz
* Description: Pure Random Noise Generator using Linear Feedback Shift Register with 2 halves of the 16-bit internal states shifted in different directions and xor'ed
* [GitHub repository](https://github.com/JDuchniewicz/tt06-PRNG)
* [GDS submitted](https://github.com/JDuchniewicz/tt06-PRNG/actions/runs/8733263844)
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

The project is based on 16-bit [Linear Feedback Shift Register](https://en.wikipedia.org/wiki/Linear-feedback_shift_register) but with a small twist - at each clock cycle the LFSR combines it's output from 2 halves, upper half (bits 15 to 8) is rotated left and the lower (bits 7 to 0) are rotated right and XOR'ed at the end.

Inspired by [this StackOverflow post](https://stackoverflow.com/questions/14497877/how-to-implement-a-pseudo-hardware-random-number-generator).

### How to test

You can experiment with different initialization seeds and see how it changes the generated sequence - all 0 initialization does not work, the PRNG always returns 0s from such seed. The proposed usage of this project is as a noise generator that could be fed to e.g. musical synthesizer or be used as a non-cryptographic randomness generator.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Bit 0 initial PRNG seed  | Bit 0 output noise  |      |
| 1 | Bit 1 initial PRNG seed  | Bit 1 output noise  |      |
| 2 | Bit 2 initial PRNG seed  | Bit 2 output noise  |      |
| 3 | Bit 3 initial PRNG seed  | Bit 3 output noise  |      |
| 4 | Bit 4 initial PRNG seed  | Bit 4 output noise  |      |
| 5 | Bit 5 initial PRNG seed  | Bit 5 output noise  |      |
| 6 | Bit 6 initial PRNG seed  | Bit 6 output noise  |      |
| 7 | Bit 7 initial PRNG seed  | Bit 7 output noise  |      |


### Chip location

{{< shuttle-map "tt06" "294" >}}
