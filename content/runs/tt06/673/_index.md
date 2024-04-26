---
hidden: true
title: "673 Notre Dame Dorms LED"
weight: 78
---

## 673 : Notre Dame Dorms LED

* Author: Allison Fleming & Daniel Yu
* Description: Solves a puzzle based on the correct selection of Notre Dame dorms
* [GitHub repository](https://github.com/aflemin7/tinytapeout)
* [GDS submitted](https://github.com/aflemin7/tinytapeout/actions/runs/8756893364)
* [Wokwi](https://wokwi.com/projects/390913889347409921) project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

There are eight switches on this DIP Switch, each representing a dorm on campus. The LED can be lit up with a minimum of three switches turned on. These three switches represent the best male dorm (Alumni, Carroll, Keenan, or Dillon), the best female dorm (Flaherty, Welsh Fam, or PE), and the best gender-neutral dorm (Fischer Grad). For example, a valid combination would be Alumni, Flaherty, Fischer Grad.

Switch #

1- Alumni,
2- Carroll,
3- Keenan,
4- Dillon,
5- Flaherty,
6- Welsh Fam,
7- Pasquerilla East,
8- Fischer Grad

### How to test

This puzzle is supposed to be a trial and error practice for students to learn about logic gates. Thus, to test it, play around with using different switches to see what lights up the LED.

### External hardware

One external LED is needed


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  |  |  |
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "673" >}}
