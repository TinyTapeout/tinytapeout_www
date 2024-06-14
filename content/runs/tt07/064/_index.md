---
hidden: true
title: "64 dEFAULt 2hAC"
weight: 76
---

## 64 : dEFAULt 2hAC

* Author: Beau Ambur
* Description: Inverted 7-segment !(tinY tAPeout)
* [GitHub repository](https://github.com/nubcore/tt07-wokwi-inverted)
* [GDS submitted](https://github.com/nubcore/tt07-wokwi-inverted/actions/runs/9328893581)
* [Wokwi](https://wokwi.com/projects/399469995038350337) project
* [Extra docs]()
* Clock: 1 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Sequentially spells out a message using the 7-segment display.

### How to test

Decipher the hidden message by inverting the segments.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | a  |         |
| 1 |   | b  |         |
| 2 |   | c  |         |
| 3 |   | d  |         |
| 4 |   | e  |         |
| 5 |   | f  |         |
| 6 |   | g  |         |
| 7 |   | dot  |         |


### Chip location

{{< shuttle-map "tt07" "64" >}}
