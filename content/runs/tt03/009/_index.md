---
hidden: true
title: "9 Hovalaag CPU"
weight: 10
---

## 9 : Hovalaag CPU

* Author: Mike Bell
* Description: Implementation of the CPU from HOVALAAG
* [GitHub repository](https://github.com/MichaelBell/tt03-hovalaag)
* [Most recent GDS build](https://github.com/MichaelBell/tt03-hovalaag/actions/runs/4582754393)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: 



### How it works

[HOVALAAG](http://silverspaceship.com/hovalaag/) (Hand-Optimizing VLIW Assembly Language as a Game) is a free Zachlike game.

This is an implementation of the VLIW processor from the game.  Thank you to @[nothings](https://twitter.com/nothings) for the fun game,
making the assembler public domain, and for permission to create this hardware implementation.

The processor uses 32-bit instructions and has 12-bit I/O.  The instruction and data are therefore passed in and out over 10 clocks per
processor clock.

More details in the [github repo](https://github.com/MichaelBell/tt03-hovalaag).


### How to test

The [assembler](http://silverspaceship.com/hovalaag/assembler.zip) can be downloaded to generate programs.

The subcycle counter can be reset independently of the rest of the processor, to ensure you can get to a known state without clearing all registers.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | Clock  | Output 0 |
| 1 | Reset disable (resets enabled when low)  | Output 1 |
| 2 | Input 0 or Reset (when high)  | Output 2 |
| 3 | Input 1 or Reset subcycle count (when high)  | Output 3 |
| 4 | Input 2 or enable ROSC (when high and reset enabled)  | Output 4 |
| 5 | Input 3  | Output 5 |
| 6 | Input 4  | Output 6 |
| 7 | Input 5  | Output 7 |
