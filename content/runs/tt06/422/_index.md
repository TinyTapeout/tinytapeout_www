---
hidden: true
title: "422 Servotester"
weight: 20
---

## 422 : Servotester

* Author: Jonas Wuehr
* Description: Generate a 50 Hz test signal for RC servos.
* [GitHub repository](https://github.com/wuehr1999/tt06-wuehr1999-servotester)
* [GDS submitted](https://github.com/wuehr1999/tt06-wuehr1999-servotester/actions/runs/8681035615)
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

It uses a 10 MHz clock to create a counter, which has it's carry signal every 50Hz. Then there is a second counter to create the 1 - 2 millisecond high signal according to the user input.

### How to test

Connect a servo PWM signal to biderectional pin 7. According to the user input on the inputs it's position will change and be indicated on the 7-segment display.

### External hardware

A RC servo is required for testing.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | position bit 0  |   |      |
| 1 | position bit 1  |   |      |
| 2 | position bit 2  |   |      |
| 3 | position bit 3  |   |      |
| 4 | position bit 4  |   |      |
| 5 | position bit 5  |   |      |
| 6 | position bit 6  |   |      |
| 7 | position bit 7  |   |      |


### Chip location

{{< shuttle-map "tt06" "422" >}}
