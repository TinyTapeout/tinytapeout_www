---
hidden: true
title: "47 4 bit counter on steamdeck"
weight: 48
---

## 47 : 0b 000 101 111 : 4 bit counter on steamdeck

* Author: 13arn
* Description: copy of my tt01 submission, enable first input and press button to use the counter
* [GitHub repository](https://github.com/13arn/tt02_counter_steamdeck)
* [Most recent GDS build](https://github.com/13arn/tt02_counter_steamdeck/actions/runs/3462179931)
* [Wokwi](https://wokwi.com/projects/341541108650607187) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

fsm that uses 1 input to progress abd count from 0 to 3. Other inputs have various logic to play with

### How to test

enable first input so it is on and connected to the button. All other inputs are off. Press button to progress the fsm.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
