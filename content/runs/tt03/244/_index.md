---
hidden: true
title: "244 Balanced Ternary Calculator"
weight: 245
---

## 244 : 0b 011 110 100 : Balanced Ternary Calculator

{{< tt-scanchain-switches "011110100" >}}

* Author: Steven Bos
* Description: A balanced ternary calculator allowing multiplication, addition and subtraction with negative numbers in binary encoded ternary
* [GitHub repository](https://github.com/aiunderstand/tt03-balanced-ternary-calculator)
* [Most recent GDS build](https://github.com/aiunderstand/tt03-balanced-ternary-calculator/actions/runs/4789366364)
* HDL project
* [Extra docs](steveb#6973)
* Clock: 0 Hz
* External hardware: none



### How it works

2DO


### How to test

2DO


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | x1H  | s3H |
| 1 | x1L  | s3L |
| 2 | x0H  | s2H |
| 3 | x0L  | s2L |
| 4 | Y1H  | s1H |
| 5 | y1L  | s1L |
| 6 | y0H  | s0H |
| 7 | y0L (reused as function selector, eg add/subtract or multiply)  | s0L |
