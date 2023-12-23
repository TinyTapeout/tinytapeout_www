---
hidden: true
title: "42 ring osc test"
weight: 85
---

## 42 : ring osc test

* Author: Bob Poekert
* Description: simple ring oscillator
* [GitHub repository](https://github.com/bobpoekert/tinytapeout)
* [GDS submitted](https://github.com/bobpoekert/tinytapeout/actions/runs/6750857041)
* [Wokwi](https://wokwi.com/projects/380408396356749313) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

This outputs a square wave at... some frequency on pins 0-3, where the pins are phase shifted by... some frequency.


### How to test

Just apply power.


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

{{< shuttle-map "tt05" "42" >}}
