---
hidden: true
title: "111 Wolf sheep cabbage river crossing puzzle ASIC design"
weight: 112
---

## number : 0b001101111 : Wolf sheep cabbage river crossing puzzle ASIC design

* Author: maehw
* Description: Play the wolf, goat and cabbage puzzle interactively.
* [GitHub repository](https://github.com/maehw/tt02-wokwi-wolf-goat-cabbage)
* [Most recent GDS build](https://github.com/maehw/tt02-wokwi-wolf-goat-cabbage/actions/runs/3595233571)
* [Wokwi](https://wokwi.com/projects/341614346808328788) project
* [Extra docs](https://github.com/maehw/tt02-wokwi-wolf-goat-cabbage/blob/main/README.md)
* Clock: 0 Hz
* External hardware: Input switches and 7-segment display

![picture](images/wokwi-simulation-io-mapping.png)

### How it works

Truth table with the game logic (hidden easter egg). The inputs are the positions of the farmer, wolf, goat and cabbage. The 7-segment display shows the status of the game (won or lost).

### How to test

Slide the input switches, think, have a look at the 7-segment display.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | not connected because it is typically used for clocked designs and may be used in the future of this design  | output signal ~E, i.e. the top and bottom segments light up, when the game is over due to an unattended situation on any river bank side |
| 1 | input signal F for the position of the farmer  | output signal ~R i.e. the top-right and bottom-right segments light up, to indicate an unattended situation on the right river bank (game over) |
| 2 | input signal W for the position of the wolf  | output signal ~R i.e. the top-right and bottom-right segments light up, to indicate an unattended situation on the right river bank (game over) |
| 3 | input signal G for the position of the goat  | output signal ~E, i.e. the top and bottom segments light up, when the game is over due to an unattended situation on any river bank side |
| 4 | input signal C for the position of the cabbage  | output signal ~L i.e. the top-left and bottom-left segments light up, to indicate an unattended situation on the left river bank (game over) |
| 5 | here be dragons or an easter egg  | output signal ~L i.e. the top-left and bottom-left segments light up, to indicate an unattended situation on the left river bank (game over) |
| 6 | unused  | here be dragons or an easter egg |
| 7 | unused  | output signal A to light up the "dot LED" of the 7 segment display as an indicator that all objects have reached the right bank of the river and the game is won! 🎉🎉🎉 |
