---
hidden: true
title: "12 German Traffic Light State Machine"
weight: 13
---

## 12 : 0b 000 001 100 : German Traffic Light State Machine

{{< tt-scanchain-switches "000001100" >}}

* Author: Jens Schleusner
* Description: A state machine to control german traffic lights at an intersection.
* [GitHub repository](https://github.com/JensIMS/tt02-trafficlight)
* [Most recent GDS build](https://github.com/JensIMS/tt02-trafficlight/actions/runs/3451257074)
* [Wokwi](https://wokwi.com/projects/347690870424732244) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: An additional inverter is required to generate the pedestrian red signals from the green output. Hookup your own LEDs for the signals.



### How it works

A state machine generates signals for vehicle and pedestrian traffic lights at an intersection of a main street and a side street. A blinking yellow light for the side street is generated in the reset state.

### How to test

Provide a clock, hook up LEDs and generate a reset signal to reset the intersection to all-red. If your leave the reset signal enabled, a blinking yellow light is shown for the side street.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | main street red |
| 1 | reset  | main street yellow |
| 2 | none  | main street green |
| 3 | none  | main street pedestrian green |
| 4 | none  | side street red |
| 5 | none  | side street yellow |
| 6 | none  | side street green |
| 7 | none  | side street pedestrian green |
