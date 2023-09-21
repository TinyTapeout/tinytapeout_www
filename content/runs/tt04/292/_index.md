---
hidden: true
title: "292 uDATAPATH_Collatz"
weight: 88
---

## 292 : uDATAPATH_Collatz

* Author: CMUA F.Segura-Quijano, J.S.Moya
* Description: uDATAPATH_Collatz
* [GitHub repository](https://github.com/darkfsegura/tt04-verilog-cmua-uDATAPATH_Collatz)
* [GDS submitted](https://github.com/darkfsegura/tt04-verilog-cmua-uDATAPATH_Collatz/actions/runs/6117117608)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Our uDATAPATH_Collatz is a component that computes the Collatz Array Sequence for a given input number. The input and output are 8-bit vectors (data bus). The component is synchronous and has a reset signal to read the input data and perform the series calculation. The component implementation is based on a 4-register Datapath and ALU such that the implementation emulates basic assembler instructions programmed in a simple state machine.


### How to test

To test the component, you must put a data on the input bus BB_SYSTEM_data_InBUS[7:0], activate the Reset signal. In the output bus BB_SYSTEM_data_OutBUS[7:0] you can see the calculated string. * The series will be calculated close to the clock rate. Visually you will not be able to see the intermediate data unless you use a probe reading per digital channel from an oscilloscope.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk  | BB_SYSTEM_data_OutBUS[0] | none |
| 1 | rst_n  | BB_SYSTEM_data_OutBUS[1] | none |
| 2 | BB_SYSTEM_data_InBUS[0]  | BB_SYSTEM_data_OutBUS[2] | none |
| 3 | BB_SYSTEM_data_InBUS[1]  | BB_SYSTEM_data_OutBUS[3] | none |
| 4 | BB_SYSTEM_data_InBUS[2]  | BB_SYSTEM_data_OutBUS[4] | none |
| 5 | BB_SYSTEM_data_InBUS[3]  | BB_SYSTEM_data_OutBUS[5] | none |
| 6 | BB_SYSTEM_data_InBUS[4]  | BB_SYSTEM_data_OutBUS[6] | none |
| 7 | BB_SYSTEM_data_InBUS[5]  | BB_SYSTEM_data_OutBUS[7] | none |
