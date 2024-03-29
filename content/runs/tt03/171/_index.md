---
hidden: true
title: "171 SPI Flash State Machine"
weight: 172
---

## 171 : 0b 010 101 011 : SPI Flash State Machine

{{< tt-scanchain-switches "010101011" >}}

* Author: Greg Steiert
* Description: Implements a state machine stored in an external SPI flash
* [GitHub repository](https://github.com/steieio/tt02-sfsm-wokwi)
* [Wokwi](https://wokwi.com/projects/349228308755382868) project
* [Extra docs](https://github.com/steieio/tt02-sfsm-wokwi/blob/main/README.md)
* Clock: 0 Hz
* External hardware: SPI Flash with 0x03 read command and 24bit address

![picture](images/sfsm.png)

### How it works

Inputs and current state are shifted into a SPI flash to look up the next state and outputs

### How to test

Connect a SPI flash device loaded with state machine values

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | cs |
| 1 | reset  | dout |
| 2 | din  | out0 |
| 3 | in0  | out1 |
| 4 | in1  | out2 |
| 5 | in2  | out3 |
| 6 | in3  | out4 |
| 7 | in4  | out5 |
