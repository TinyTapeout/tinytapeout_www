---
hidden: true
title: "294 6 bit Counter and Piano Music created by Chip Inventor"
weight: 168
---

## 294 : 6 bit Counter and Piano Music created by Chip Inventor

* Author: Matheus
* Description: Chip Inventor
* [GitHub repository](https://github.com/matheus-VBLabs/tt05_chip_inventor_01)
* [GDS submitted](https://github.com/matheus-VBLabs/tt05_chip_inventor_01/actions/runs/6756080841)
* HDL project
* [Extra docs]()
* Clock: 27000000 Hz
* External hardware: 



### How it works

There are two diagrams created by the Chip Inventor platform, whereas by using blocks, you can create your own semiconductor design.
The piano tune is one diagram. A song-throwing buzzer can be configured with one button and a buzzer.
A 6-bit counter diagram is the other.
Chip Inventor website: https://chipinventor.com


### How to test

Using a buzzer, it's possible to listen to a music note.
Connecting 4 LEDs in pull_up makes it possible to see the binary value.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | btn1  | buzzer | none |
| 1 | none  | l1 | none |
| 2 | none  | l2 | none |
| 3 | none  | l3 | none |
| 4 | none  | l4 | none |
| 5 | none  | led0 | none |
| 6 | none  | led1 | none |
| 7 | none  | none | none |

### Chip location

{{< shuttle-map "tt05" "294" >}}
