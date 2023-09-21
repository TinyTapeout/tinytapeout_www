---
hidden: true
title: "109 Melody Generator"
weight: 110
---

## 109 : Melody Generator

* Author: myrtle
* Description: plays a melody, preloaded with jingle bells but re-programmable
* [GitHub repository](https://github.com/gatecat/tt02-melody-gen)
* [Most recent GDS build](https://github.com/gatecat/tt02-melody-gen/actions/runs/3596038280)
* HDL project
* [Extra docs]()
* Clock: 25000 Hz
* External hardware: 



### How it works

melody output at output 0

### How to test

connect a speaker to output 0, set reload and restart to 1

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | melody |
| 1 | reload  | none |
| 2 | restart  | none |
| 3 | prog_data  | none |
| 4 | prog_strobe  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
