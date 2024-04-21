---
hidden: true
title: "616 BIT COMPARATOR"
weight: 82
---

## 616 : BIT COMPARATOR

* Author: FELIPE SD
* Description: Compare two bits 
* [GitHub repository](https://github.com/felipe-SD/tt06-wokwi-template-BIT_TEST)
* [GDS submitted](https://github.com/felipe-SD/tt06-wokwi-template-BIT_TEST/actions/runs/8712351716)
* [Wokwi](https://wokwi.com/projects/395355133883896833) project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This test consist in compare two bits determinating wich one is bigger or are equals

### How to test

To testo the project just insert 2 input bits (A and B) and then make a verification with the possible inputs
00
01
10
11
you should check the three outputs, fist one when both are equal, and second and thrid when any other input is bigger.
OUTPUT 1 = 1 when equals
OUTPUT 2 = 1 when bigger
OUTPUT 3 = 1 when bigger

### External hardware

Use leds to check the output
Used input with any desired devices.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | BIT A | OUTPUT A |  |
| 1 | BIT B | OUTPUT B |  |
| 2 |  | OUTPUT C |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "616" >}}
