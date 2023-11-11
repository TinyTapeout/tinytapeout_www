---
hidden: true
title: "166 RNN (Demo)"
weight: 160
---

## 166 : RNN (Demo)

* Author: Ridger Zhu
* Description: Count up to 10, one second at a time.
* [GitHub repository](https://github.com/ridgerchu/first-chip)
* [GDS submitted](https://github.com/ridgerchu/first-chip/actions/runs/6752967968)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Apply an input current to an RNN hidden state, where the hidden state will multiply with a 8x8 matrix.


### How to test

After reset, the hidden state will be set to 0.

Then change the inputs to change the current. You can read the output current to know the result.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | out bit a | unspecified |
| 1 | current bit 12  | out bit b | unspecified |
| 2 | current bit 13  | out bit c | unspecified |
| 3 | current bit 14  | out bit d | unspecified |
| 4 | current bit 15  | out bit e | unspecified |
| 5 | current bit 16  | out bit f | unspecified |
| 6 | current bit 17  | out bit g | unspecified |
| 7 | current bit 18  | out bit h | unspecified |

### Chip location

{{< shuttle-map "tt05" "166" >}}
