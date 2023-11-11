---
hidden: true
title: "2 TinyTapeout 05 Loopback Test Module"
weight: 74
---

## 2 : TinyTapeout 05 Loopback Test Module

* Author: Sylvain Munaut
* Description: Loopback test module
* [GitHub repository](https://github.com/TinyTapeout/tt05-loopback)
* [GDS submitted](https://github.com/TinyTapeout/tt05-loopback/actions/runs/6500278291)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Input 0 goes to output 0 through 6.
Output 7 is input4 & input5 & input6 & input7


### How to test

Toggle input 0, measure the time for output 0 to change.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | in0  | mirrors in0 | none |
| 1 | none  | mirrors in0 | none |
| 2 | none  | mirrors in0 | none |
| 3 | none  | mirrors in0 | none |
| 4 | in4  | mirrors in0 | none |
| 5 | in5  | mirrors in0 | none |
| 6 | in6  | mirrors in0 | none |
| 7 | in7  | the value of in4 & in5 & in6 & in7 | none |

### Chip location

{{< shuttle-map "tt05" "2" >}}
