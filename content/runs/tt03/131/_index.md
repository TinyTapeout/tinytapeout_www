---
hidden: true
title: "131 8x8 Bit Pattern Player"
weight: 132
---

## 131 : 0b 010 000 011 : 8x8 Bit Pattern Player

{{< tt-scanchain-switches "010000011" >}}

* Author: Thorsten Knoll
* Description: 8x8 bit serial programmable, addressable and playable memory.
* [GitHub repository](https://github.com/ThorKn/tinytapeout02_pattern_player)
* [Wokwi](https://wokwi.com/projects/341620484740219475) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: You could programm, address and play the 8x8 Bit Pattern Player with a breadboard, two clock buttons and some dipswitches on the input side. Add some LED to the output side. Just like the WOKWI simulation.

![picture](images/pattern_player.png)

### How it works

The 8x8 memory is a 64-bit shiftregister, consisting of 64 serial chained D-FlipFlops (data: IN0, clk_sr: IN1). 8 memoryslots of each 8 bit can be directly addressed via addresslines (3 bit: IN2, IN3, IN4) or from a clockdriven player (3 bit counter, clk_pl: IN7). A mode selector line (mode: IN5) sets the operation mode to addressing or to player. The 8 outputs are driven by the 8 bit of the addressed memoryslot.

### How to test

Programm the memory: Start by filling the 64 bit shiftregister via data and clk_sr, each rising edge on clk_sr shifts a new data bit into the register. Select mode: Set mode input for direct addressing or clockdriven player. Address mode: Address a memoryslot via the three addresslines and watch the memoryslot at the outputs. Player mode: Each rising edge at clk_pl enables the next memoryslot to the outputs.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | data  | bit 0 |
| 1 | clk_sr  | bit 1 |
| 2 | address_0  | bit 2 |
| 3 | address_1  | bit 3 |
| 4 | address_2  | bit 4 |
| 5 | mode  | bit 5 |
| 6 | none  | bit 6 |
| 7 | clk_pl  | bit 7 |
