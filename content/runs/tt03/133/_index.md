---
hidden: true
title: "133 RC5 decoder"
weight: 134
---

## 133 : RC5 decoder

* Author: Jean THOMAS
* Description: Increment/decrement a counter with the press of an IR remote button!
* [GitHub repository](https://github.com/jeanthom/tt02-rc5-receiver)
* [Most recent GDS build](https://github.com/jeanthom/tt02-rc5-receiver/actions/runs/3527312692)
* HDL project
* [Extra docs]()
* Clock: 562 Hz
* External hardware: Connect an IR demodulator (ie. TSOP1738) to the input pin



### How it works

Decodes an RC5 remote signal, increments the counter if the volume up button is pressed, decrements the counter if the volume down button is pressed

### How to test

After reset, point a remote to the IR receiver. Press the volume up button and the display count should increase.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | IR demodulator output  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
