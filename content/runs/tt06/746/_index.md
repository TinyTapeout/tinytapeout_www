---
hidden: true
title: "746 PWM Controller"
weight: 79
---

## 746 : PWM Controller

* Author: Ziyi Zhao, Yuchen Ma
* Description:  A Low-Cost Pulse Width Modulation (PWM) Controller
* [GitHub repository](https://github.com/Yuchen1203/tt06-PWM-Controller)
* [GDS submitted](https://github.com/Yuchen1203/tt06-PWM-Controller/actions/runs/8754756153)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The PWM generates a 10 MHz PWM signal whose duty cycle can be adjusted using two buttons.
The PWM duty cycle can be increased or decreased in steps, constrained between 10% and 90%.

### How to test

Change the inputs ui_in to simulate button presses and check if the PWM duty cycle increases or decreases as expected.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | increase_duty |  | PWM_OUT |
| 1 | decrease_duty |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "746" >}}
