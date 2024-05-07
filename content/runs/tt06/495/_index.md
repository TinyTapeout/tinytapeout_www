---
hidden: true
title: "495 BCD to single 7 segment display Converter"
weight: 147
---

## 495 : BCD to single 7 segment display Converter

* Author: Kelvin Kung
* Description: BCD to single 7 segment display
* [GitHub repository](https://github.com/kelvinutp/bcd-2-7segment-decoder)
* [GDS submitted](https://github.com/kelvinutp/bcd-2-7segment-decoder/actions/runs/8699935440)
* [Wokwi](https://wokwi.com/projects/395061443288867841) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

It uses multiple logic gates to transfrom binary input to a decimal number to display in a 7 segment display

### How to test

Input any binary number between 0-9.
2^3=IN0 (most significant bit)
2^2=IN1
2^1=IN2
2^0=IN3 (least significant bit)

### External hardware

For input use a dip switch with at least 4 outputs.
For output use a single 7 segment display with common cathode.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | B3  | A  |         |
| 1 | B2  | B  |         |
| 2 | B1  | C  |         |
| 3 | B0  | D  |         |
| 4 |   | E  |         |
| 5 |   | F  |         |
| 6 |   | G  |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "495" >}}
