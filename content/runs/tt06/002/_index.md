---
hidden: true
title: "2 UCSC HW Systems Collective, TDC"
weight: 42
---

## 2 : UCSC HW Systems Collective, TDC

* Author: Tyler Sheaves, Phillip Marlowe, &amp; Dustin Richmond
* Description: A tiny TDC constructed entirely of standard cells. Skywater130 FA-2 delay element
* [GitHub repository](https://github.com/tsheaves/tt06_hsc_tdc)
* [GDS submitted](https://github.com/tsheaves/tt06_hsc_tdc/actions/runs/8748882952)
* HDL project
* [Extra docs]()
* Clock: 17241379 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

A tiny TDC

### How to test

Setup VCS on you local machine, cd to test run:
`make SIM=vcs GATES=yes`

### External hardware

Just pins


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | lanuch clock  | hw[0]  |         |
| 1 | capture clock  | hw[1]  |         |
| 2 | pg_src  | hw[2]  |         |
| 3 | pg_bypass  | hw[3]  |         |
| 4 | pg_in  | hw[4]  |         |
| 5 | pg_tog  | hw[5]  |         |
| 6 | valid_in  | hw[6]  |         |
| 7 |   | valid_out  |         |


### Chip location

{{< shuttle-map "tt06" "2" >}}
