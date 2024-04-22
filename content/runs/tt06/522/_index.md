---
hidden: true
title: "522 IDAC8 based on divide current by 2"
weight: 42
---

## 522 : IDAC8 based on divide current by 2

* Author: Emilian Miron
* Description: IDAC8 based on divide current by 2.
* [GitHub repository](https://github.com/diferential/tt06-rf-playground)
* [GDS submitted](https://github.com/diferential/tt06-rf-playground/actions/runs/8758383324)
* Analog project
* [Extra docs](None)
* Clock: 0 Hz

### How it works

Generates VBIAS based on a resistor and current source / mirrors.

Differential pairs and a Gilbert mixer perform amplification and frequency mixing.

### How to test

Output is at UA0

### External hardware

Input in UA1 / UA2.

Digital inputs will have the PLL inputs.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | bit0 | n/a | n/a |
| 1 | bit1 | n/a | n/a |
| 2 | bit2 | n/a | n/a |
| 3 | bit3 | n/a | n/a |
| 4 | bit4 | n/a | n/a |
| 5 | bit5 | n/a | n/a |
| 6 | bit6 | n/a | n/a |
| 7 | bit7 | n/a | n/a |

### Chip location

{{< shuttle-map "tt06" "522" >}}
