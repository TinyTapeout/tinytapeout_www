---
hidden: true
title: "72 UCSC HW Systems Collective, TDC - MUX2x1"
weight: 119
---

## 72 : UCSC HW Systems Collective, TDC - MUX2x1

* Author: Phillip Marlowe, Tyler Sheaves, &amp; Dustin Richmond
* Description: A tiny TDC constructed entirely of standard cells. Skywater130 MUX2x1 delay element
* [GitHub repository](https://github.com/phillipmmarlowe/tt06_hsc_tdc_mux_delay)
* [GDS submitted](https://github.com/phillipmmarlowe/tt06_hsc_tdc_mux_delay/actions/runs/8758062271)
* HDL project
* [Extra docs]()
* Clock: 40000000 Hz

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

{{< shuttle-map "tt06" "72" >}}
