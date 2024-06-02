---
hidden: true
title: "136 John Pong The Second"
weight: 15
---

## 136 : John Pong The Second

* Author: Sophia Rustfield (Representing HSWAW)
* Description: a hyper simple pong game with the polish pope taking the role of the ball outputted over vga
* [GitHub repository](https://github.com/SpaceCat-Chan/tt07-john-pong-the-second)
* [GDS submitted](https://github.com/SpaceCat-Chan/tt07-john-pong-the-second/actions/runs/9332657538)
* HDL project
* [Extra docs]()
* Clock: 25175000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

it outputs VGA, using all of the dedicated output pins and three of the bidirectional pins, and takes player input on 5 of the dedicated input pins, it works by having a counter that counts clock cycles since boot, and outputs one pixel per clock cycle, on the first clock cycle of vsync, all game logic happens.

### How to test

you're gonna need to play the game, and hook it up to a monitor with a DAC

### External hardware

- a circuit that can convert the digital output to analog VGA
- a monitor that supports VGA
- a circuit for some buttons for the player input
  there are no part numbers here because we built everything outselves except for the monitor, and monitors are ubiquotus


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | move paddle up  | red channel bit 0  | blue channel bit 0        |
| 1 | move paddle down  | red channel bit 1  | blue channel bit 1        |
| 2 | move player 2 paddle up  | red channel bit 2  | blue channel bit 2        |
| 3 | move player 2 paddle down  | green channel bit 0  |         |
| 4 | high voltage to activate player 2, low for ai  | green channel bit 1  |         |
| 5 |   | green channel bit 2  |         |
| 6 |   | horizontal sync signal  |         |
| 7 |   | vertical sync signal  |         |


### Chip location

{{< shuttle-map "tt07" "136" >}}
