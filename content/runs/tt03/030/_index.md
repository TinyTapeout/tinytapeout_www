---
hidden: true
title: "30 ezm_cpu"
weight: 31
---

## 30 : ezm_cpu

* Author: guianmonezm#4787
* Description: basic 8bit CPU
* [GitHub repository](https://github.com/guianmonezm/tt03-ezm_cpu)
* [Most recent GDS build](https://github.com/guianmonezm/tt03-ezm_cpu/actions/runs/4356231732)
* HDL project
* [Extra docs](src/README.md)
* Clock: 6000 Hz
* External hardware: FPGA or ram and demultiplexer



### How it works

you connect an external ram and a decoder to it or an FPGA with a rom programed. 


### How to test

connect an external ram and a decoder to it.  


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | pc[0]/c |
| 1 | reset  | pc[1]/c |
| 2 | in1  | pc[2]/c |
| 3 | in2  | pc[3]/c |
| 4 | in3  | pc[4]/c |
| 5 | in4  | pc[5]/c |
| 6 | in5  | pc[6]/c |
| 7 | in6  | pc[7]/c |
