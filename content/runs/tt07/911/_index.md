---
hidden: true
title: "911 SUBNEG CPU"
weight: 13
---

## 911 : SUBNEG CPU

* Author: Pawel Bialic
* Description: SUBNEG CPU requiring external parallel SRAM
* [GitHub repository](https://github.com/macros77/tt_project_02)
* [GDS submitted](https://github.com/macros77/tt_project_02/actions/runs/9332025123)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Implementation of a simple 8-bit SUBNEG CPU. The CPU interfaces to external SRAM memory through address output latch. CPU output can be implemented using a second output latch. The program to be executed has to be written to the SRAM by external means (e.g. a microcontroller) prior to setting CPU enable pin high. 3 inputs are provided for this purpose (CPU enable, External SRAM address latch CLK, External SRAM WEn).

### External hardware

3.3V SRAM memory (e.g. AS6C6264).
Memory address latch (e.g. 74HC574).
CPU output latch (e.g. 74HC574).
Device capable of displaying 8-bit output value.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | CPU enable  | SRAM address latch CLK  | CPU bi-directional bus        |
| 1 | External SRAM address latch CLK  | SRAM OEn  | CPU bi-directional bus        |
| 2 | External SRAM WEn  | SRAM WEn  | CPU bi-directional bus        |
| 3 |   | CPU output latch CLK  | CPU bi-directional bus        |
| 4 |   | Internal CPU state bit 0  | CPU bi-directional bus        |
| 5 |   | Internal CPU state bit 1  | CPU bi-directional bus        |
| 6 |   | Internal CPU state bit 2  | CPU bi-directional bus        |
| 7 |   | Internal CPU state bit 3  | CPU bi-directional bus        |


### Chip location

{{< shuttle-map "tt07" "911" >}}
