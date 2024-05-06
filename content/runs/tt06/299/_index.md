---
hidden: true
title: "299 Display test 1"
weight: 43
---

## 299 : Display test 1

* Author: Mastro Gippo
* Description: just a test
* [GitHub repository](https://github.com/mastrogippo/tt06-verilog_test)
* [GDS submitted](https://github.com/mastrogippo/tt06-verilog_test/actions/runs/8675730468)
* HDL project
* [Extra docs]()
* Clock: 10000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

I just copied [Uri's project](https://wokwi.com/projects/347069718502310484) and messed around with its verilog

### How to test

Connect 0-7 outputd to LCD pins: D4 D5 D6 D7 E

### External hardware

Character LCD


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | s1  | D4  |      |
| 1 | s2  | D5  |      |
| 2 | e1  | D6  |      |
| 3 | e2  | D7  |      |
| 4 | e3  | RS  |      |
| 5 | e4  | E  |      |
| 6 | e5  |   |      |
| 7 | e6  |   |      |


### Chip location

{{< shuttle-map "tt06" "299" >}}
