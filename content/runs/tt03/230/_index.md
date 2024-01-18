---
hidden: true
title: "230 Digital padlock"
weight: 231
---

## 230 : 0b 011 100 110 : Digital padlock

{{< tt-scanchain-switches "011100110" >}}

* Author: Jean THOMAS
* Description: A 4-digit electronic padlock
* [GitHub repository](https://github.com/jeanthom/tinytapout-lock)
* [Most recent GDS build](https://github.com/jeanthom/tinytapout-lock/actions/runs/3603512851)
* [Wokwi](https://wokwi.com/projects/341438392303616596) project
* [Extra docs](README.md)
* Clock: 100 Hz
* External hardware: Four push buttons, cabled as active high with hardware debounce circuitry.

![picture](images/high-level-diagram.png)

### How it works

Each buttons press is detected by a rising edge detector, and each button press is decoded into a binary code. That binary code is stored in a shift-register which is continuously checked against a reference value ('the padlock code').

### How to test

Connect a clock generator to the clock input, connect all four buttons with a debounce circuit - the buttons should act as active high.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | none |
| 1 | Button A  | none |
| 2 | Button B  | none |
| 3 | Button C  | none |
| 4 | Button D  | none |
| 5 | none  | none |
| 6 | none  | Button press detected |
| 7 | none  | Code valid |
