---
hidden: true
title: "192 7 segment seconds"
weight: 21
---

## 192 : 7 segment seconds

* Author: Matt Venn
* Description: counts up to 9 and wraps to 0. One step per clock cycle
* [GitHub repository](https://github.com/mattvenn/tt05-seven-segment-seconds-wokwi)
* [GDS submitted](https://github.com/mattvenn/tt05-seven-segment-seconds-wokwi/actions/runs/6709552100)
* [Wokwi](https://wokwi.com/projects/380119282165535745) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Uses SR flops and avoid combinational logic in the clock path which caused clock glitches on the previous version.


### How to test

Press the reset button, then press the clock button to advance the count.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | segment a | none |
| 1 | none  | segment b | none |
| 2 | none  | segment c | none |
| 3 | none  | segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | dot | none |

### Chip location

{{< shuttle-map "tt05" "192" >}}
