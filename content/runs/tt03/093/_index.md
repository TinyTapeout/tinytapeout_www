---
hidden: true
title: "93 HD74480 Clock"
weight: 94
---

## 93 : HD74480 Clock

* Author: Tom Keddie
* Description: Displays a clock on a attached HD74480
* [GitHub repository](https://github.com/TomKeddie/tinytapeout-2022-2)
* [Most recent GDS build](https://github.com/TomKeddie/tinytapeout-2022-2/actions/runs/3529333424)
* HDL project
* [Extra docs](https://github.com/TomKeddie/tinytapeout-2022-2/blob/main/doc/README.md)
* Clock: 1000 Hz
* External hardware: HD74480

![picture](images/wiring.png)

### How it works

See https://github.com/TomKeddie/tinytapeout-2022-2/blob/main/doc/README.md

### How to test

See https://github.com/TomKeddie/tinytapeout-2022-2/blob/main/doc/README.md

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | lcd D4 |
| 1 | reset  | lcd D5 |
| 2 | none  | lcd D6 |
| 3 | none  | lcd D7 |
| 4 | none  | lcd EN |
| 5 | none  | lcd RS |
| 6 | hour set  | none |
| 7 | minute set  | none |
