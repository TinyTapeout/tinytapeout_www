---
hidden: true
title: "678 Displays CIt"
weight: 77
---

## 678 : Displays CIt

* Author: Cambridge
* Description: To display 'CIt' on 7 segment display
* [GitHub repository](https://github.com/cittapeout/Citech)
* [GDS submitted](https://github.com/cittapeout/Citech/actions/runs/8748673309)
* [Wokwi](https://wokwi.com/projects/395522292785089537) project
* [Extra docs](None)
* Clock: 1 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Worwi project using a D flipflop ring to display "CIt" on the 7 segment display.

### How to test

Turn on the required inputs ,turn off the unused inputs.

### External hardware

None,beside the TT demo board.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | run | led_a |  |
| 1 | state_init[0] | led_b |  |
| 2 | state_init[1] | led_c |  |
| 3 | state_init[2] | led_d |  |
| 4 | state_init[3] | led_e |  |
| 5 | unused | led_f |  |
| 6 | unused | led_g |  |
| 7 | unused | led_h |  |

### Chip location

{{< shuttle-map "tt06" "678" >}}
