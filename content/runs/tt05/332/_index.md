---
hidden: true
title: "332 TT05 Analog Test"
weight: 10
---

## 332 : TT05 Analog Test

* Author: Matt Venn
* Description: Test voltage divider
* [GitHub repository](https://github.com/mattvenn/tt05-analog-test)
* [GDS submitted](https://github.com/mattvenn/tt05-analog-test/actions/runs/6685909179)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

3 resistors are used to build a voltage divider connected between power & ground. Output taps are uo_out[2:0]


### How to test

Enable the block and check the uo_outputs. Expected that only uo_out[2] is high.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | {'UA[0]': 'divider out 0'} | not used |
| 1 | n/a  | {'UA[1]': 'divider out 1'} | n/a |
| 2 | n/a  | {'UA[2]': 'divider out 2'} | n/a |
| 3 | n/a  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |

### Chip location

{{< shuttle-map "tt05" "332" >}}
