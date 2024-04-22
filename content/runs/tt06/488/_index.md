---
hidden: true
title: "488 Analog Test Circuit ITS: VCO"
weight: 36
---

## 488 : Analog Test Circuit ITS: VCO

* Author: Astria Nur Irfansyah
* Description: Voltage controlled ring oscillator. 
* [GitHub repository](https://github.com/nurirfansyah/tt06-analog-its_ip_alits01)
* [GDS submitted](https://github.com/nurirfansyah/tt06-analog-its_ip_alits01/actions/runs/8757979613)
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

The circuit is a voltage-controlled ring oscillator (VCRO) using transmission gates as the delay control element. It is based on the paper:

Retdian, N., Takagi, S., & Fujii, N. (2002). Voltage controlled ring oscillator with wide tuning range and fast voltage swing. 2002 IEEE Asia-Pacific Conference on ASIC, AP-ASIC 2002 - Proceedings, 201–204. https://doi.org/10.1109/APASIC.2002.1031567.

### How to test

Pinouts:

- input pins: v_control_n, v_control_p
- output pin: out

### External hardware

To test, apply control voltage v_control_n and v_control_p, where the sum of the two voltages should ideally be equal to the supply voltage of 1.8V.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  | out5 |  |
| 1 |  | out4 |  |
| 2 |  | out3 |  |
| 3 |  | out2 |  |
| 4 |  | out1 |  |
| 5 |  | out0 |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "488" >}}
