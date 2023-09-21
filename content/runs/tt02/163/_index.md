---
hidden: true
title: "163 Customizable Padlock"
weight: 164
---

## 163 : Customizable Padlock

* Author: Tiny Tapeout 02 (J. Rosenthal)
* Description: This design implements a customizable padlock. Set a code for your digital safe!
* [GitHub repository](https://github.com/jdrosent/tt02-padlock)
* [Most recent GDS build](https://github.com/jdrosent/tt02-padlock/actions/runs/3614730503)
* [Wokwi](https://wokwi.com/projects/347417602591556180) project
* [Extra docs](https://wokwi.com/projects/347417602591556180)
* Clock: 0 Hz
* External hardware: None



### How it works

Switch 2 is used to reset the safe. Switch 8 is used to set your code (on = set, off = locked). Switches 3 to 5 are used to set the code. The push button is used to enter your code.

### How to test

Set your desired code using Switches 3 to 5. Once you’ve done so, toggle Switch 8 to on then back off–the safe is now set! Turn on Switch 2, and press the push button. The seven segment display should show “L” (for locked). Next turn off Switch 2 to begin entering codes. If you enter a correct code, thw seven segment display should show “U” (for unlocked).

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | N/A  | segment a |
| 1 | Reset  | segment b |
| 2 | Code 0  | segment c |
| 3 | Code 1  | segment d |
| 4 | Code 2  | segment e |
| 5 | N/A  | segment f |
| 6 | N/A  | segment g |
| 7 | Set Code  | none |
