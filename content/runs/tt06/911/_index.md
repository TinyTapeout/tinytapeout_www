---
hidden: true
title: "911 Moosic logic-locked design"
weight: 57
---

## 911 : Moosic logic-locked design

* Author: Gabriel Gouvine
* Description: 8-bit counter locked with Moosic logic locking
* [GitHub repository](https://github.com/Coloquinte/locked-tapeout)
* [GDS submitted](https://github.com/Coloquinte/locked-tapeout/actions/runs/8615804787)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a simple counter that is incremented every time the first input bit is set.

The trick is that is it locked using logic locking, so that it won't work unless the proper key is set first.

### How to test

You need to initialize the key with inputs "11100110" (or 0xe6). The 6 most significant bits (111001) are the key, and the second bit is the key enable.
Then you can run the counter: "00000001" will increment it, while "00000000" will keep the same value.

### External hardware

This is purely self-contained to demonstrate logic locking.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | DO_INCR | CNT_0 |  |
| 1 | KEY_ENABLE | CNT_1 |  |
| 2 | KEY_0 | CNT_2 |  |
| 3 | KEY_1 | CNT_3 |  |
| 4 | KEY_2 | CNT_4 |  |
| 5 | KEY_3 | CNT_5 |  |
| 6 | KEY_4 | CNT_6 |  |
| 7 | KEY_5 | CNT_7 |  |

### Chip location

{{< shuttle-map "tt06" "911" >}}
