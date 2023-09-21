---
hidden: true
title: "68 I2S reeceiver, data mix and transmitter"
weight: 69
---

## 68 : I2S reeceiver, data mix and transmitter

* Author: Clemens Nasenberg
* Description: Mix two I2S streams according to selection
* [GitHub repository](https://github.com/cnasenbe/tt03-chnasenb-i2s)
* [Most recent GDS build](https://github.com/cnasenbe/tt03-chnasenb-i2s/actions/runs/4780316399)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: I2S Controller/Transmitter/Receiver



### How it works

Read in 2 Channels of I2S streams, mix them according to input bits (mute, I2S input 1 or 2 or both) and send them out again.
For adding the LSB of the data is truncated.
This should support standard I2S transmitter/receiver.

    https://www.sparkfun.com/datasheets/BreakoutBoards/I2SBUS.pdf


### How to test

You need to connect the word select signal (WS), continous serial clock (SCK) and serial data for channel 1 and 2 (SD_CH1 SD_CH2).
Configure channel_sel (b00 is mute, b01 channel 1, b10 channel 2 and b11 is adding ch1 and ch2), reset, then
let and I2S master drive the signals according to the standard and receive data on the output SD_OUT.
Some other IC needs to act as clock master and provide the clocks and signals.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | sck  | wsd |
| 1 | reset  | wsp |
| 2 | ws  | sd_out |
| 3 | sd_ch1  | none |
| 4 | sd_ch2  | none |
| 5 | channel_sel  | none |
| 6 | none  | none |
| 7 | none  | none |
