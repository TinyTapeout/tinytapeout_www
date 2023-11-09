---
hidden: true
title: "460 Dual Compute Unit"
weight: 150
---

## 460 : Dual Compute Unit

* Author: Himanshu Yadav
* Description: ComputeUnit implementation
* [GitHub repository](https://github.com/himanshu5-prog/tt_um_myChip)
* [GDS submitted](https://github.com/himanshu5-prog/tt_um_myChip/actions/runs/6520001004)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The project has two compute unit which perform some ALU operations based on input instructions and the final output
is xor of compute unit output.


### How to test

Reset needs to be 0 to make design go to reset mode and then set reset to 1 and ena to 1 to shift the design to
functional mode. I tested my design on EDA playground by creating testbench there. Testbench and design files are
there in test/ directory.


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
