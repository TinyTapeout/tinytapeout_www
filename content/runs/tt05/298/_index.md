---
hidden: true
title: "298 2-Bit ALU + Dice"
weight: 92
---

## 298 : 2-Bit ALU + Dice

* Author: Andrew Nam
* Description: This is an extremely professional design that Steve Jobs approves. It consists of a 2-bit ALU and an impressive dice. Can translate binary code into single digit display.
* [GitHub repository](https://github.com/andrewjh09nam/tinytapeout05_andy_ALU_dice)
* [GDS submitted](https://github.com/andrewjh09nam/tinytapeout05_andy_ALU_dice/actions/runs/6756414339)
* [Wokwi](https://wokwi.com/projects/380477805171811329) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | {'IN0': 'Input A0'}  | {'segment a': 'Normal digit display'} | Not used |
| 1 | {'IN1': 'Input A1'}  | {'segment b': 'Normal digit display'} | Not used |
| 2 | {'IN2': 'Not used'}  | {'segment c': 'Normal digit display'} | Not used |
| 3 | {'IN3': 'Selection bit (0,0)--> Addition, (0,1)--> Subtraction, (1,0)--> Logic AND, (1,1)--> Logic OR'}  | {'segment d': 'Normal digit display'} | Not used |
| 4 | {'IN4': 'Selection bit'}  | {'segment e': 'Normal digit display'} | Not used |
| 5 | {'IN5': 'Selection bit (0)--> ALU, (1)--> Dice'}  | {'segment f': 'Normal digit display'} | Not used |
| 6 | {'IN6': 'Input B0'}  | {'segment g': 'Normal digit display'} | Not used |
| 7 | {'IN7': 'Input B1'}  | dot | Not used |

### Chip location

{{< shuttle-map "tt05" "298" >}}
