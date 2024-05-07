---
hidden: true
title: "559 UART Transceiver"
weight: 61
---

## 559 : UART Transceiver

* Author: Saad Khan, Saim Iqbal
* Description: 8 bit data frame, with little endian transmit and receive signals
* [GitHub repository](https://github.com/theuppercaseguy/GIKI-Tapeout)
* [GDS submitted](https://github.com/theuppercaseguy/GIKI-Tapeout/actions/runs/8752023862)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

to be added later

### How to test

to be added later

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any
to be added later


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui_in[0]  | uo_out[0]  | uio_in[0]        |
| 1 | ui_in[1]  | uo_out[1]  | uio_in[1]        |
| 2 | ui_in[2]  | uo_out[2]  | uio_in[2]        |
| 3 | ui_in[3]  | uo_out[3]  | uio_out[3]        |
| 4 | ui_in[4]  | uo_out[4]  | uio_out[4]        |
| 5 | ui_in[5]  | uo_out[5]  | uio_out[5]        |
| 6 | ui_in[6]  | uo_out[6]  | uio_out[6]        |
| 7 | ui_in[7]  | uo_out[7]  | uio_out[7]        |


### Chip location

{{< shuttle-map "tt06" "559" >}}
