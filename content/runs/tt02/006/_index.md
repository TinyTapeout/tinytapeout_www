---
hidden: true
title: "6 S4GA: Super Slow Serial SRAM FPGA"
weight: 7
---

## 6 : 0b000000110 : S4GA: Super Slow Serial SRAM FPGA

* Author: Jan Gray
* Description: one fracturable 5-LUT that receives FPGA LUT configuration frames, serially evaluates LUT inputs and LUT outputs
* [GitHub repository](https://github.com/grayresearch/tt02-s4ga)
* [Most recent GDS build](https://github.com/grayresearch/tt02-s4ga/actions/runs/3599279296)
* HDL project
* [Extra docs](https://github.com/grayresearch/tt02-s4ga/blob/main/README.md)
* Clock:  Hz
* External hardware: serial SRAM or FLASH

![picture](images/S4GA-block-diagram.png)

### How it works

The design is a single physical LUT into which an external agent pours a series of 92b LUT configuration frames, four bits per cycle. Every 23 clock cycles it evaluates a 5-input LUT. The last N=283 LUT output values are kept on die to be used as LUT inputs of subsequent LUTs. The design also has 2 FPGA input pins and 7 FPGA output pins.

### How to test

tricky

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | out[0] |
| 1 | rst  | out[1] |
| 2 | si[0]  | out[2] |
| 3 | si[1]  | out[3] |
| 4 | si[2]  | out[4] |
| 5 | si[3]  | out[5] |
| 6 | in[0]  | out[6] |
| 7 | in[1]  | debug |
