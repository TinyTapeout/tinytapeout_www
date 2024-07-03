---
hidden: true
title: "524 TT07 Differential Receiver test"
weight: 68
---

## 524 : TT07 Differential Receiver test

* Author: Sylvain Munaut
* Description: Small test module to test functionality of a differential input receiver
* [GitHub repository](https://github.com/smunaut/tt07-diff-rx)
* [GDS submitted](https://github.com/smunaut/tt07-diff-rx/actions/runs/9332337901)
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
| 0 | debug  | q[0]  | q[8]        |
| 1 | bias_sel  | q[1]  | q[9]        |
| 2 |   | q[2]  | q[10]        |
| 3 |   | q[3]  | q[11]        |
| 4 |   | q[4]  | q[12]        |
| 5 |   | q[5]  | q[13]        |
| 6 |   | q[6]  | q[14]        |
| 7 |   | q[7]  | q[15]        |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | clk_n           |
| 1 | 10 | clk_p           |
| 2 | 7 | data_n           |
| 3 | 9 | data_p           |
| 4 | 8 | ibias           |

### Chip location

{{< shuttle-map "tt07" "524" >}}
