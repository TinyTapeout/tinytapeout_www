---
hidden: true
title: "611 Stepper"
weight: 205
---

## 611 : Stepper

* Author: Miguel de Jesús Salazar Pedraza
* Description: Stepper Control Bipolar Motor
* [GitHub repository](https://github.com/miguelsape/msalazar)
* [GDS submitted](https://github.com/miguelsape/msalazar/actions/runs/8527104447)
* HDL project
* [Extra docs](None)
* Clock: 1000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The project consists of a state machine with 4 outputs, which is used to control a bipolar stepper motor.

### How to test

The system has an external clock input, a reset input, a control input for selecting the direction of rotation of the motor, an enable input and 4 outputs for the stepper motor coils.

### External hardware

The system requires an external clock input to control the speed of the pulses and thus regulate the rotation speed of the motor.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Unused | Unused | Output Bit 0 |
| 1 | Unused | Unused | Output Bit 1 |
| 2 | Unused | Unused | Output Bit 2 |
| 3 | Unused | Unused | Output Bit 3 |
| 4 | Unused | Unused | enable |
| 5 | Unused | Unused | direction |
| 6 | Unused | Unused | Unused |
| 7 | Unused | Unused | Unused |

### Chip location

{{< shuttle-map "tt06" "611" >}}
