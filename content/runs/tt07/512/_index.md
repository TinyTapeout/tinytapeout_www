---
hidden: true
title: "512 TT07 Analog Factory Test"
weight: 3
---

## 512 : TT07 Analog Factory Test

* Author: Sylvain Munaut
* Description: Test structures for TT07 analog support
* [GitHub repository](https://github.com/smunaut/tt07-analog-factory-test)
* [GDS submitted](https://github.com/smunaut/tt07-analog-factory-test/actions/runs/8941656972)
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
| 0 | 11 | ibias           |
| 1 | 6 | vgnd_sense           |
| 2 | 10 | vpwr_sense           |
| 3 | 7 | loopback[0]           |
| 4 | 9 | loopback[1]           |
| 5 | 8 | loopback[2]           |

### Chip location

{{< shuttle-map "tt07" "512" >}}
