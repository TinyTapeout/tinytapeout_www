---
hidden: true
title: "231 Naive 8-bit Binary Counter"
weight: 129
---

## 231 : Naive 8-bit Binary Counter

* Author: Sean Bruton
* Description: A simple 8-bit binary counter
* [GitHub repository](https://github.com/sbruton/asic-poc)
* [GDS submitted](https://github.com/sbruton/asic-poc/actions/runs/6755972809)
* [Wokwi](https://wokwi.com/projects/380412382001715201) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Eight D flip flops chained together count the clock input and use the 8 outputs to represent the binary value. The counter lacks
useful features like a deterministic initial state or a reset function. This was constructed during the Hackaday Supercon 2023 ASIC
workshop as a rapid learning exercise.


### How to test

Pulse the clock and monitor the outputs for the binary value.


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

{{< shuttle-map "tt05" "231" >}}
