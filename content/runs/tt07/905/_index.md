---
hidden: true
title: "905 Padlock"
weight: 55
---

## 905 : Padlock

* Author: J. Rosenthal &amp; htfab
* Description: Set a code for your precious safe
* [GitHub repository](https://github.com/htfab/tt07-padlock)
* [GDS submitted](https://github.com/htfab/tt07-padlock/actions/runs/8985117442)
* [Wokwi](https://wokwi.com/projects/397142450561071105) project
* [Extra docs]()
* Clock: 0 Hz

### How it works

Set a code for your precious safe!
**Controls**

* Pin 1 is used to reset the safe.
* Pin 7 is used to set your code (ON = set, OFF = locked)
* Pins 2 to 4 are used to set the code.
* The clock button is used to enter your code.

### How to test

Set the clock to manual mode.
Set your desired code using pins 2 to 4. Once you've done so, toggle pin 7 to ON, press the clock button then toggle pin 7 back OFF--the safe is now set!
Turn ON pin 1, and press the clock button. The seven segment display should show "L" (for locked).
Next turn OFF pin 1 to begin entering codes.

### External hardware

None


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | segment a  |         |
| 1 | reset  | segment b  |         |
| 2 | code bit 0  | segment c  |         |
| 3 | code bit 1  | segment d  |         |
| 4 | code bit 2  | segment e  |         |
| 5 |   | segment f  |         |
| 6 |   | segment g  |         |
| 7 | set code  |   |         |


### Chip location

{{< shuttle-map "tt07" "905" >}}
