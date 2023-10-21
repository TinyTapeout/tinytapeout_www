---
hidden: true
title: "151 Beep Boop Traffic Light Controller"
weight: 152
---

## number : 0b010010111 : Beep Boop Traffic Light Controller

* Author: Anish Singhani
* Description: Sequencer for a traffic light with a walk button, with timings tuned to match the iconic 'beep boop' streetlight formerly installed in front of Carnegie Mellon University
* [GitHub repository](https://github.com/asinghani/tt02-beepboop)
* [Most recent GDS build](https://github.com/asinghani/tt02-beepboop/actions/runs/3600275715)
* HDL project
* [Extra docs]()
* Clock: 100 Hz
* External hardware: LEDs, noisemaker, button



### How it works

Press the walk button and the traffic light will turn red, then the walk signal and 'beep boop' will begin

### How to test

See inputs and outputs

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | red |
| 1 | reset  | yellow |
| 2 | walk button  | green |
| 3 | none  | walk |
| 4 | none  | no walk |
| 5 | none  | noisemaker |
| 6 | none  | none |
| 7 | none  | none |
