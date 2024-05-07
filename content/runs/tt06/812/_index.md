---
hidden: true
title: "812 Universal gates"
weight: 170
---

## 812 : Universal gates

* Author: htfab
* Description: A modern take on 74-series chips
* [GitHub repository](https://github.com/htfab/unigate-wokwi)
* [GDS submitted](https://github.com/htfab/unigate-wokwi/actions/runs/8758711749)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

### How it works

This project is supposed to eventually become a Wokwi port of [unigate-gf](https://github.com/htfab/unigate-gf).

### How to test

Run the testbench in the test directory.

### External hardware

None


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | a  | i  | u21(a..d)        |
| 1 | b  | j  | u31(a..f)        |
| 2 | c  | k  | u22(a..f).1        |
| 3 | d  | l  | u22(a..f).2        |
| 4 | e  | m  | u41(a..j)        |
| 5 | f  | n  | nand(e, f)        |
| 6 | g  | o  | u21(g..j)        |
| 7 | h  | p  | u31(k..p)        |


### Chip location

{{< shuttle-map "tt06" "812" >}}
