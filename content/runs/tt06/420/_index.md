---
hidden: true
title: "420 Servo Signal Tester"
weight: 231
---

## 420 : Servo Signal Tester

* Author: Holunder
* Description: If you provide a 4kHz Clock and 8 LED's as Output, the LED's will light up according to the Servo Signal on Input 0
* [GitHub repository](https://github.com/holunder00/TinyTapeout_SecondTry)
* [GDS submitted](https://github.com/holunder00/TinyTapeout_SecondTry/actions/runs/8723839495)
* [Wokwi](https://wokwi.com/projects/395055722430895105) project
* [Extra docs]()
* Clock: 4000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

If you apply a Servo Signal it will be processed via Flip-Flops so that the Servo Signal controls the Pin's on the Output.
If the Servo Pulse is 1ms (0 degree) no LED will light up and if the Servo Pulse is 2ms (180 degrees) all the LED's will light up.

### How to test

Add 8 LED's to the Output's and connect a Servo Signal to Input 0

### External hardware

8 LED's and resistors. (If your LED's need more Output Power then the Chip can provide, use a driver)
Maybe the resistors can have a low value, because the LED's are only ON when the Servo Signal is HIGH. So the maximum is 20% duty cicle.

### How to use

Add 8 LED's to the Output's and connect a Servo Signal to Input 0


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Servo Signal  | LED 0  |      |
| 1 |   | LED 1  |      |
| 2 |   | LED 2  |      |
| 3 |   | LED 3  |      |
| 4 |   | LED 4  |      |
| 5 |   | LED 5  |      |
| 6 |   | LED 6  |      |
| 7 |   | LED 7  |      |


### Chip location

{{< shuttle-map "tt06" "420" >}}
