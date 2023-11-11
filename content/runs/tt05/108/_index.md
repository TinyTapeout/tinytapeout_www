---
hidden: true
title: "108 Stochastic Multiplier"
weight: 134
---

## 108 : Stochastic Multiplier

* Author: David Parent
* Description: Creates a PRBS stream whre the probability of a 1 is the multiplication of two, two bit vectors.
* [GitHub repository](https://github.com/davidparent/Stochastic-Multiplier)
* [GDS submitted](https://github.com/davidparent/Stochastic-Multiplier/actions/runs/6750892399)
* [Wokwi](https://wokwi.com/projects/380229599886002177) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

See: P. K. Gupta and R. Kumaresan, “Binary multiplication with PN sequences,” IEEE Trans. Acoust., vol. 36, no. 4, pp. 603–606, Apr. 1988, doi: 10.1109/29.1564.


### How to test

Set A and B and clock.  Toggle reset low to make sure PRBS gen starts.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | CLK  | PRBS of A*B | none |
| 1 | RESET  | PRBS of A | none |
| 2 | A  | PRBS of B | none |
| 3 | B  | PRBS | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | dot | none |

### Chip location

{{< shuttle-map "tt05" "108" >}}
