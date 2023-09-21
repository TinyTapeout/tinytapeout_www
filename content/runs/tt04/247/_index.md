---
hidden: true
title: "247 Angardo's pong"
weight: 120
---

## 247 : Angardo's pong

* Author: Angel Orellana
* Description: Is a pong game
* [GitHub repository](https://github.com/Julio18211/tt04-pong)
* [GDS submitted](https://github.com/Julio18211/tt04-pong/actions/runs/6066638549)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 6 pushbutton, 8x8 neopixel matrix



### How it works

This is a pong game, it uses a neopixel led matrix 8x8 as display. To control the game, each player has two push buttons
to move up and down the paddle, an extra push button is used to start the game. The game ends when the ball touch the left
or the right side of the matrix. To set the initial conditions of the game press the reset button.


### How to test

To use the project you must to connect the 6 push butttons (two for player 1, two for player 2, one for start game, and 1 for reset)
with an pull up resistor, also you need conect the data in pin of neopixel matrix to driver_neopixel output.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | start  | driver_neopixel | none |
| 1 | p1_up  | none | none |
| 2 | p1_down  | none | none |
| 3 | p2_up  | none | none |
| 4 | p2_down  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
