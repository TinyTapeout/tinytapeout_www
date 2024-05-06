---
hidden: true
title: "552 2 bit Binary Calculator"
weight: 22
---

## 552 : 2 bit Binary Calculator

* Author: Nikhil Jindal
* Description: This is a 2 bit calculator that can multiply, subtract or even add 2 bit binary numbers.
* [GitHub repository](https://github.com/alexishereok/binary-calculator)
* [GDS submitted](https://github.com/alexishereok/binary-calculator/actions/runs/8724928800)
* [Wokwi](https://wokwi.com/projects/395034561853515777) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a 2 bit calculator that can multiply,add or subtract 2 bit binary numbers.

### How to test

In this, user enters 2 numbers A and B of 2 bit each and select the operation at a time and it calculates the answer and display it on 7 segment display.(A should be greater than B to check subtract if not then do 2's compliment)

### External hardware

Dip switch and 7 segment display screen.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | A0  | a  |      |
| 1 | A1  | b  |      |
| 2 | B0  | c  |      |
| 3 | B1  | d  |      |
| 4 | Multiply  | e  |      |
| 5 | Sum  | f  |      |
| 6 | Subtract  | g  |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "552" >}}
