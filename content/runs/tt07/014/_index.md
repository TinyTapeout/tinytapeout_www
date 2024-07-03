---
hidden: true
title: "14 Digital Timer"
weight: 53
---

## 14 : Digital Timer

* Author: Francisca Donoso
* Description: The circuit acts as a configurable timer displaying the remaining time in binary form as time passes
* [GitHub repository](https://github.com/FranciscaDB/tt07-wokwi-Digital-Timer)
* [GDS submitted](https://github.com/FranciscaDB/tt07-wokwi-Digital-Timer/actions/runs/9277537247)
* [Wokwi](https://wokwi.com/projects/399163158804194305) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

A value is placed in the inputs from 0 to 7 to define how much it counts. Then, the start input is set to 1 to load that value, and it begins to count. When it reaches zero, the end flag is raised.

### How to test

### External hardware

It is recommended to use switches for the inputs, a button for the start input, and LEDs for all the outputs.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   | in_start        |
| 1 |   |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   | out_state        |
| 5 |   |   | out_end_flag        |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "14" >}}
