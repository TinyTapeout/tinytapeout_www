---
hidden: true
title: "35 Simple clock"
weight: 36
---

## 35 : 0b 000 100 011 : Simple clock

{{< tt-scanchain-switches "000100011" >}}

* Author: Søren Poulsen
* Description: Shows time of day.
* [GitHub repository](https://github.com/nikor/tt03-verilog-demo)
* [Most recent GDS build](https://github.com/nikor/tt03-verilog-demo/actions/runs/4779005645)
* HDL project
* [Extra docs]()
* Clock: 32 Hz
* External hardware: 



### How it works

Takes a clock as input and output data to shift registers connected to four 7 segments.


### How to test

After reset, the 7 segments should show the clock.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | srclk |
| 1 | reset  | rclk |
| 2 | minutes  | ser |
| 3 | hours  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
