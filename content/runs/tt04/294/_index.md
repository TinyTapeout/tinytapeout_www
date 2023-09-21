---
hidden: true
title: "294 Binary to 7 segment"
weight: 79
---

## 294 : Binary to 7 segment

* Author: Juan S Moya & Fredy Segura
* Description: A simple binary to 7-segment decoder
* [GitHub repository](https://github.com/JuanSebastianMoya7/tt04-wokwi-cmua-bin_to_7seg)
* [GDS submitted](https://github.com/JuanSebastianMoya7/tt04-wokwi-cmua-bin_to_7seg/actions/runs/6117324445)
* [Wokwi](https://wokwi.com/projects/375163050120587265) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The binary to 7-segment LED decoder has four 1-bit inputs IN3, IN2, IN1, IN0, and seven 1-bit outputs OUT0, OUT1, OUT2, OUT3, OUT4, OUT5, OUT6, for controlling the seven segment of the LED display


### How to test

Increase the inputs from 0000 to 1001 to display the numbers from 0 to 9, respectively.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | IN3  | OUT0 (segment a) | none |
| 1 | IN2  | OUT1 (segment b) | none |
| 2 | IN1  | OUT2 (segment c) | none |
| 3 | IN0  | OUT3 (segment d) | none |
| 4 | none  | OUT4 (segment e) | none |
| 5 | none  | OUT5 (segment f) | none |
| 6 | none  | OUT6 (segment g) | none |
| 7 | none  | none | none |
