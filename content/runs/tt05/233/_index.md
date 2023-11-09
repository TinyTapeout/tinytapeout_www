---
hidden: true
title: "233 6 digit chronometer."
weight: 146
---

## 233 : 6 digit chronometer.

* Author: Carlos Guerra & Marco Gurrola
* Description: 6 digit chronometer. Displays 2 digits for minutes, 2 digits for seconds and 2 digits for hundredths of a second.
* [GitHub repository](https://github.com/CarlosGS99/Chronometer_UdG)
* [GDS submitted](https://github.com/CarlosGS99/Chronometer_UdG/actions/runs/6755876698)
* HDL project
* [Extra docs]()
* Clock:  Hz
* External hardware: You need six 7 segment common cathode displays, push buttons.



### How it works

The project consists of a 50 MHz chronometer in which minutes, seconds and hundredths of a second are shown through six 7
segment displays. It can be initialized or paused pressing the start button, pressing the reset button will cause it to restart the counter.


### How to test

For testing the chronometer project connect push buttons to the reset and bt_ent (start button) inputs. It is designed to
work with six 7 segment common cathode displays. Unidirectional output pins must be connected to displays cathodes.
Bidirectioanl output pin must be connected to displays anodes.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | bt_ent (start button)  | Display cathode 1 | Segment a |
| 1 | reset  | Display cathode 2 | Segment b |
| 2 | clk  | Display cathode 3 | Segment c |
| 3 | n/a  | Display cathode 4 | Segment d |
| 4 | n/a  | Display cathode 5 | Segment e |
| 5 | n/a  | Display cathode 6 | Segment f |
| 6 | n/a  | n/a | Segment g |
| 7 | n/a  | n/a | dot |
