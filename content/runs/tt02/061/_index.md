---
hidden: true
title: "61 Dice roll"
weight: 62
---

## number : 0b000111101 : Dice roll

* Author: Tholin
* Description: Will roll a random number from 1 - 6 on the 7-segment display, like a dice.
* [GitHub repository](https://github.com/AvalonSemiconductors/tt2-diceroll)
* [Most recent GDS build](https://github.com/AvalonSemiconductors/tt2-diceroll/actions/runs/4045546925)
* HDL project
* [Extra docs]()
* Clock: 6000 Hz
* External hardware: A 7-segment-display. The one on-board the PCB will work.



### How it works

Contains a LSFR for random numbers, that constantly updates no matter if the dice is rolling or not. Pressing the ’ROLL’ button will play an animation of random numbers cycling on the display, until settling on a number after a few seconds. The decimal point will light up when its done rolling.

### How to test

Reset, then pulse ’ROLL’ to roll the dice as many time as you like.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | CLK  | segment a |
| 1 | RST  | segment b |
| 2 | ROLL  | segment c |
| 3 | NC  | segment d |
| 4 | NC  | segment e |
| 5 | NC  | segment f |
| 6 | NC  | segment g |
| 7 | NC  | decimal point |
