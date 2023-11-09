---
hidden: true
title: "78 Supercon 2023"
weight: 46
---

## 78 : Supercon 2023

* Author: Alec Probst
* Description: Supercon 2023 Tiny Tapeout Submission. Displays a white pixel and blue background through VGA. Makes use of Cutout1's VGA Flappy bird code.
* [GitHub repository](https://github.com/alecjprobst/supercon2023)
* [GDS submitted](https://github.com/alecjprobst/supercon2023/actions/runs/6751379265)
* HDL project
* [Extra docs]()
* Clock: 25MHz Hz
* External hardware: A VGA adaptor



### How it works

Correctly times the signal Digital outputs for VGA


### How to test

Connect to a VGA connector. Use a D2A Converter.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | R1 | none |
| 1 | none  | G1 | none |
| 2 | none  | B1 | none |
| 3 | none  | vsync | none |
| 4 | none  | R0 | none |
| 5 | none  | G0 | none |
| 6 | none  | B0 | none |
| 7 | none  | hsync | none |
