---
hidden: true
title: "167 *NOT WORKING* HP 5082-7500 Decoder"
weight: 38
---

## 167 : *NOT WORKING* HP 5082-7500 Decoder

* Author: Per Jensen
* Description: Trying to recreate the decoding logic in the HP 5082-7500-display. At this moment project is not finished.
* [GitHub repository](https://github.com/zaprodk/HP5082-7500_Decoder)
* [GDS submitted](https://github.com/zaprodk/HP5082-7500_Decoder/actions/runs/8728097769)
* [Wokwi](https://wokwi.com/projects/395444977868278785) project
* [Extra docs]()
* Clock: 0 Hz

### How it works

This design should be able to recreate the old HP 5082-7500 display logic. This is a custom HP ASIC from the 70s, made on new silicon.

### How to test

Connect inputs to 4-bit BCD input and LEDs to output x---y

### External hardware

BCD switch or counter
LED dot-matrix-display.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |      |
| 1 |   |   |      |
| 2 |   |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "167" >}}
