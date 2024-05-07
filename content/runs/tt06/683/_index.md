---
hidden: true
title: "683 Random number generator"
weight: 183
---

## 683 : Random number generator

* Author: VineetaVNair &amp; ShilpaPavithran
* Description: Randomly generates bit stream
* [GitHub repository](https://github.com/vinizz/tt06-RNG)
* [GDS submitted](https://github.com/vinizz/tt06-RNG/actions/runs/8755179782)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Based upon user choice, LFSR data is used to randomly generate bit streams

### How to test

Vary input seed to change output bits randomly and observe the same when connected to LEDs.

### External hardware

Displays and LED can be added


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | seed[0]  | output_data[0]  |      |
| 1 | seed[1]  | output_data[1]  |      |
| 2 | seed[2]  | output_data[2]  |      |
| 3 | seed[3]  | output_data[3]  |      |
| 4 | mode[0]  | output_data[4]  |      |
| 5 | mode[1]  | output_data[5]  |      |
| 6 |   | output_data[6]  |      |
| 7 |   | output_data[7]  |      |


### Chip location

{{< shuttle-map "tt06" "683" >}}
