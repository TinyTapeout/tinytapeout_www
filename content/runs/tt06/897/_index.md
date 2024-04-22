---
hidden: true
title: "897 soundgen"
weight: 130
---

## 897 : soundgen

* Author: Yanik Drmla
* Description: plays prelude.wav in endless loop
* [GitHub repository](https://github.com/dyanik9/jku-tt06-soundgen)
* [GDS submitted](https://github.com/dyanik9/jku-tt06-soundgen/actions/runs/8629346943)
* HDL project
* [Extra docs](None)
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Plays prelude.wav in real Hardware. This works with a sine stored as lookup-table which is being played with varying frequency.

### How to test

To test connect a Piezo to given Pins and listen!

### External hardware

piezo


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | nc | nc | nc |
| 1 | nc | nc | nc |
| 2 | nc | nc | nc |
| 3 | nc | nc | nc |
| 4 | nc | nc | nc |
| 5 | nc | nc | nc |
| 6 | nc | nc | pwm_pos |
| 7 | nc | nc | pwm_neg |

### Chip location

{{< shuttle-map "tt06" "897" >}}
