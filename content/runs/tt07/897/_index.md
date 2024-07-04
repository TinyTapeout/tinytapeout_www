---
hidden: true
title: "897 Simon Says memory game"
weight: 83
---

## 897 : Simon Says memory game

* Author: Uri Shaked
* Description: Repeat the sequence of colors and sounds to win the game
* [GitHub repository](https://github.com/urish/tt07-simon-game)
* [GDS submitted](https://github.com/urish/tt07-simon-game/actions/runs/9132440927)
* HDL project
* [Extra docs]()
* Clock: 50000 Hz

![Simon Says Game](images/tt-simon-game.jpg)

### How it works

Simon says is a simple electronic memory game: the user has to repeat a growing sequence of colors.
The sequence is displayed by lighting up the LEDs. Each color also has a corresponding tone.

In each turn, the game will play the sequence, and then wait for the user to repeat the sequence
by pressing the buttons according to the color sequence.
If the user repeated the sequence correctly, the game will play a "leveling-up" sound,
add a new color at the end of the sequence, and move to the next turn.

The game continues until the user has made a mistake. Then a game over sound is played, and the game restarts.

Check out the online simulation at https://wokwi.com/projects/397436605640509441 (including wiring diagram).

### How to test

You need four buttons, four LEDs, resistors, and optionally a speaker/buzzer
and a two digit 7-segment display for the score.

Ideally, you want to use 4 different colors for the buttons/LEDs (red, green,
blue, yellow).

1. Connect the buttons to pins `btn1`, `btn2`, `btn3`, and `btn4`, and also
   connect each button to a pull down resistor.
2. Connect the LEDs to pins `led1`, `led2`, `led3`, and `led4`, matching
   the colors of the buttons (so `led1` and `btn1` have the same color, etc.)
3. Connect the speaker to the `speaker` pin.
4. Connect the seven segment display as follows: `seg_a` through `sev_g` to
   individual segments, `dig1` to the common pin of the tens digit, `dig2`
   to the common pin of the ones digit.
   Set `seginv` according to the type of 7 segment display you have: high
   for common anode, low for common cathode.
5. Reset the game, and then press any button to start it. Enjoy!

Note: the game requires 50KHz clock input.

### External Hardware

Four push buttons (with pull-down resistors), four LEDs, and optionally a speaker/buzzer and two digit 7-segment display


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | btn1  | led1  | seg_a        |
| 1 | btn2  | led2  | seg_b        |
| 2 | btn3  | led3  | seg_c        |
| 3 | btn4  | led4  | seg_d        |
| 4 | seginv  | speaker  | seg_e        |
| 5 |   | dig1  | seg_f        |
| 6 |   | dig2  | seg_g        |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "897" >}}
