---
hidden: true
title: "423 Cyclic Redundancy Check 8 bit"
weight: 149
---

## 423 : Cyclic Redundancy Check 8 bit

* Author: EconomIC Engineers
* Description: Error detecting circuit commonly used in digital networks and storage devices to detect accidental changes to digital data.
* [GitHub repository](https://github.com/ariz207/tt06-CRC8bit)
* [GDS submitted](https://github.com/ariz207/tt06-CRC8bit/actions/runs/8700054588)
* [Wokwi](https://wokwi.com/projects/394830069681034241) project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

https://en.wikipedia.org/wiki/Cyclic_redundancy_check
Explain how your project works

### How to test

https://quickbirdstudios.com/blog/validate-data-with-crc/
https://thepiandi.blogspot.com/2014/07/cyclic-redundancy-check-crc-of-ds18b20.html

Explain how to use your project

### External hardware

Needed will be LEDs, a clock or button to step clock, a switch for reset and inputs.
List external hardware used in your project (e.g. PMOD, LED display, etc), if any


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Data Stream input | 8th bit |  |
| 1 |  | 7th bit |  |
| 2 |  | 6th bit |  |
| 3 |  | 5th bit |  |
| 4 |  | 4th bit |  |
| 5 |  | 3rd bit |  |
| 6 |  | 2nd bit |  |
| 7 | Set for all flip flops | 1st bit |  |

### Chip location

{{< shuttle-map "tt06" "423" >}}
