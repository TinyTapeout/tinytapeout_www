---
hidden: true
title: "303 Simple NCO"
weight: 223
---

## 303 : Simple NCO

* Author: s1Pu11i
* Description: Simple NCO which can also output sine, square or sawtooth.
* [GitHub repository](https://github.com/s1Pu11i/tt06_simple_nco)
* [GDS submitted](https://github.com/s1Pu11i/tt06_simple_nco/actions/runs/8750375569)
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

Simple NCO to generate a sine, square or sawtooth output.
Sine wave is generated from a table and square and sawtooth from the phase accumulator.
Note: Output is unsigned 8bit.

### How to test

Modeselection is done with the uio[1:0]:
0: NONE, output is 0
1: SINE
2: SQUARE
3: SAWTOOTH
Frequency word is 16bit and is given as split into upper and lower part. Lower part is given with by
uio[2]='1' and ui[7:0]=word and the upper part by uio[3]='1' and ui[7:0]=word.

### External hardware

None.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |      |
| 1 |   |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "303" >}}
