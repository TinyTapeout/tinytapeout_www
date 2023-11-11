---
hidden: true
title: "643 Stop Watch"
weight: 132
---

## 643 : Stop Watch

* Author: Devin Atkin
* Description: Stop Watch System
* [GitHub repository](https://github.com/devinatkin/tt05-stopwatch)
* [GDS submitted](https://github.com/devinatkin/tt05-stopwatch/actions/runs/6526777093)
* HDL project
* [Extra docs]()
* Clock: 25 000 000 Hz
* External hardware: 7 Segement Display (Common Anode Segments), Active Low top and Bottom

![picture](images/picture.png)

### How it works

This creates a stop watch type of behavior. It was originally written and verified on the Basys 3 board.
The Inc Switch controls whether the timer increments or decrements when the increment buttons are pressed.
When the timer is running it can be paused by pressing the stop button. The timer can be reset by pressing the soft reset button.


### How to test

Provide a 7 segment display, some buttons, and a switch to control the behavior and see the output


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | start button  | segment a | anode 1 |
| 1 | stop button  | segment b | anode 2 |
| 2 | soft reset button  | segment c | anode 3 |
| 3 | inc minute button  | segment d | anode 4 |
| 4 | inc second button  | segment e | none |
| 5 | inc switch  | segment f | none |
| 6 | mode switch  | segment g | none |
| 7 | none  | none | none |

### Chip location

{{< shuttle-map "tt05" "643" >}}
