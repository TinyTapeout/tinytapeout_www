---
hidden: true
title: "61 MMM Finite State Machine (4 States)"
weight: 62
---

## 61 : 0b 000 111 101 : MMM Finite State Machine (4 States)

{{< tt-scanchain-switches "000111101" >}}

* Author: Alexandra Zhang Jiang
* Description: Finite State Machine for the Magnetic Microsystems and Microrobotics Research Lab at UCI
* [GitHub repository](https://github.com/Ale-ZJ/tt03-mmm-fsm)
* [Wokwi](https://wokwi.com/projects/362675777226104833) project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 3-electrode sensor and motors



### How it works

This chip will be incorporated in the microrobot that is being developed in lab.

### Inputs
The inputs consist of two bits I0 and I1, each one for a sensor that detects contamination in water to the left and right fo the robot respectively. 
The input bus goes to logic gates along with the Current State to calculate the Next State, which is then saved in a register (D-FlipFlop).

## States 
There are a total of four states: 
- 00 Start (default initial state of the robot, both motors are off)
- 01 Go Right (which enables Left Motor in order to go right) 
- 10 Go Left (which enables Right Motor in order to go left)
- 11 Straight (both motors are enabled to go straight)

The register will store the Current State (which is given by S0 and S1) at any given time.

## Outputs
This is a Moore Finite State Machine, meaning that the output only depends on the current state.
The outputs consist of two bits M0 and M1, each one turns on the motor on the right or left of the robot respectively.


### How to test

The truth table for the FSM can be found below.

| I0 | I1 | S0 | S1 | S0+ | S1+ | M0 | M1 |
|----|:--:|:--:|:--:|:---:|:---:|:--:|---:|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 
| 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 | 1 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | Enable Right Motor |
| 1 | reset  | Enable Left Motor |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | Sensor Left Input  | segment g |
| 7 | Sensor Right Input  | dot |
