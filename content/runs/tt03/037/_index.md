---
hidden: true
title: "37 Simon Says"
weight: 38
---

## 37 : 0b 000 100 101 : Simon Says

{{< tt-scanchain-switches "000100101" >}}

* Author: Uri Shaked
* Description: A simple memory game
* [GitHub repository](https://github.com/wokwi/tt03-simon-game)
* [Most recent GDS build](https://github.com/wokwi/tt03-simon-game/actions/runs/4789086425)
* HDL project
* [Extra docs](https://wokwi.com/projects/352319274216569857)
* Clock: 4000 Hz
* External hardware: Four push buttons (with pull-down resistors), four LEDs, and optionally a speaker/buzzer

![picture](images/tt-simon-game.jpg)

### How it works

Simon says is a simple electronic memory game: the user has to repeat a growing sequence of colors. 
The sequence is displayed by lighting up the LEDs. Each color also has a corresponding tone.

In each turn, the game will play the sequence, and then wait for the user to repeat the sequence
by pressing the buttons according to the color sequence. 
If the user repeated the sequence correctly, the game will play a "leveling-up" sound, 
add a new color at the end of the sequence, and move to the next turn.

The game continues until the user has made a mistake. Then a game over sound is played, and the game restarts.

The game supports four clock speeds, which can be selected using the clk3 and clk1 inputs:

| clk3 | clk1 | Clock Speed |
|------|------|-------------|
| 0    | 0    | 4KHz        |
| 0    | 1    | 6KHz        |
| 1    | 0    | 12KHz       |
| 1    | 1    | 14KHz       |

Setting the clock speed affects the speed of the game and the tone generator.

Check out the online simulation at https://wokwi.com/projects/352319274216569857 (including wiring diagram).


### How to test

You need four buttons, four LEDs, resistors, and optionally a speaker/buzzer.
Ideally, you want to use 4 different colors for the buttons/LEDs (red, green,
blue, yellow).
1. Connect the buttons to pins `btn1`, `btn2`, `btn3`, and `btn4`, and also 
  connect each button to a pull down resistor.
2. Connect the LEDs to pins `led1`, `led2`, `led3`, and `led4`, matching 
  the colors of the buttons (so `led1` and `btn1` have the same color, etc.)
3. Connect the speaker to the `speaker` pin.
4. Select the clock frequency (using the `clk3` and `clk1` inputs).
5. Reset the game, and then press any button to start it. Enjoy!


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led1 |
| 1 | reset  | led2 |
| 2 | btn1  | led3 |
| 3 | btn2  | led4 |
| 4 | btn3  | speaker |
| 5 | btn4  | none |
| 6 | clk1  | none |
| 7 | clk3  | none |
