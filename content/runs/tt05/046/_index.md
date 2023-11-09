---
hidden: true
title: "46 Character Selector"
weight: 56
---

## 46 : Character Selector

* Author: Dakota W Winslow
* Description: A circuit to output latin characters on a 7-segment display
* [GitHub repository](https://github.com/dakotawinslow/TinyTapeout5)
* [GDS submitted](https://github.com/dakotawinslow/TinyTapeout5/actions/runs/6756573541)
* [Wokwi](https://wokwi.com/projects/380408823952452609) project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

This project displays a user-selctable character on the 7-segment display. Input DIPs 1-6 are used to select the character to display.
Inputs 7 and 8 are not connected. The display is driven one segment at a time, so a high clock rate is required to see thew character.
Characters are a mix of upper and lower case, preferring whichever is more recognizable. See the wikipedia page on 7-segment display representations
for reference [https://en.wikipedia.org/wiki/Seven-segment_display_character_representations].


### How to test

Connect the clock line to the ocillator (or press the clock button REALLY fast). Then, use thew DIP switches to enter a 6-digit binary number corresponding
to the character to be displayed. 0-25 for a-z, then 26:[space], 27:[_], 28:[-], 29:[.], 30:[!], 31:["]. If only one segment is displayed, make sure your clock is set properly!


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | dip0  | segment a | none |
| 1 | dip1  | segment b | none |
| 2 | dip2  | segment c | none |
| 3 | dip3  | segment d | none |
| 4 | dip4  | segment e | none |
| 5 | dip5  | segment f | none |
| 6 | not connected  | segment g | none |
| 7 | not connected  | dot | none |
