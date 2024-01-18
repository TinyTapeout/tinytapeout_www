---
hidden: true
title: "109 Configurable SR"
weight: 110
---

## 109 : 0b 001 101 101 : Configurable SR

{{< tt-scanchain-switches "001101101" >}}

* Author: Greg Steiert
* Description: Configurable gates driving SR and D flip-flops
* [GitHub repository](https://github.com/steieio/tt02-submission-universal-sr)
* [Most recent GDS build](https://github.com/steieio/tt02-submission-universal-sr/actions/runs/3551163505)
* [Wokwi](https://wokwi.com/projects/346916357828248146) project
* [Extra docs](https://github.com/steieio/tt02-submission-universal-sr/blob/main/README.md)
* Clock: 0 Hz
* External hardware: none

![picture](images/configurable-sr.png)

### How it works

Two configurable gates enable a variety of complex flip-flop functions

### How to test

When SEL and INV are low, the 0 inputs directly drive the flip-flops.  A-0 can be connected to the clock for use with the D flip-flop.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | A-0  | MUX-A |
| 1 | A-1  | XOR-A |
| 2 | A-SEL  | SR-Q |
| 3 | A-INV  | D-Q |
| 4 | B-0  | MUX-B |
| 5 | B-1  | XOR-B |
| 6 | B-SEL  | SR-Q# |
| 7 | B-INV  | D-Q# |
