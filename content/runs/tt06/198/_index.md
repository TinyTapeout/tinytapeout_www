---
hidden: true
title: "198 Two ports USB CDC device"
weight: 8
---

## 198 : Two ports USB CDC device

* Author: Maximo Balestrini
* Description: USB CDC device with two ports each with a different application
* [GitHub repository](https://github.com/mbalestrini/tt06_usb_cdc_devices)
* [GDS submitted](https://github.com/mbalestrini/tt06_usb_cdc_devices/actions/runs/8758168087)
* HDL project
* [Extra docs]()
* Clock: 48000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### PRELIMINARY INFO

### How it works

The design works as Full Speed (12Mbit/s) USB communications device class (or USB CDC class).  
Most of the code is based on this repo: https://github.com/ulixxe/usb_cdc

When connected to a pc the device should appear 1 or more serial ports. (COMX on Windows, /dev/ttyACMx on Linux and /dev/cu.usbmodemxxxx on OSX)  
Linux requires that the user account belongs to the dialout group to grant permissions for virtual COM access.

Channel 0 application: Input to serial  
When the value from one of the inputs change from 0 to 1 or 1 to 0 it sends a character to the port.

| pin | rise | fall |
| --- | ---- | ---- |
|input[0] | A | a |
|input[1] | B | b |
|input[2] | C | c |
|input[3] | D | d |
|input[4] | E | e |
|input[5] | F | f |
|input[6] | G | g |
|input[7] | H | h |

### How to test

(here goes a simple schematic some instructions)

### External hardware

USB cable
1.5k resistor

optional:
Buttons for the inputs


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input_0  | usb_pu  |      |
| 1 | input_1  | debug_led  |      |
| 2 | input_2  | debug_usb_configured  |      |
| 3 | input_3  | debug_usb_tx_en  |      |
| 4 | input_4  | debug_frame[0]  |      |
| 5 | input_5  | debug_frame[1]  |      |
| 6 | input_6  | debug_frame[2]  |      |
| 7 | input_7  | debug_frame[3]  |      |


### Chip location

{{< shuttle-map "tt06" "198" >}}
