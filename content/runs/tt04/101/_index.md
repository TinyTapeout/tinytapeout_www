---
hidden: true
title: "101 USB CDC (Serial)"
weight: 55
---

## 101 : USB CDC (Serial)

* Author: Uri Shaked
* Description: USB to Serial bridge
* [GitHub repository](https://github.com/TinyTapeout/tt04-usbcdc)
* [GDS submitted](https://github.com/TinyTapeout/tt04-usbcdc/actions/runs/5723019261)
* HDL project
* [Extra docs]()
* Clock: 48000000 Hz
* External hardware: 



### How it works

All the magic happens in https://github.com/davidthings/tinyfpga_bx_usbserial.


### How to test

Set the clock frequency to 48 MHz.
Connect usb_p and usb_n pins to D+ / D- USB pins through 68 ohm resistors.
Pull up D+ with 1.5k resistor.

The device should appear as a serial port on your computer.
Data received from USB host will appear on the output pins (rx) when `rx_ready` goes high.
You can send data to the USB device by waiting for `tx_ready` to go high,
setting the input pins (tx) to the byte you'd like to transmit, and setting `tx_valid` high.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | tx[0]  | rx[0] | usb_p |
| 1 | tx[1]  | rx[1] | usb_n |
| 2 | tx[2]  | rx[2] | tx_valid |
| 3 | tx[3]  | rx[3] | tx_ready |
| 4 | tx[4]  | rx[4] | rx_valid |
| 5 | tx[5]  | rx[5] | rx_ready |
| 6 | tx[6]  | rx[6] | dp_pu_o |
| 7 | tx[7]  | rx[7] | configured |
