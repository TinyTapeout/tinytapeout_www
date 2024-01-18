---
hidden: true
title: "73 Arbiter Game"
weight: 74
---

## 73 : 0b 001 001 001 : Arbiter Game

{{< tt-scanchain-switches "001001001" >}}

* Author: Martin A. Heredia
* Description: This is a game for 2 players. After a countdown, the player who press his/her button first wins. Countdown and winner should be displayed in output leds.
* [GitHub repository](https://github.com/maheredia/tt03-arbiter_game)
* [Most recent GDS build](https://github.com/maheredia/tt03-arbiter_game/actions/runs/4781155702)
* HDL project
* [Extra docs](https://github.com/maheredia/tt03-arbiter_game/blob/main/README.md)
* Clock: 1000 Hz
* External hardware: 2 active low pushbuttons for players + 1 active low pushbutton for reset. 4 LEDs connected to outputs.

![picture](images/arbiter_game_bd.png)

### How it works

This is a 2 players game where every player has an active low pushbutton assigned (req1_in and req2_in inputs to top level). 
After applying reset to the circuit, a countdown will be displayed at the output ports (ideally connected to some LEDs). 
Then, when the last LED stops toggling, the players will press the buttons. 
The first player to press the button wins and this will be displayed in output LEDs.


### How to test

- Connect 2 active low pushbuttons to req1_in and req2_in (io_in[2] and io_in[3] respectively).
- Connect 4 LEDs to leds_out[3:0] (io_out[3:0]).
- Apply 1 KHz clock at clk port (io_in[0]).
- Apply an active low reset (io_in[1]) to start the game.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | leds_out[0] / segment a |
| 1 | rst_in_n (active low)  | leds_out[1] / segment b |
| 2 | req1_in  (active low)  | leds_out[2] / segment c |
| 3 | req2_in  (active low)  | leds_out[3] / segment d |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
