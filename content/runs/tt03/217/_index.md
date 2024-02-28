---
hidden: true
title: "217 serv - Serial RISCV CPU"
weight: 218
---

## 217 : 0b 011 011 001 : serv - Serial RISCV CPU

{{< tt-scanchain-switches "011011001" >}}

* Author: Greg Davill
* Description: An award winning RISCV CPU!
* [GitHub repository](https://github.com/gregdavill/tt02-serv)
* HDL project
* [Extra docs](https://github.com/olofk/serv/tree/main)
* Clock: 0 Hz
* External hardware: tbd

Image path is broken

### How it works

This project contains a 96bit serial scanchain, and the core of the serv CPU. Signals present on the scanchain are a wishobne bus and the native registerfile interface. As there is not enough room inside the TinyTapeout project area to fit RAM/registerfiles these have to be implemented externally. In theory just a bit of custom code running on caravel will be enough to get the serv core running.

### How to test

tbd

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
