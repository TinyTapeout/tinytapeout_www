---
hidden: true
title: "100 TinySensor"
weight: 101
---

## 100 : 0b 001 100 100 : TinySensor

{{< tt-scanchain-switches "001100100" >}}

* Author: Justin Pelan
* Description: Using external hardware photodiodes as inputs, display light intensity on the 7-segment display
* [GitHub repository](https://github.com/justinP-wrk/tt02-TinySensor)
* [Wokwi](https://wokwi.com/projects/347787021138264660) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Breadboard, resistors, photodiodes, specific part# TBD

![picture](images/TT01.png)

### How it works

Inputs 1-6 will be connected to external photodiodes to read either a '0' or '1', inputs will be added together and displayed on the 7-segment display

### How to test

Dip switches 1-6 can be used instead of external hw to provide inputs, and 7 is used to switch between Step or Continous sample mode. Throw the switches and the total number should show up on the 7-segment display

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
