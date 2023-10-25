---
hidden: true
title: "131 Hello Generator"
weight: 132
---

## 131 : 0b 010 000 011 : Hello Generator

{{< tt-scanchain-switches "010000011" >}}

* Author: Skyler Saleh
* Description: Flashes 'H-E-L-L-O' on the 7 segment display
* [GitHub repository](https://github.com/skylersaleh/tt02-hello)
* [Most recent GDS build](https://github.com/skylersaleh/tt02-hello/actions/runs/3602816918)
* HDL project
* [Extra docs]()
* Clock: 2048 Hz
* External hardware: None



### How it works

 An input clock signal is fed into a configureable clock divider which generates a slower clock every 1 to 2^15 cycles (depending on configuration). The rate of the clock divider is configured using the dipswitches under the equation of output_clock_hz = input_clock_hz/(2^clock_divider_ratio[3:0])
This slow clock increments a 3 bit counter which is used to index a built in character generator ROM, whose outputs will be used to drive the segment a,b,c,d,e,f,g on the 7 seg display. The character rom contains bits to light up the segments as 'H-E-L-L-O- - - '
The outputs of the character rom are anded with (slow_clock|flash_enable) to cause the display to blank between letters when flashing is enabled.
A debug harness(accessed by setting the debug_mode dip switch to 1) allows the character generator rom to be indexed using dip switch settings, and for the slow clock to be source from dip switches instead of the clock divider. 

### How to test

 Configure input clock rate as 2048hz on the first input.
Set dip_switch[1] to 1 Set dip_switch[2] to 1 Set dip_switch[3] to 0 Set dip_switch[4] to 1
This will configure the input clock divider to generate a 1Hz slow clock from the 2048hz input clock.
Set dip_switch[5] to 0 Set dip_switch[6] to 0 Set dip_switch[7] to 0
This will disable the test harness and setup normal operation.
Connect a 7 segment display to outputs, and the device should flash 'H-E-L-L-O' followed by 3 letters worth of blank display.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | if debug_mode == 0: clock_divider_ratio[0] elif debug_mode == 1: character_rom_index[0]  | segment b |
| 2 | if debug_mode == 0: clock_divider_ratio[1] elif debug_mode == 1: character_rom_index[1]  | segment c |
| 3 | if debug_mode == 0: clock_divider_ratio[2] elif debug_mode == 1: character_rom_index[2]  | segment d |
| 4 | if debug_mode == 0: clock_divider_ratio[3] elif debug_mode == 1: slow_clock_output (used for flash generator)  | segment e |
| 5 | flash enable: 0 = Flash display between each output letter. 1 = Do not flash display.  | segment f |
| 6 | must be zero: 0 = Prints 'H-E-L-L-O' 1 = Implementation defined behavior  | segment g |
| 7 | debug_mode: 0 = normal operation, 1 = debug mode  | segment decimal |
