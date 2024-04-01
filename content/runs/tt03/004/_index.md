---
hidden: true
title: "4 Wormy"
weight: 5
---

## 4 : 0b 000 000 100 : Wormy

{{< tt-scanchain-switches "000000100" >}}

* Author: nqbit
* Description: MC Wormy Pants squirms like a worm and grows just as fast.
* [GitHub repository](https://github.com/nqbit/wormy)
* HDL project
* [Extra docs](https://github.com/nqbit/wormy)
* Clock: 300 Hz
* External hardware: 



### How it works

Wormy is a very simple, addictive last person video game. This last person,
open-world game takes you down the path of an earthworm. Wormy's world is
made up of a 4x4 grid represented by 3x16-bit arrays: Direction[0],
Direction[1], and Occupied. The Direction[x] maps keep track of which way a
segment of worm moves, if it is on, and Occupied keeps track of if the grid
location is occupied.

Example Occupied Grid:

```
   _________
  | X X X X |
  |       X |
  |       X |
  |_________|
```

In addition to direction and occupied there are also pointers to the head
and the tail. The same grid would look something like the following:

Example Occupied Grid with head(H) and tail(T) highlighted:

```
   _________
  | T X X X |
  |       X |
  |       H |
  |_________|
```

BOOM! Wormy shouldn't run into itself. If its head hits any part of its
body, that causes a collision. There is a collision if the location of the
Wormy's head is occupied by another segment of the Wormy. To determine
this, we keep track of the worm location, and specifically the current and
future locations of the worm head (H) and tail (T). If the future location
of H will occupy a location that will already be occupied, this causes a
collision.

This is made a bit trickier with growth (see below), because if the future
state of H is set to occupy the current state of T - there is only a
collision if growth is set to occur in the next cycle, so be careful if you
plan to have Wormy chase its tail! SPLAT!

NOM NOM! Wormy eats the tasty earth around it and grows. Every so often
Wormy, after having eaten all of its lunch, grows a whole segment. During a
growth cycle, the state of T simply persists (remains occupied and heading
in the same direction as it is).

Last Person Input - see user_input.v
To move Wormy along, the last player needs to push buttons to help Wormy
find more tasty earth: up, right, down or left.

Buttons are nasty little bugs in general. When pushed the button generates
an analog signal that might not look exactly like a single rising edge.

It might look something like this:

```
                                          xxxxxxxxxxxxxxxxx
                                        xx
                                        x
                                        x
                         x              x
                         x             x
                         x             x
                         x            x
                         x    xx x    x
                         x    xxxx    x
                         x    x xx    x
                         x    x  x   x
                         x    x  x   x
                        xx    x  x   x
                        xxx   x  x   x
                        x xx  x   x  x
                       x   x x    x  x
                       x   x x    xx x
                      x     xx     x x
    xxxxxxxxxxxxxxxxxxx             x
```

In order to help protect our logic from this scary looking signal that
might introduce metastability (<- WHAT?), we can filter it with a couple
flippy-floppies and keep the metastability at bay. ARGH.

Once we have a clear pushed or not-pushed, we can suggest that Wormy move
in a specific direction. If the last player tries button mashing, Wormy
won't listen. Once a second Wormy checks what the last button press was and
tries really hard to go that way (see BOOM!).

Earthworms don't have eyes - see multiplexer.v
The game's display is made up of a 4x4 grid of LEDs controlled by a
multiplexer. Why multiplexing? With a multiplexed LED setup, we can control
more display units (LEDs), with a limited number of outputs (8 on this
TinyTapeout project).

To get multiplexing working the network of outputs is mapped to each
display unit. This allows us to manipulate assigned outputs to control the
state of each display unit, one at a time. We then cycle through each
display unit quickly enough to display a persistent image to the last
player.

Wires (A1-4, B1-4) map to each location on the game arena (4x4 grid):

```
  A1|   |   |   |
  __________________
  A2|   |   |   |
  __________________
  A3|   |   |   |
  __________________
  A4|   |   |   |
  __________________
    |B1 |B2 |B3 |B4
```

When B's voltage is OFF the LED's state changes to ON if A is also ON.
  - ON LED state: A(ON) — >| — B(OFF)
  - OFF LED state: A(ON) — >| — B(ON)

Example: The 3 filled squares below each represent a Wormy segment in the
ON state as controlled by the multiplexer. Notice how each is lighter than
the last. This is because the multiplexer cycles through each LED to update
the state, creating one persistent image even though the LEDS are not on
over the entire period of time.

```
  A1|   | O |   |
  __________________
  A2|   | o |   |
  __________________
  A3|   | . |   |
  __________________
  A4|   |   |   |
  __________________
    |B1 |B2 |B3 |B4
```

Another Example: If you enter a dark cave and point a flashlight straight
ahead at one point on the wall you have a very small visual field that is
contained within the beam of light. However, you can expand your visual
field in the cave by waving the flashlight back and forth across the wall.
Despite the fact that the beam is moving over individual points on the
wall, the entire wall can be seen at once. This is similar to the concept
used in the Wormy display, since the multiplexer changes the state of the
worm occupied locations to ON one at a time, but in a cycle. The result is
a solid image, made up of LEDs cycling through ON states to produce a
persistent image of Wormy (that beautiful Lumbricina).


### How to test

After reset, you should see a single pixel moving along the display and
it should grow every now and then.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | A0 - Multiplexer channel A to be tied to a an array of 16 multiplexed LEDs |
| 1 | reset  | A1 |
| 2 | button0  | A2 |
| 3 | button1  | A3 |
| 4 | button2  | B0 - Multiplexer channel B to be tied to a an array of 16 multiplexed LEDs |
| 5 | button3  | B1 |
| 6 | none  | B2 |
| 7 | none  | B3 |
