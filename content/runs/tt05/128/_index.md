---
hidden: true
title: "128 Count via LFSR"
weight: 64
---

## 128 : Count via LFSR

* Author: Eric Smith
* Description: Count via LFSR and display on 7 segment
* [GitHub repository](https://github.com/ericsmi/tt05-wokwi-lfsr-counter)
* [GDS submitted](https://github.com/ericsmi/tt05-wokwi-lfsr-counter/actions/runs/6704814969)
* [Wokwi](https://wokwi.com/projects/379764885531576321) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 



### How it works

after sync reset on io[0], send some clocks. increment count on posedge clock


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | reset_n  | segment a | none |
| 1 | none  | segment b | none |
| 2 | none  | segment c | none |
| 3 | none  | segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | dot | none |

### Chip location

{{< shuttle-map "tt05" "128" >}}
