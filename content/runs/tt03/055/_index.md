---
hidden: true
title: "55 7 segment wokwi counter"
weight: 56
---

## 55 : 0b 000 110 111 : 7 segment wokwi counter

{{< tt-scanchain-switches "000110111" >}}

* Author: Matt Venn
* Description: counts up from 0 to 9, incrementing once per second
* [GitHub repository](https://github.com/TinyTapeout/tt03-test-7seg)
* [Wokwi](https://wokwi.com/projects/340805072482992722) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 

![picture](images/7seg-counter.png)

### How it works

Uses a 4 bit counter to sequence, the combinational logic to drive the 7 segment display.


### How to test

Set the clock to 1Hz.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | none  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | dot |
