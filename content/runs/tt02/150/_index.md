---
hidden: true
title: "150 Async FIFO"
weight: 151
---

## 150 : 0b 010 010 110 : Async FIFO

* Author: Jon Recta
* Description: A very small asynchonous FIFO
* [GitHub repository](https://github.com/cmu-stuco-98154/f22-tt02-jrecta)
* [Most recent GDS build](https://github.com/cmu-stuco-98154/f22-tt02-jrecta/actions/runs/3600169235)
* HDL project
* [Extra docs](https://github.com/jonpaolo02/tt02-async-fifo/blob/main/README.md)
* Clock: 5000 Hz
* External hardware: None



### How it works

After reset, run write_clock and assert write_enable with some data on wdata, then while run_clock is running, assert read_enable. If write_enable is asserted while full is high, the data will be rejected. If read_enable is asserted while empty is high, read_data is invalid.

### How to test

After resetting, test above behavior with different ratios of write_clock and read_cloc.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | write_clock  | none |
| 1 | read_clock  | none |
| 2 | reset  | none |
| 3 | write_enable  | fifo_full |
| 4 | read_enable  | fifo_empty |
| 5 | wdata[0]  | rdata[0] |
| 6 | wdata[1]  | rdata[1] |
| 7 | wdata[2]  | rdata[2] |
