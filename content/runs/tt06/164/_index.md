---
hidden: true
title: "164 Animated 7-segment character display"
weight: 93
---

## 164 : Animated 7-segment character display

* Author: Aron Dennen
* Description: Displays 7-segment characters with animation
* [GitHub repository](https://github.com/adennen/tt06-arond-project)
* [GDS submitted](https://github.com/adennen/tt06-arond-project/actions/runs/8758050586)
* HDL project
* [Extra docs]()
* Clock: 12500000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Animates the 7-segment display by reading in the input switches to create a custom 7-segment character. Nothing will be displayed until you toggle input 7 to start the character animation sequence.

Inputs 0 through 6 map to outputs 0 though 6 (display segments a through g). Output 7 becomes active while input 7 is active.

The uio inputs are used for an experimental pwm dimming feature, to enable pwm display dimming, set uio pin 7 active. uio inputs 0 through 6 set a 7-bit pwm dimming value on an 8-bit pwm unit. The pwm lsb input is tied to 0.

The circuit works by iterating over the character bit pattern, enabling segments sequentially at a speed of about 0.12 seconds per segment.

### How to test

Toggle the input switches to create a character with inputs 0-6, toggle input 7 to start the character animation sequence.

Optionally dim the display by enabling the pwm feature described above.

### External hardware

none


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input0  | seg0  |      |
| 1 | input1  | seg1  |      |
| 2 | input2  | seg2  |      |
| 3 | input3  | seg3  |      |
| 4 | input4  | seg4  |      |
| 5 | input5  | seg5  |      |
| 6 | input6  | seg6  |      |
| 7 | enable display  | seg7  |      |


### Chip location

{{< shuttle-map "tt06" "164" >}}
