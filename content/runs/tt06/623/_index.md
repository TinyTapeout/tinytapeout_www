---
hidden: true
title: "623 PWM"
weight: 61
---

## 623 : PWM

* Author: NoeReyes
* Description: This project involves Pulse Width Modulation, enabling the duty cycle to be adjusted between 10% and 90% using switches.
* [GitHub repository](https://github.com/Noe-Reyes/PWM)
* [GDS submitted](https://github.com/Noe-Reyes/PWM/actions/runs/8670485165)
* HDL project
* [Extra docs](None)
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Pulse Width Modulation (PWM) is a technique used in electronics to control the average voltage applied to a load by rapidly switching a digital signal on and off at varying duty cycles. This method is commonly employed in applications such as motor speed control, LED brightness adjustment, and power regulation. By adjusting the duty cycle of the signal, PWM enables precise control over the output voltage or power, allowing for efficient and flexible manipulation of electrical devices.

My project involves Pulse Width Modulation (PWM), allowing the duty cycle to be adjusted between 10% and 80% using 3 switches with 7 different combinations. Each combination increments the duty cycle by 10%. For example, '000' represents a 10% duty cycle, and '111' represents an 80% duty cycle. The PWM was designed for a frequency of 1KHz.

![PWM](https://github.com/Noe-Reyes/PWM/assets/165437989/048d0be0-40ac-4368-912a-0a85abb39774)

The above image represents the PWM module that was designed.

| [2:0] LOAD | Duty Cicle |
|------------|------------|
| 000        | 10%        |
| 001        | 20%        |
| 010        | 30%        |
| 011        | 40%        |
| 100        | 50%        |
| 101        | 60%        |
| 110        | 70%        |
| 111        | 80%        |

In the previous table, the variation of the duty cycle is shown as a function of the LOAD input combination.

### How to test

The LOAD input should be connected to a switch, CLK is connected to a 50MHz clock, and RESET to a button. To ensure proper operation, press RESET to set the initial conditions. Once this is done, choose the LOAD input combination to set the desired duty cycle.

### External hardware

The external hardware includes one LED, a 1k ohm resistor, and three 2-position switches.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | load 0 |  |  |
| 1 | load 1 |  |  |
| 2 | load 2 |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  | PWM |  |

### Chip location

{{< shuttle-map "tt06" "623" >}}
