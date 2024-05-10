---
hidden: true
title: "239 TT06 Analog Factory Test"
weight: 45
---

## 239 : TT06 Analog Factory Test

* Author: Sylvain Munaut
* Description: Test structures for TT06 analog support
* [GitHub repository](https://github.com/smunaut/tt06-analog-factory-test)
* [GDS submitted](https://github.com/smunaut/tt06-analog-factory-test/actions/runs/8767930254)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

### How it works

FIXME

### How to test

FIXME

### External hardware

FIXME


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ena0_n  |   |         |
| 1 | ena1  |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 5 | ibias           |
| 1 | 0 | vgnd_sense           |
| 2 | 4 | vpwr_sense           |
| 3 | 1 | loopback[0]           |
| 4 | 3 | loopback[1]           |
| 5 | 2 | loopback[2]           |

### Chip location

{{< shuttle-map "tt06" "239" >}}
