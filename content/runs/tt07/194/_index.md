---
hidden: true
title: "194 8 bit PRNG"
weight: 49
---

## 194 : 8 bit PRNG

* Author: Jorge Garcia Martinez
* Description: 8 bit PRNG based on Xorshift
* [GitHub repository](https://github.com/jorga20j/8bit_PRNG)
* [GDS submitted](https://github.com/jorga20j/8bit_PRNG/actions/runs/9161536217)
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

#### PRNG: Xorshift Overview

A Xorshift is a type of pseudorandom number generator (PRNG) that utilizes shift and XOR operations to generate a sequence of pseudorandom numbers. Introduced by George Marsaglia in 2003, the Xorshift is renowned for its speed and simplicity of implementation in both hardware and software platforms.

#### Theoretical Basis for an 8-bit Xorshift

##### State Register

The Xorshift algorithm employs a state register that, in the case of an 8-bit Xorshift, consists of an 8-bit integer. This register maintains the current state of the PRNG, which is updated with each iteration to produce the subsequent pseudorandom number.

##### Fundamental Operations

- **XOR**: The XOR (⊕) operation is essential for bit scrambling in the state. It takes two bits and returns 1 if the bits are different and 0 if they are the same.
- **Shift**: Shift operations (either left or right) move bits by a specified number of positions, introducing zeros into the vacated positions.

##### Sequence of Operations

At each step, the current state is altered using a series of XOR and shift operations. For instance, an 8-bit Xorshift might proceed as follows:

1. `x = x ⊕ (x &amp;lt;&amp;lt; a)`
2. `x = x ⊕ (x &amp;gt;&amp;gt; b)`
3. `x = x ⊕ (x &amp;lt;&amp;lt; c)`

Here, `x` denotes the current state, while `&amp;lt;&amp;lt;` and `&amp;gt;&amp;gt;` signify left and right shifts, respectively. The constants `a`, `b`, and `c` determine the magnitude of these shifts.

##### Period

The period of a Xorshift depends on both the number of bits in the state register and the choice of shift parameters `a`, `b`, and `c`. For an 8-bit register, the maximum achievable period is `2^8 - 1 = 255`, assuming the parameters are selected wisely to prevent short cycling.

### How to test

To test this random number generator you must place an 8-bit seed as input (ui_in) and after 2 cycles of latency you will obtain a random number at each clock cycle at the output (uo_out).
![RTL Module](images/tt_um_jorga20j_prng.svg)

For more information about rtl: <tt_um_jorga20j_prng.md>


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Seed bit 0  | Pseudo-Random number bit 0  |         |
| 1 | Seed bit 1  | Pseudo-Random number bit 1  |         |
| 2 | Seed bit 2  | Pseudo-Random number bit 2  |         |
| 3 | Seed bit 3  | Pseudo-Random number bit 3  |         |
| 4 | Seed bit 4  | Pseudo-Random number bit 4  |         |
| 5 | Seed bit 5  | Pseudo-Random number bit 5  |         |
| 6 | Seed bit 6  | Pseudo-Random number bit 6  |         |
| 7 | Seed bit 7  | Pseudo-Random number bit 7  |         |


### Chip location

{{< shuttle-map "tt07" "194" >}}
