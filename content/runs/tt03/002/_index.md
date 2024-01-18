---
hidden: true
title: "2 7 Segment Life"
weight: 3
---

## 2 : 0b 000 000 010 : 7 Segment Life

{{< tt-scanchain-switches "000000010" >}}

* Author: icegoat9
* Description: Simple 7-segment cellular automaton
* [GitHub repository](https://github.com/icegoat9/tinytapeout03-7seglife)
* [Most recent GDS build](https://github.com/icegoat9/tinytapeout03-7seglife/actions/runs/4775764691)
* [Wokwi](https://wokwi.com/projects/357752736742764545) project
* [Extra docs](https://github.com/icegoat9/tinytapeout03-7seglife/blob/main/README.md)
* Clock: 6250 Hz
* External hardware: None. Could add debounced momentary pushbuttons in parallel with dip switches 1,2,3 to make loading in new patterns and stepping through a run easier.



### How it works


This implements a very simple 7-segment [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) from ~200 basic logic gates. At each clock cycle, each of the seven segments is set to "alive" or "dead" based on a simple set of rules:

1. If a segment was "alive" in the previous time step and has exactly one living neighbor, it survives.
2. If a segment was "dead" (or "empty") in the previous time step and has exactly two living neighbors, if becomes alive ("gives birth")

A "neighbor" is any segment it touches, tip to tip. This means that the top and bottom segments only have two neighbors, while the side segments have three neighbors and the center segment has four neighbors.

**Implementation**

See the [Wokwi gate layout and simulation](https://wokwi.com/projects/357752736742764545). At a high level:

* Seven flip-flops hold the cellular automaton's internal state, which is also wired to the seven-segment display.
* Combinatorial logic generates the next state for each segment based on its neighbors.
* When either the system clock or a user-toggled clock input goes high, this new state is latched in to the flip-flips.
* There's minor additional support logic to let the user manually shift in an initial condition and handle clock dividing.


### How to test

For full details with some examples, see the [github README](https://github.com/icegoat9/tinytapeout03-7seglife) doc link. At a high level, assuming the IC is mounted on the standard tinytapeout PCB which provides dip switches, clock, and a seven-segment display for output:

1. Set all dip switches off, and the clock slide switch to the 'manual' clock side.
2. Power on the system. An arbitrary state may appear on the 7-segment display.
3. Set dip switch 4 on ('run mode').
4. Toggle dip switch 1 on and off to advance the automaton to the next state, you should see the 7-segment display update.

If you want to watch it run automatically (which may quickly settle on an empty state or a static pattern, depending on start state):

1. Set the PCB clock divider to the maximum clock division (255). With a system clock of 6.25kHz, the clock input should now be ~24.5Hz.
2. Set dip switches 5 and 7 on to add an additional 16x clock divider.
3. Set dip switch 4 on.
4. Switch the clock slide switch to the 'system clock' side. The display should advance at roughly 1.5Hz (if I've done math correctly)
5. To run faster or slower, set a combination of dip switches 5 (8x clock divider), 6 (4x divider), and 7 (2x divider)

If you want to load a custom initial state:

1. Set dip switch 4 off ('load mode').
2. Toggle dip switches 2 and/or 3 on and off up to seven times total, to shift in 0 and 1 values to the automaton's internal state (see github README for examples).
3. Set dip switch 4 on and run manually or automatically as above.

**Exercises / puzzles for the reader:**

1. How many unique initial states are there, disregarding equivalent mirrored/rotated states? (there are 2^7 = 128 possible initial states, but many are equivalent)
2. What fraction of these initial states survive? (i.e. don't eventually die out)
3. What fraction settle into a static living pattern vs an infinite cycle between multiple different patterns?
4. What is the longest sequence of unique states a pattern travels through (stop counting once it reaches a previously-visited state, beginning an infinite loop)?
5. What is the longest cycle of unique states that repeats in a loop?


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | 7segmentA |
| 1 | load0  | 7segmentB |
| 2 | load1  | 7segmentC |
| 3 | runmode  | 7segmentD |
| 4 | clockdiv8  | 7segmentE |
| 5 | clockdiv4  | 7segmentF |
| 6 | clockdiv2  | 7segmentG |
| 7 | unused  | 7segmentDP |
