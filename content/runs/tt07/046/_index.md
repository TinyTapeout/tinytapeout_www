---
hidden: true
title: "46 Full-adder out of a kmap"
weight: 23
---

## 46 : Full-adder out of a kmap

* Author: Levi Feldman
* Description: A full-adder made out of a kmap.
* [GitHub repository](https://github.com/levifeldman/tt7)
* [GDS submitted](https://github.com/levifeldman/tt7/actions/runs/9332590407)
* [Wokwi](https://wokwi.com/projects/399518371950068737) project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

It is a straightforward full-adder circuit but it is made directly out of the kmaps for both outputs.

### How to test

Standard full-adder usage. But the implementation is different though.

### External hardware

None.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | A  | SUM  |         |
| 1 | B  | C-OUT  |         |
| 2 | C-IN  |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |


### Chip location

{{< shuttle-map "tt07" "46" >}}
