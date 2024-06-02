---
hidden: true
title: "206 LFSR"
weight: 50
---

## 206 : LFSR

* Author: James Meech and Werner Florian
* Description: Linear feedback shift register random number generator
* [GitHub repository](https://github.com/JamesTimothyMeech/TT07-LFSR)
* [GDS submitted](https://github.com/JamesTimothyMeech/TT07-LFSR/actions/runs/9302554188)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

It is a linear feedback shift register random number generator connected to a wishbone bus to allow it to fit within the pin constraints of Tiny Tapeout.

### How to test

Please see the cocotb testbench in the test.py in the test directory for the startup procedure for loading a seed and starting the linear feedback shift register output.

### External hardware

Use the microcontroller on the development board to apply the correct startup signals to the board.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Wishbone data input bit 0  | Output bit to indicate whether or not the wishbone has stalled (o_wb_stall)  | Wishbone input bit to indicate that a valid bus cycle is in progress (i_wb_cyc, hardcoded as an input)        |
| 1 | Wishbone data input bit 1  | LFSR output bit (o_wb_data)  | Wishbone chipselect input bit to indicate a valid seed data transfer cycle (i_wb_stb, hardcoded as an input)        |
| 2 | Wishbone data input bit 2  | Output bit for the wishbone to acknowledge the successful end of writing part of the LFSR seed (o_wb_ack)  | Wishbone input bit to indicate a read or a write cycle read = 0, write = 1 (i_wb_we, hardcoded as an input)        |
| 3 | Wishbone data input bit 3  | Not used in this design  | Wishbone input address bit zero to select which eight bit byte of the seed to write (i_wb_addr[0])        |
| 4 | Wishbone data input bit 4  | Not used in this design  | Wishbone input address bit one to select which eight bit byte of the seed to write (i_wb_addr[1])        |
| 5 | Wishbone data input bit 5  | Not used in this design  | Wishbone input address bit two to select which eight bit byte of the seed to write (i_wb_addr[2])        |
| 6 | Wishbone data input bit 6  | Not used in this design  | Not used in this design        |
| 7 | Wishbone data input bit 7  | Not used in this design  | Not used in this design        |


### Chip location

{{< shuttle-map "tt07" "206" >}}
