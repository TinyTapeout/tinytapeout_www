---
hidden: true
title: "225 LAB11"
weight: 226
---

## 225 : 0b 011 100 001 : LAB11

{{< tt-scanchain-switches "011100001" >}}

* Author: Thomas Zachariah
* Description: Cycles through the characters of LAB11
* [GitHub repository](https://github.com/tzachari/tt02-lab11)
* [Wokwi](https://wokwi.com/projects/341631644820570706) project
* [Extra docs](https://github.com/tzachari/tt02-lab11)
* Clock: 1 Hz
* External hardware: None

![picture](images/tt02-lab11.gif)

### How it works

Gates & flip-flops connected to the 7-segment display change the state of corresponding LED segments to form the next character, each cycle

### How to test

Set to desired clock speed — characters are most readable at the lowest speed

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
