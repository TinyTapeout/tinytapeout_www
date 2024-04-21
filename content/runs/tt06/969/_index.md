---
hidden: true
title: "969 PI-Based Fan Controller"
weight: 203
---

## 969 : PI-Based Fan Controller

* Author: Dominik Brandstetter
* Description: Temperature Based Fan Speed Controller
* [GitHub repository](https://github.com/DomnikBrandstetter/jku-tt06-PID_FanCTRL)
* [GDS submitted](https://github.com/DomnikBrandstetter/jku-tt06-PID_FanCTRL/actions/runs/8627696873)
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

This project involves reading a 4-bit ADC value through a dedicated interface.
Another a 4-bit interface allows the user to set the desired target value.
The integrated controller, designed with fixed parameters, regulates the fan speed
through a PWM (Pulse Width Modulation) output operating at approximately 25 kHz.
The controller maintains a minimum duty cycle of around 20%, and it has the capability
to increase this value up to 100%. The output consists of a signed 4-bit controller value
along with the corresponding PWM signal. Additionally, the current controller value can be read from
the 7-Segment-Display. This configuration ensures precise control and adjustment of the
fan speed based on the input parameters provided through the 4-bit interfaces,
with the added feature of fixed controller parameters for simplicity and stability.

### How to test

After reset, the fan controller should initiate operation, adjusting the fan speed based on the setpoint and ADC value.
The PWM output, set at approximately 25 kHz, regulates the fan speed.

### External hardware

4-Bit ADC, LED display, Fan


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | ADC_BIT_0 | segment_a | Controller_SET_BIT_0 |
| 1 | ADC_BIT_1 | segment_b | Controller_SET_BIT_1 |
| 2 | ADC_BIT_2 | segment_c | Controller_SET_BIT_2 |
| 3 | ADC_BIT_3 | segment_d | Controller_SET_BIT_3 |
| 4 | SET_BIT_0 | segment_e | Controller_SIGN_BIT_4 |
| 5 | SET_BIT_1 | segment_f |  |
| 6 | SET_BIT_2 | segment_g |  |
| 7 | SET_BIT_3 | PWM Output |  |

### Chip location

{{< shuttle-map "tt06" "969" >}}
