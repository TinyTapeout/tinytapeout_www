---
hidden: true
title: "200 Snake Game"
weight: 10
---

## 200 : Snake Game

* Author: Stefan Hirschböck
* Description: Simple implementation of the game Snake with VGA Output
* [GitHub repository](https://github.com/histefan/jku-tt06-snake_game)
* [GDS submitted](https://github.com/histefan/jku-tt06-snake_game/actions/runs/8627996846)
* HDL project
* [Extra docs]()
* Clock: 25179000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

```
 Simple implementation of the game "Snake" with VGA Output.
  Due to size limitations snake can only grow to 9 body parts.
  Game resets when snake touches border or any of its body parts
  Vga output is compatible with tiny vga pmod.
```

### How to test

```
  After reset snake can be controlled though inputs. When collecting an apple snake grows by 1 body part. 
  clock has to be set to 25.179 Mhz for vga sync signal generation to work.
  inputs should be done with push buttons. Not pressed is logic 0, pressed is logic 1
  So an external circuit with pull down resistors should be used for input.
  If no tiny VGA pmod is available a vga dac like in this project:https://tinytapeout.com/runs/tt04/178/
  could probably also be used.
```

### External hardware

VGA Display, external buttons for input


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | none  | R1  | none        |
| 1 | none  | G1  | none        |
| 2 | none  | B1  | none        |
| 3 | none  | vsync  | none        |
| 4 | Right  | R0  | none        |
| 5 | Left  | G0  | none        |
| 6 | Down  | B0  | none        |
| 7 | Up  | hsync  | none        |


### Chip location

{{< shuttle-map "tt06" "200" >}}
