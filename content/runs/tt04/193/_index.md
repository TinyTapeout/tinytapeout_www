---
hidden: true
title: "193 Padlock"
weight: 34
---

## 193 : Padlock

* Author: Tiny Tapeout 02 (J. Rosenthal)
* Description: Set a code for your precious safe
* [GitHub repository](https://github.com/psychogenic/tt04-padlock)
* [GDS submitted](https://github.com/psychogenic/tt04-padlock/actions/runs/6092122184)
* [Wokwi](https://wokwi.com/projects/347417602591556180) project
* [Extra docs](https://wokwi.com/projects/347417602591556180)
* Clock:  Hz
* External hardware: 



### How it works

Set a code for your precious safe!
**Controls**

* Switch 2 is used to reset the safe.
* Switch 8 is used to set your code (ON = set, OFF = locked)
* Switches 3 to 5 are used to set the code.
* The push button is used to enter your code.


### How to test

Press the green button in the top left of the pane to begin the simulation.
Set your desired code using Switches 3 to 5. Once you've done so, toggle Switch 8 to ON then back OFF--the safe is now set!
Turn ON Switch 2, and press the push button. The red LED labeled "Locked" should turn on and the seven segment display should show "L" (for locked).
Next turn OFF Switch 2 to begin entering codes.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | N/A  | segment a | none |
| 1 | N/A  | segment b | none |
| 2 | Code 0  | segment c | none |
| 3 | Code 1  | segment d | none |
| 4 | Code 2  | segment e | none |
| 5 | N/A  | segment f | none |
| 6 | N/A  | segment g | none |
| 7 | Set Code  | dot | none |
