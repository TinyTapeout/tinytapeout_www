---
hidden: true
title: "582 Universal Motor and Actuator Controller"
weight: 82
---

## 582 : Universal Motor and Actuator Controller

* Author: Assoc. Prof. Dinçer Gökcen, Ethem Buğra Arslan, Batu Cem Özyurt
* Description: bldc motor controller and autotuner for controller by MNS lab
* [GitHub repository](https://github.com/BatuCem/tt06-mnslab-bldc-0)
* [GDS submitted](https://github.com/BatuCem/tt06-mnslab-bldc-0/actions/runs/8756640953)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

For some motor driver and BLDC motor combinations with encoders, the controller works universally through its I2C interface via PID control and Nichols-Ziegler auto-tuning algorithm for automated PID constants.
I2C Addressing:
Slave Address: 0x72
Subaddresses:

### How to test

Test when a motor setup is ready by simply communicating through I2C with SCL at about 100kHz. With the adressing above, one can automate PID control or take over (override) to manual settings. Generated PWM and desired motor period is also interfaced through I2C and fully configurable.

### External hardware

Motor Driver has to be used in order to convert digital pwm signals to power signals.

BLDC motor with positive and negative inputs & at least 2 encoders must be used to infer speed and direction.

Pullup resistors are needed to communicate through i2c, if not provided.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | encoder_a  | motor_positive  | sda        |
| 1 | encoder_b  | motor_negative  |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 | scl  |   |         |


### Chip location

{{< shuttle-map "tt06" "582" >}}
