---
hidden: true
title: "89 Taillight controller of a 1965 Ford Thunderbird"
weight: 90
---

## 89 : 0b 001 011 001 : Taillight controller of a 1965 Ford Thunderbird

{{< tt-scanchain-switches "001011001" >}}

* Author: Hirosh Dabui
* Description: Asic of a Taillight controller of a 1965 Ford Thunderbird
* [GitHub repository](https://github.com/splinedrive/thunderbird_taillight_1965)
* [Most recent GDS build](https://github.com/splinedrive/thunderbird_taillight_1965/actions/runs/3568083400)
* HDL project
* [Extra docs]()
* Clock: 6250 Hz Hz
* External hardware: 



### How it works

uses a moore statemachine

### How to test

after reset, the statemachine runs into idle mode

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | r3 |
| 1 | reset  | r2 |
| 2 | left  | r1 |
| 3 | right  | l1 |
| 4 | hazard  | l2 |
| 5 | none  | l3 |
| 6 | none  | none |
| 7 | none  | none |
