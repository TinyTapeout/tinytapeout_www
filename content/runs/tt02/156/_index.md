---
hidden: true
title: "156 7 segment seconds"
weight: 157
---

## 156 : 0b010011100 : 7 segment seconds

* Author: Matt Venn
* Description: counts from 0 to 9, incrementing once per second
* [GitHub repository](https://github.com/TinyTapeout/tt02-test-7seg)
* [Most recent GDS build](https://github.com/TinyTapeout/tt02-test-7seg/actions/runs/3452666592)
* [Wokwi](https://wokwi.com/projects/340805072482992722) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 



### How it works

counter + combinational logic

### How to test

set the clock divider to 1 hz. toggle reset and watch the 7 segment display

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
