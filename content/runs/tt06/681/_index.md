---
hidden: true
title: "681 EVEN AND ODD COUNTERS"
weight: 85
---

## 681 : EVEN AND ODD COUNTERS

* Author: Dr.LIPIKA GUPTA, DEVRAJ, JUGRAJ
* Description: WE CAN CHOOSE TO COUNT EVEN AND ODD BCD
* [GitHub repository](https://github.com/DevrajC03/Jugraj-Devraj-Counters)
* [GDS submitted](https://github.com/DevrajC03/Jugraj-Devraj-Counters/actions/runs/8756755003)
* [Wokwi](https://wokwi.com/projects/395599496098067457) project
* [Extra docs]()
* Clock: 10000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Welcome, This is basically a even and odd BCD counter:-
*If input 1 is high, the even counter is on,
*If input 2 is high, the odd counter is on.

### How to test

We can test it by making input 1 high and connecting 7-segment display to output,
if the even count of BCD is shown, the logic circuit is cleadred the test .

### External hardware

* Push button
* 7 - segment display


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | IN1  | OUT0  |      |
| 1 | IN2  | OUT1  |      |
| 2 |   | OUT2  |      |
| 3 |   | OUT3  |      |
| 4 |   | OUT4  |      |
| 5 |   | OUT5  |      |
| 6 |   | OUT6  |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "681" >}}
