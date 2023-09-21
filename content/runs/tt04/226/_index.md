---
hidden: true
title: "226 UIS Traffic Light"
weight: 98
---

## 226 : UIS Traffic Light

* Author: Jorge Eduardo Angarita Pérez
* Description: Traffic light control for LatinPractice Bootcamp at UIS
* [GitHub repository](https://github.com/Gior-gio/tt04-submission-TrafficLight)
* [GDS submitted](https://github.com/Gior-gio/tt04-submission-TrafficLight/actions/runs/6077346550)
* HDL project
* [Extra docs](https://github.com/Gior-gio/tt04-submission-TrafficLight/blob/main/info.yaml)
* Clock: 32768 Hz
* External hardware: Three Different Color LEDs (Optional)



### How it works

This is a Finite State Machine (FSM) that utilizes an instantiated module of the "CLK Frequency Divider" by Ramón Sarmiento to perform internal counting for a traffic light control system.


### How to test

Set the first input to "1" and await the activation of the Red light. It will remain active for 30 seconds, provided the correct frequency is employed. Afterward, it will transition to the Green state within 3 seconds, remaining in this state for an additional 20 seconds. Finally, it will transition back to the Red state over the course of 3 seconds.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Start  | Green Light | none |
| 1 | none  | Yellow Light | none |
| 2 | none  | Red Light | none |
| 3 | none  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
