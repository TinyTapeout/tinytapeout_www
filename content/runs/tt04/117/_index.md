---
hidden: true
title: "117 Grain-Flex-FPGA"
weight: 110
---

## 117 : Grain-Flex-FPGA

* Author: Rice Shelley
* Description: FPGA designed in SpinalHDL.
* [GitHub repository](https://github.com/RiceShelley/tt04-grain-flex)
* [GDS submitted](https://github.com/RiceShelley/tt04-grain-flex/actions/runs/6114673466)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Grain-Flex-FPGA is a 1 CLB FPGA with 8 IO buffers. The single CLB has four 4 input LUTs each with an optional flipflop at the output.
The CLB has four inputs and four outputs that can be mapped to any IO buffer. Each LUT input pin can be mapped to any CLB input or
any other LUT's output including its own.


### How to test

The FPGA is programmed with a simple scan chain. The SpinalHDL project has a few examples of creating a bit stream. (Hopefully VTR support coming soon)


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Scan chain clock  | Scan chain data out | FPGA IO Buffer |
| 1 | Scan chain active high reset  | NA | FPGA IO Buffer |
| 2 | Scan chain enable  | NA | FPGA IO Buffer |
| 3 | Scan chain data in (sampled on rising edge of scan chain clock)  | NA | FPGA IO Buffer |
| 4 | NA  | NA | FPGA IO Buffer |
| 5 | NA  | NA | FPGA IO Buffer |
| 6 | NA  | NA | FPGA IO Buffer |
| 7 | NA  | dot | FPGA IO Buffer |
