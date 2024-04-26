---
hidden: true
title: "298 Dice"
weight: 105
---

## 298 : Dice

* Author: Mastro Gippo
* Description: Roll a dice
* [GitHub repository](https://github.com/mastrogippo/tt06-mastrogippo)
* [GDS submitted](https://github.com/mastrogippo/tt06-mastrogippo/actions/runs/8679404401)
* [Wokwi](https://wokwi.com/projects/395054823837887489) project
* [Extra docs](None)
* Clock: 10000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Pull IN0 high, dice will roll. Release and it will stop.

### How to test

Please don't

### External hardware

7seg display mapped a-g to OUT0-6, a button to VCC on IN0


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | btn_r | da |  |
| 1 |  | db |  |
| 2 |  | dc |  |
| 3 |  | dd |  |
| 4 |  | de |  |
| 5 |  | df |  |
| 6 |  | dg |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "298" >}}
