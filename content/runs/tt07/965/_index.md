---
hidden: true
title: "965 Mini Light Up Game"
weight: 18
---

## 965 : Mini Light Up Game

* Author: Dyrick Williams
* Description: This is a small game where the objective is to light up the segments to form a '0' by toggling a switch at the correct moment.
* [GitHub repository](https://github.com/Dyrand/Tiny-Tapeout-Mini-Light-Up-Game)
* [GDS submitted](https://github.com/Dyrand/Tiny-Tapeout-Mini-Light-Up-Game/actions/runs/9044665875)
* [Wokwi](https://wokwi.com/projects/397268065185737729) project
* [Extra docs]()
* Clock: 10 Hz

### How it works

The underlying selector is controlled by a circular buffer composed of D Flip-Flops which acts as a circular bit shifter.
The clock signal performs the shift every clock rising edge.
The selection is done by toggling the state of the input switch and rising edges and falling edges are turned into pulses.
The memory component of what the player selects is also implemented with D Flip-Flops.
The rest of the output logic for the segment display is combinational logic.
The reset signal sets only one of the bits in the circular buffer and clears the memory component that is controlled by the player.

### How to test

First perform a reset.
As this is designed within Wokwi, the testing can be done by trying to light up the segments and form the '0' at a low clock frequency.
Once the '0' is formed, the next clock cycle should then display only the dot segment.

### Clock configuration

The generated clock frequency from the RP2040 may be lowered to a reasonable, visually observable frequency (3-20Hz).


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | select  | S1  |         |
| 1 |   | S2  |         |
| 2 |   | S3  |         |
| 3 |   | S4  |         |
| 4 |   | S5  |         |
| 5 |   | S6  |         |
| 6 |   |   |         |
| 7 |   | SDOT  |         |


### Chip location

{{< shuttle-map "tt07" "965" >}}
