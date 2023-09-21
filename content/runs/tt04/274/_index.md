---
hidden: true
title: "274 Microrobotics FSM"
weight: 51
---

## 274 : Microrobotics FSM

* Author: Lucas Irribarra, Felipe Rifo
* Description: Simple FSM for Micro-srobots
* [GitHub repository](https://github.com/FRifoM99/tt04_MicroRobotics_FSM)
* [GDS submitted](https://github.com/FRifoM99/tt04_MicroRobotics_FSM/actions/runs/6116335621)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

A simple FSM controls the direction of a micro-robot based on sensors placed around the robot.
The speed is driven by a PWM signal with an 8-bit resolution that can be set through input pins when the RESET pin is active.

The design also supports the use of an H bridge to allow the motors bidirectional rotation.


### How to test

After reset, the PWM value should be setted by the input pins and the signal is on one of the output pins for testing.
Experiment by changing the inputs to change the states of the FSM and the motor directions.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | motor B left | pwm resolution bit 0 |
| 1 | none  | motor B Right | pwm resolution bit 1 |
| 2 | none  | motor A Left | pwm resolution bit 2 |
| 3 | none  | motor A Right | pwm resolution bit 3 |
| 4 | none  | 0 | pwm resolution bit 4 |
| 5 | Front sensor  | 0 | pwm resolution bit 5 |
| 6 | Left sensor  | 0 | pwm resolution bit 6 |
| 7 | Rigt sensor  | pwm signal | pwm resolution bit 7 |
