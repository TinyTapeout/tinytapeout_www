---
hidden: true
title: "739 DIP Switch to HEX 7-segment Display"
weight: 92
---

## 739 : DIP Switch to HEX 7-segment Display

* Author: Lance Mitrex
* Description: Input Binary digit, 1 to 16 with the DIP Switch. The HEX is displayed on the 7-segment display.
* [GitHub repository](https://github.com/lancemitrex/tt06-verilog-template)
* [GDS submitted](https://github.com/lancemitrex/tt06-verilog-template/actions/runs/8757062538)
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

The project was originated during the training class, "ChipCraft: The Art of Chip Design for Non-Experts" presented by eFabless.

The project utilizes techniques associated with Tiny Tapeout and Redwood EDA.

Project Title: Input DIP Switch to HEX 7-Segment Display.

This Project is a 'simple' project for inexperienced FPGA and/or inexperienced Verilog programmers. The project reads the INPUT DIP Switch on the Tiny Tapeout Demo Board and outputs the properly formatted Hex character, to the 7-Segment display which is also located on the Tiny Tapeout Demo Board.

The complete Transaction-Level Verilog code is located in the file, "DIPSwitch_7-segment.v"

The remainder of this README.md file outlines the process utilized for this project.

### How to test

Select a HEX character from 1 to 16 (1 to F).  Input the HEX character by using the appropriate binary value, using the DIP Switch. The HEX character you selected and input will be displayed on the 7-segment display.

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |         |
| 1 |   |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt06" "739" >}}
