---
hidden: true
title: "301 Tiny_Tapeout_6_Frank"
weight: 228
---

## 301 : Tiny_Tapeout_6_Frank

* Author: Frank Hellmann
* Description: 7Seg Around the Clock / FH display
* [GitHub repository](https://github.com/sandman72/Tiny_Tapeout_6_Frank)
* [GDS submitted](https://github.com/sandman72/Tiny_Tapeout_6_Frank/actions/runs/8680949822)
* [Wokwi](https://wokwi.com/projects/395055359324730369) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project was created during the Hackaday Conference 2024 and shows two simple animations on the 7seg display.
It takes the clock input (10kHz) and divides it down depending on the input 7.
The mode input 0 either shows the letters F and H or is switched to the rotation animation.

Inputs

SW1 - IN0 = Mode (FH or Rotation Animation)

SW2 - IN1 = Blinking (turns dot on/off)

SW3 - IN2 = unused

SW4 - IN3 = unused

SW5 - IN4 = unused

SW6 - IN5 = Pause (if switched on, animation will freeze)

SW7 - IN6 = Debug (if switched on, divider will stop)

SW8 - IN7 = Divider (fast an slow)

### How to test

Apply clock (10khz) and watch the 7seg display

If all inputs are off the 7seg display will show alternating letters F and H

If switch SW1 is on the 7seg display will show the rotation animation

Toggle SW2 to disable the dot blinking

Toggle SW6 to pause

Toggle SW8 to change speed

SW7 is for debugging divider

### External hardware

The 7Seg LED display is used on outputs


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |         |
| 1 |   |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "301" >}}
