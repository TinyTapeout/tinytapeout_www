---
hidden: true
title: "326 One Sprite Pony"
weight: 49
---

## 326 : One Sprite Pony

* Author: Leo Moser
* Description: This SVGA design has exactly one trick up its sleeve: it displays a sprite!
* [GitHub repository](https://github.com/mole99/tt05-one-sprite-pony)
* [GDS submitted](https://github.com/mole99/tt05-one-sprite-pony/actions/runs/6683776996)
* HDL project
* [Extra docs](https://github.com/mole99/tt05-one-sprite-pony)
* Clock: 40 MHz or 10 MHz Hz
* External hardware: Tiny VGA PMOD

![picture](images/picture.png)

### How it works

A one-trick pony is someone or something that is good at doing only one thing. Accordingly, a one-sprite pony can display only one sprite, and that's exactly what this design does:

This Verilog design produces SVGA 800x600 60Hz output with a background and one sprite. Internally, the resolution is reduced to 100x75, thus one pixel of the sprite is actually 8x8 pixels.
The design can operate at either a 40 MHz pixel clock or a 10 MHz pixel clock by setting a configuration bit.

The sprite is 12x12 pixel in size and is initialized at startup with a pixelated version of the Tiny Tapeout logo.

An SPI receiver accepts various commands, e.g. to replace the sprite data, change the colors or set the background.


### How to test

Connect a Tiny VGA to the output Pmod connector. By default, you should see the TinyTapeout logo moving around the screen. By sending commands over SPI via the bidirectional Pmod you can change the sprite and the background, set the sprite position and much more. See the longer documentation for all commands.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | R1 | CS |
| 1 | none  | G1 | MOSI |
| 2 | none  | B1 | MISO |
| 3 | none  | VS | SCK |
| 4 | none  | R0 | Vertical Pulse |
| 5 | none  | G0 | Horizontal Pulse |
| 6 | none  | B0 | none |
| 7 | none  | HS | none |

### Chip location

{{< shuttle-map "tt05" "326" >}}
