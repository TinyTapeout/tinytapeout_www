---
hidden: true
title: "130 bitslam"
weight: 131
---

## 130 : bitslam

* Author: Jake "ferris" Taylor
* Description: bitslam is a programmable sound chip with 2 LFSR voices.
* [GitHub repository](https://github.com/yupferris/bitslam)
* [Most recent GDS build](https://github.com/yupferris/bitslam/actions/runs/3457367260)
* HDL project
* [Extra docs]()
* Clock: 6000 Hz
* External hardware: A 4-bit DAC connected to the four digital output pins.



### How it works

bitslam is programmed via its register write interface. A register write is performed by first writing an internal address register, which selects which register will be written to, and then writing a value. Bit 1 distinguishes address writes (0) or data writes (1). Address bits 1-2 address different internal modules: 00 addresses voice 0, 01 addresses voice 1, and 10 addresses the mixer. Address bit 0 addresses a register in the internal module. Each voice is controlled by a clock divider and a tap mask for the LFSR state. The clock divider is at address 0 and controls the rate at which the LFSR is updated, effectively controlling the pitch. Since bitslam is (expected to be) clocked at 6khz, the pitch will be determined by 3khz / x where x is the 6-bit clock divider value. Each voice also contains a 4-bit LFSR tap mask (address 1) which determines which of 4 LFSR bits are XOR'd together to determine the new LFSR LSB. The LFSR is 10 bits wide and the tap mask bits correspond to positions 1, 4, 6, and 9, respectively. The mixer has a single register to control the volume of each voice. Bits 0-2 determine voice 0 volume, and bits 3-5 determine voice 1 volume. A value of 0 means a voice is silent, and a value of 7 is full volume. Special thanks to Daniel "trilader" Schulte for pointing out a crucial interconnect bug.

### How to test

bitslam is meant to be driven and clocked by an external host, eg. a microcontroller. The microcontroller should use the register write interface described above to program the desired audio output (eg. to play a song or sound effects) and 4-bit digital audio should be generated on the 4 digital out pins.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | digital out 0 |
| 1 | address/data selector  | digital out 1 |
| 2 | address/data 0  | digital out 2 |
| 3 | address/data 1  | digital out 3 |
| 4 | address/data 2  | none |
| 5 | address/data 3  | none |
| 6 | address/data 4  | none |
| 7 | address/data 5  | none |
