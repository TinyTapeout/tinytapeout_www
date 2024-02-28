---
hidden: true
title: "70 7 Segment Random Walk"
weight: 71
---

## 70 : 0b 001 000 110 : 7 Segment Random Walk

{{< tt-scanchain-switches "001000110" >}}

* Author: Richard Miller
* Description: Random walk around the 7 segment display
* [GitHub repository](https://github.com/millerresearch/tt03)
* [Wokwi](https://wokwi.com/projects/361728681519813633) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Segments of the 7seg display are activated in a sequence controlled
by a finite state machine. The state is represented by 14 flipflops.
Each segment has two flipflops, one for each direction of the walk.
Where a segment has two possible successors, a mux selects
between them, controlled by the output from a linear feedback shift
register acting as a random number generator. The FSM is self
initialising so a reset signal isn't required: the number of true
flipfops is summed, and if the total isn't exactly 1 the state will
be initialised to have a single segment and direction active. A
clock divider is used to slow the walk to a visible speed. This is
done by gating the flipflop state transitions with a pulse generated
every 2^N clock cycles (where N is a 4-bit number set by the DIP
switches.) The pulses are obtained by using a tree of muxes controlled
by the bits of N to select one carry bit from within a 16-bit counting
register.


### How to test

Use switches 5-8 (LSB is switch 8) to set a number N from 0 to 15;
the clock will be divided by 2^N. To test the clock, set switch 4 on
and the 7seg dot will flash at half the clock speed.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | none  | segment b |
| 2 | none  | segment c |
| 3 | enable flashing dot  | segment d |
| 4 | clock divisor bit 3 (MSB)  | segment e |
| 5 | clock divisor bit 2  | segment f |
| 6 | clock divisor bit 1  | segment g |
| 7 | clock divisor bit 0 (LSB)  | dot |
