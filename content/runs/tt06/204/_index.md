---
hidden: true
title: "204 The James Retro Byte 8 computer"
weight: 54
---

## 204 : The James Retro Byte 8 computer

* Author: James Ridey
* Description: A 8bit microprocessor built from the ground up (nand2tetris)
* [GitHub repository](https://github.com/AeroX2/tt06-jrb8-computer)
* [GDS submitted](https://github.com/AeroX2/tt06-jrb8-computer/actions/runs/8723705761)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

### How it works

This is a 8 bit computer I made a long time ago in Logisim Evolution, which I have now decided to port to Tinytapeout and getting manufactured.
There is a little bit more information about how the CU works and the instructions supported but don't expect much
https://docs.google.com/document/d/1ZVZw_Kt-KQHER0Wr5ty7JpUEeox_284Mih4rwE16FVM/edit?usp=sharing

### How to test

The input pins and the output pins have been assigned respectively to the ui_in and uo_out respectively. As for the uio_in/out that needs to be configured with a SPI RAM and a SPI EEPROM.

The computer should start immediately once the clk starts driving it.

### External hardware

(check info.yaml for pins)

- SPI RAM
- SPI EEPROM


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input bit 0  | output bit 0  | cs rom        |
| 1 | input bit 1  | output bit 1  | mosi        |
| 2 | input bit 2  | output bit 2  | miso        |
| 3 | input bit 3  | output bit 3  | sck        |
| 4 | input bit 4  | output bit 4  | cs ram        |
| 5 | input bit 5  | output bit 5  |         |
| 6 | input bit 6  | output bit 6  |         |
| 7 | input bit 7  | output bit 7  | 24 addressing bit mode        |


### Chip location

{{< shuttle-map "tt06" "204" >}}
