---
hidden: true
title: "57 Combo lock"
weight: 58
---

## 57 : Combo lock

* Author: Benjamin Collier
* Description: set, reset, and check for a combo
* [GitHub repository](https://github.com/BenAtUvu/tt03-ComboLock)
* [Most recent GDS build](https://github.com/BenAtUvu/tt03-ComboLock/actions/runs/4759091885)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

this projects works by taking 4 inputs for number 0-9. The first 4 number inputed will be the new combo (0000 is not an input zero should be 0001). 
Then to "unlock" press your combo again. to reset and enter a new combo the unlock must be high and reset must be pressed, or master reset must be pressed.


### How to test

Enter 4 single digits in binary into input 0-4, each input must be followed by 0000. Then input the same 4 digits in each followed by 0000 to make unlock high. 
a valid input would look some think like this: 0001, 0000, 0101, 0000, 1001, 0000, 0011, 0000, then 0001, 0000, 0101, 0000, 1001, 0000, 0011, 0000, will make
unlock high.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | input 0  | unlock |
| 1 | input 1  | none |
| 2 | input 2  | none |
| 3 | input 3  | none |
| 4 | reset  | none |
| 5 | master reset  | none |
| 6 | none  | none |
| 7 | none  | none |
