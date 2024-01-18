---
hidden: true
title: "56 Straight through test"
weight: 57
---

## 56 : 0b 000 111 000 : Straight through test

{{< tt-scanchain-switches "000111000" >}}

* Author: Matt Venn
* Description: Just connects inputs to outputs
* [GitHub repository](https://github.com/TinyTapeout/tt03-test-straight)
* [Most recent GDS build](https://github.com/TinyTapeout/tt03-test-straight/actions/runs/4766610434)
* [Wokwi](https://wokwi.com/projects/339501025136214612) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

8 wires connect the 8 inputs to the 8 outputs


### How to test

Set any DIP switch high and the corresponding LED should light on the 7 segment display


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | a  | segment a |
| 1 | b  | segment b |
| 2 | c  | segment c |
| 3 | d  | segment d |
| 4 | e  | segment e |
| 5 | f  | segment f |
| 6 | g  | segment g |
| 7 | dot  | dot |
