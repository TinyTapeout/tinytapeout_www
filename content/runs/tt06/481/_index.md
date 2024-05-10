---
hidden: true
title: "481 HELP for tinyTapeout"
weight: 186
---

## 481 : HELP for tinyTapeout

* Author: Ariella Eliassaf
* Description: Use 7segment to show 'HELP'
* [GitHub repository](https://github.com/AriellaE/tt06-help)
* [GDS submitted](https://github.com/AriellaE/tt06-help/actions/runs/8734282437)
* [Wokwi](https://wokwi.com/projects/395414987024660481) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Every flipflop is one letter of "HELP" (from top to buttom) the last flip flop darkens all 7 segments.

### How to test

push the reset button and enjoy.

### External hardware

none.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | seg_a  |         |
| 1 |   | seg_b  |         |
| 2 |   | seg_c  |         |
| 3 |   | seg_d  |         |
| 4 |   | seg_e  |         |
| 5 |   | seg_f  |         |
| 6 |   | seg_g  |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "481" >}}
