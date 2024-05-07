---
hidden: true
title: "782 14 Hour Simple Computer"
weight: 185
---

## 782 : 14 Hour Simple Computer

* Author: Peter Schmidt-Nielsen
* Description: A very simple computer that renders to VGA, designed in the last 14 hours before the submission deadline
* [GitHub repository](https://github.com/petersn/tt06-submission)
* [GDS submitted](https://github.com/petersn/tt06-submission/actions/runs/8758277739)
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

Does it even work?

### How to test

TODO: Document this. I know, I'm awful, but I'm literally doing this in the last 14 hours of the submission deadline.

### External hardware

This project requires an external SPI SRAM, and also an external VGA breakout board! I'm going to make them, and give them out for free.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | vga_r  |      |
| 1 |   | vga_g  |      |
| 2 |   | vga_b  |      |
| 3 |   | vga_hs  |      |
| 4 |   | vga_vs  |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "782" >}}
