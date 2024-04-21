---
hidden: true
title: "233 A 555-Timer Clone for Tiny Tapeout 6"
weight: 150
---

## 233 : A 555-Timer Clone for Tiny Tapeout 6

* Author: Vincent Fusco
* Description: Blinks an LED the hard way
* [GitHub repository](https://github.com/vincentfusco/tt06_555)
* [GDS submitted](https://github.com/vincentfusco/tt06_555/actions/runs/8500042595)
* Analog project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

It duplicates the functionality of a 555 timer. Try configuring it in the "astable" configuration using external resistors and capacitors.

### How to test

Find a 555 timer datasheet and attempt some of the suggested circuits.

Connect pins to a breadboard with jumper wire.

Construct circuit shown in Figure 7-5 at: https://www.ti.com/lit/ds/symlink/lmc555.pdf?ts=1711738020668.

Test 2:

Duplicate circuit in Figure 6-2 at: https://www.ti.com/lit/ds/symlink/lmc555.pdf?ts=1711738020668. Compare resulting maximum frequency. The CMOS-based TI 555-Timer has a maximum frequency of 3.0MHz. Compare.

### External hardware

1. Wires for breadboard.
2. Through-hole resistors and capacitors of various values, LEDs, etc.
3. Breadboard.
4. Oscilloscope (for maximum frequency test)


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | DI_RESET_N | DO_OUT |  |
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "233" >}}
