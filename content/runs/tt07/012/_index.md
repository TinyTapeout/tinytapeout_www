---
hidden: true
title: "12 UART"
weight: 54
---

## 12 : UART

* Author: Elisa Parent
* Description: Connecting two digital devices
* [GitHub repository](https://github.com/ElisaParent/tt_um_ElisaParent_UART_wowki)
* [GDS submitted](https://github.com/ElisaParent/tt_um_ElisaParent_UART_wowki/actions/runs/9322329532)
* [Wokwi](https://wokwi.com/projects/399336892246401025) project
* [Extra docs]()
* Clock: 300 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Using a connector to send digital signals to different digital parts.

### How to test

Switchs are used to pick the ASCII character

### External hardware

arduino,7-seg display, 8 switch


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | in1  | out1  |         |
| 1 | in2  | out2  |         |
| 2 | in3  | out3  |         |
| 3 | in4  |   |         |
| 4 | in5  |   |         |
| 5 | in6  |   |         |
| 6 | in7  |   |         |
| 7 | in8  |   |         |


### Chip location

{{< shuttle-map "tt07" "12" >}}
