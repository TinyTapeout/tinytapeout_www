---
hidden: true
title: "97 ALU"
weight: 98
---

## 97 : 0b 001 100 001 : ALU

{{< tt-scanchain-switches "001100001" >}}

* Author: Ryan Cornateanu
* Description: 2bit ALU with a ripple carry adder that has the capability to perform 16 different calculations
* [GitHub repository](https://github.com/ryancor/tt02-submission-template)
* [Most recent GDS build](https://github.com/ryancor/tt02-submission-template/actions/runs/3537017872)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

When 4 bits total are input'd into the ALU, it goes through 3 ripple carries and two finite state machines that adds to a temporary value that gets included in the basic ALU calculations

### How to test

TODO

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | A1  | ALU_Out1 |
| 1 | A2  | ALU_Out2 |
| 2 | B1  | ALU_Out3 |
| 3 | B2  | ALU_Out4 |
| 4 | ALU_Sel1  | ALU_Out5 |
| 5 | ALU_Sel2  | ALU_Out6 |
| 6 | ALU_Sel3  | ALU_Out7 |
| 7 | ALU_Sel4  | CarryOut |
