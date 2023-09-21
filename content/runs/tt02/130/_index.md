---
hidden: true
title: "130 PS2 keyboard Interface"
weight: 131
---

## 130 : PS2 keyboard Interface

* Author: Tanish Khanchandani
* Description: PS2 keyboard interface to enter charecters into a computer. Use the PS2 hex scan codes (https://techdocs.altium.com/display/FPGA/PS2+Keyboard+Scan+Codes) to enter hex codes and it will send the letter to your computer.
* [GitHub repository](https://github.com/tanishnk/Tiny-Tapeout-2-submission-Tanish-k)
* [Most recent GDS build](https://github.com/tanishnk/Tiny-Tapeout-2-submission-Tanish-k/actions/runs/3602672487)
* [Wokwi](https://wokwi.com/projects/349934460979905106) project
* [Extra docs]()
* Clock: 6000 Hz
* External hardware: 3.3V to 5V logic level converter



### How it works

Most likely does not work. Takes in keyboard hex scan codes and sends data to your PC. The chip emulates a key being pressed down and released. (link to protocol - https://techdocs.altium.com/display/FPGA/PS2_W+-+Transmission+Protocols). The logic puts data into a parallel to serial interface and sends the data with some of the other protocol necessities to simulate a key being pressed and released.

### How to test

Select clock with input 1. Set the first hex character using inputs 2-5. Set input 6 to 1. Set input 6 back to 0. Set the second hex character using inputs 2-5 and set input 7 to 1 and then back to 0. Set input 8 to 1 to send the data.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | NC |
| 1 | hex Bit 1  | NC |
| 2 | hex Bit 2  | NC |
| 3 | hex Bit 3  | NC |
| 4 | hex Bit 4  | NC |
| 5 | Set 1st hex  | NC |
| 6 | set 2nd hex  | Clock |
| 7 | Enable to send  | Data |
