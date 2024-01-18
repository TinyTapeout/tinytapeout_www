---
hidden: true
title: "229 4x4 RAM"
weight: 230
---

## 229 : 0b 011 100 101 : 4x4 RAM

{{< tt-scanchain-switches "011100101" >}}

* Author: Michael Bartholic
* Description: 4 word, 4 bit read/write RAM
* [GitHub repository](https://github.com/theFestest/tt02-4x4-ram)
* [Most recent GDS build](https://github.com/theFestest/tt02-4x4-ram/actions/runs/3603498286)
* [Wokwi](https://wokwi.com/projects/341557831870186068) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: None.



### How it works

Set write enable to write to the given address. Read given address on output.

### How to test

Set a word on data lines, set address on addr lines. Cycle write enable. Try reading value on rdata.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | rdata[0] |
| 1 | data[0]  | rdata[1] |
| 2 | data[1]  | rdata[2] |
| 3 | data[2]  | rdata[3] |
| 4 | data[3]  | addr[0] |
| 5 | addr[0]  | addr[1] |
| 6 | addr[1]  | clock |
| 7 | write_enable  | write_enable |
