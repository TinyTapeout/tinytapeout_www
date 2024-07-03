---
hidden: true
title: "73 SIMON"
weight: 41
---

## 73 : SIMON

* Author: seanyen0
* Description: SIMON game
* [GitHub repository](https://github.com/seanyen0/tt07-makerchip-template)
* [GDS submitted](https://github.com/seanyen0/tt07-makerchip-template/actions/runs/9307379990)
* HDL project
* [Extra docs]()
* Clock: 20000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

SIMON game. Comes up with sequences of increasing length. User imitates sequence with Digilent PmodBTN. If user loses, 7-segment display shows "L" and user's max number of correct sequences in hex. Upon losing, user can press any button to reset.

### How to test

Manual reset can be applied by toggling input "in7" high-low.

User needs PmodBTN to enter the guesses.

### External hardware

Digilent PmodBTN plugged into upper row of input header.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Button 0  | sseg0  |         |
| 1 | Button 1  | sseg1  |         |
| 2 | Button 2  | sseg2  |         |
| 3 | Button 3  | sseg3  |         |
| 4 |   | sseg4  |         |
| 5 |   | sseg5  |         |
| 6 |   | sseg6  |         |
| 7 | Reset  | sseg7  |         |


### Chip location

{{< shuttle-map "tt07" "73" >}}
