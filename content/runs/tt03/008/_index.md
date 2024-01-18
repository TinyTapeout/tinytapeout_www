---
hidden: true
title: "8 KS-Signal"
weight: 9
---

## 8 : 0b 000 001 000 : KS-Signal

{{< tt-scanchain-switches "000001000" >}}

* Author: Yannick Reiß
* Description: Set KS-Signal based on track information.
* [GitHub repository](https://github.com/yannickreiss/TT3_KS-Signal)
* [Most recent GDS build](https://github.com/yannickreiss/TT3_KS-Signal/actions/runs/4436390829)
* [Wokwi](https://wokwi.com/projects/357106633951414273) project
* [Extra docs]()
* Clock: 10000 Hz
* External hardware: Input: Clock, 9 Buttons, Output: 3 yellow LEDs, 3 white LEDs, 1 green LED, 1 red LED, 1 orange LED

![picture](images/pic.png)

### How it works

Simply switches lamps on and off on toggle.


### How to test

Connect the clock, and the buttons as inputs. Connect the LEDs as outputs in the ordern shown below.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | track1_free  | Fahrt! (Green) |
| 1 | track2_free  | Halt Erwarten! (Orange) |
| 2 | pre_signal  | Halt! (Red) |
| 3 | none  | Vorsicht! (All yellow) |
| 4 | none  | pre signal indicator (white) |
| 5 | allow shunting  | lower shunting indicator (white) |
| 6 | Vorsicht!  | shorter breaking distance (white) |
| 7 | shorter breaking distance  | none |
