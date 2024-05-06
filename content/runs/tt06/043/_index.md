---
hidden: true
title: "43 drops"
weight: 238
---

## 43 : drops

* Author: Philipp Ploeckinger
* Description: Arcade Style game, which lets you collect vertical droplets on an 8x8 pixel display
* [GitHub repository](https://github.com/PloeckiPhil/jku-tt06-drops)
* [GDS submitted](https://github.com/PloeckiPhil/jku-tt06-drops/actions/runs/8628550797)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project uses two mechanical buttons and an 8x8 display to plan arcade style game called drops.
The goal is to move a bar horicontal in order to catch the vertical falling drops.
The player starts with a fixed numer of lifes. Each time the drop is missed, the lifes are deducted by one.
When all lifes are used, the game is over an can be restarted with the reset button.

### How to test

After plugging everything in as specified in the info.yaml file, the display should light up.
If this is not the case, change row and colum pins

There are two things that need to be tested and eventually corrected:

- Drop moving upwards: change the column pins (7 to 0, 0 to 7 etc)
- Bar mowing in wrong direction: either change left and right button or siwcht row pins (7 to 0, 0 to 7 etc)

### External hardware

In addition to the Tiny Tapeout board there are two buttons, and an 8x8 display necessary.
Base on your desired connection of the buttons you might need an additional power source.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | push button - right  | display column 0  |      |
| 1 | push button - left  | display column 1  |      |
| 2 |   | display column 2  |      |
| 3 |   | display column 3  |      |
| 4 |   | display column 4  |      |
| 5 |   | display column 5  |      |
| 6 |   | display column 6  |      |
| 7 |   | display column 7  |      |


### Chip location

{{< shuttle-map "tt06" "43" >}}
