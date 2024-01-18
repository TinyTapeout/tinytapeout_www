---
hidden: true
title: "125 4-bit badge ALU"
weight: 126
---

## 125 : 0b 001 111 101 : 4-bit badge ALU

{{< tt-scanchain-switches "001111101" >}}

* Author: Rolf Widenfelt
* Description: A 4-bit ALU inspired by Supercon.6 badge
* [GitHub repository](https://github.com/rolfmobile99/tt02-submission-template)
* [Most recent GDS build](https://github.com/rolfmobile99/tt02-submission-template/actions/runs/3538052048)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

finite state machine with combinational logic (in verilog)

### How to test

cocotb

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | none |
| 1 | rst  | none |
| 2 | ctl  | none |
| 3 | none  | cout |
| 4 | datain3  | alu3 |
| 5 | datain2  | alu2 |
| 6 | datain1  | alu1 |
| 7 | datain0  | alu0 |
