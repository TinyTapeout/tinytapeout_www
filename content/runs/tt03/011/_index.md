---
hidden: true
title: "11 Stateful Lock"
weight: 12
---

## 11 : 0b 000 001 011 : Stateful Lock

{{< tt-scanchain-switches "000001011" >}}

* Author: Tim Henkes
* Description: A little combination lock which requires three codes in the correct order to unlock
* [GitHub repository](https://github.com/Syndace/tt03-stateful-lock)
* [Wokwi](https://wokwi.com/projects/359357227471086593) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

A little two-bit state machine decides which code is required to enter the next state. The fourth state equals to the lock being open. A wrong code in any state resets to the first state.


### How to test

To test the project, refer to its Wokwi, which is public.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | unused  | lock status |
| 1 | reset  | unused |
| 2 | enter  | unused |
| 3 | code digit 0  | unused |
| 4 | code digit 1  | unused |
| 5 | code digit 2  | unused |
| 6 | code digit 3  | unused |
| 7 | code digit 4  | unused |
