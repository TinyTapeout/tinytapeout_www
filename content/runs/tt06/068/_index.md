---
hidden: true
title: "68 RGB Mixer demo"
weight: 102
---

## 68 : RGB Mixer demo

* Author: Matt Venn
* Description: Zero to ASIC demo project
* [GitHub repository](https://github.com/mattvenn/tt06-rgb-mixer)
* [GDS submitted](https://github.com/mattvenn/tt06-rgb-mixer/actions/runs/8753101289)
* HDL project
* [Extra docs](None)
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Debounce the inputs, drive an encoder module, and output a PWM signal for each encoder.

### How to test

Twist each encoder and the LEDs attached to the outputs should change in brightness.

By setting the debug port to 0, 1 or 2, the internal value of each encoder is output on the bidirectional outputs.

### External hardware

Use 3 digital encoders attached to the first 6 inputs.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | enc0 a | pwm0 | encoder bit 0 |
| 1 | enc0 b | pwm1 | encoder bit 1 |
| 2 | enc1 a | pwm2 | encoder bit 2 |
| 3 | enc1 b |  | encoder bit 3 |
| 4 | enc2 a |  | encoder bit 4 |
| 5 | enc2 b |  | encoder bit 5 |
| 6 | debug bit 0 |  | encoder bit 6 |
| 7 | debug bit 1 |  | encoder bit 7 |

### Chip location

{{< shuttle-map "tt06" "68" >}}
