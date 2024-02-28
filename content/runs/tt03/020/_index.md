---
hidden: true
title: "20 CTF - Catch the fish"
weight: 21
---

## 20 : 0b 000 010 100 : CTF - Catch the fish

{{< tt-scanchain-switches "000010100" >}}

* Author: Carin Schreiner
* Description: Catch the fish is a whac-a-mole game.
* [GitHub repository](https://github.com/SchreinerCarin/tt03-ctf)
* [Wokwi](https://wokwi.com/projects/360014965627378689) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The project consists of 
* a fibonacci lfsr of degree 6. 
* a simple timer: the timer consists of two flip flops. It slows down the game and further amplifies the pseudo-randomness
* a button press detection for each button
* a simple reward detection
* Output state Handlers
* Output Selection: The last bit of the lsfr is used as the decision whether to give an output or not. The second and third to last bits are used to determine on which pin the output should be given. If both bits are zero, no output is given.


### How to test

To play the game, press the start button and make sure the clock is set to a frequency of one or two. The higher the frequency the more difficult the game gets.
To score, you need to press the button while the respectivly numbered feedback output is one. You then get a reward feedback


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | feedback 1 |
| 1 | button 1  | feedback 2 |
| 2 | button 2  | feedback 3 |
| 3 | button 3  | reward feedback |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
