---
hidden: true
title: "458 VGA Dino Game"
weight: 135
---

## 458 : VGA Dino Game

* Author: Anish Singhani
* Description: An endless-runner game implemented on a VGA monitor
* [GitHub repository](https://github.com/asinghani/dinogame-tt05)
* [GDS submitted](https://github.com/asinghani/dinogame-tt05/actions/runs/6753545892)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Connect to VGA and some buttons and play!


### How to test

Connect to a VGA monitor


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | jump btn  | VGA R0 | none |
| 1 | halt btn  | VGA G0 | none |
| 2 | debug btn  | VGA B0 | none |
| 3 | mode btn  | VGA vsync | none |
| 4 | none  | VGA R1 | none |
| 5 | none  | VGA G1 | none |
| 6 | none  | VGA B1 | none |
| 7 | none  | VGA hsync | none |

### Chip location

{{< shuttle-map "tt05" "458" >}}
