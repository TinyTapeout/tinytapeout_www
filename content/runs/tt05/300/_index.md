---
hidden: true
title: "300 TT02 Wokwi 7seg remake"
weight: 106
---

## 300 : TT02 Wokwi 7seg remake

* Author: Darryl Miles
* Description: TT02 Wokwi 7seg remake (MUX transposed)
* [GitHub repository](https://github.com/dlmiles/tt05-7seg-mux-transpose)
* [GDS submitted](https://github.com/dlmiles/tt05-7seg-mux-transpose/actions/runs/6756835184)
* [Wokwi](https://wokwi.com/projects/380490286828784641) project
* [Extra docs](https://dlmiles.github.io/tt05-7seg-mux-transpose/)
* Clock: 0 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

This is a remake of the Matt Venn's original TT02 7seg wokwi project.

This version inverted the MUX SEL lines at the reset, so the transition is on the opposite edge.

This project wokwi link:, https://wokwi.com/projects/380490286828784641

The original project wokwi link: https://wokwi.com/projects/380490286828784641


### How to test

Select project and manually clock to see incrementing 7SEG output.


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

{{< shuttle-map "tt05" "300" >}}
