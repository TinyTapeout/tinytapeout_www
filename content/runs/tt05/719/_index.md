---
hidden: true
title: "719 metastability experiment"
weight: 108
---

## 719 : metastability experiment

* Author: yubex
* Description: The design purpose is to evaluate, if metastability can be used as a true random number generator source in an ASIC design.
* [GitHub repository](https://github.com/yubex/tt04-metastability-experiment)
* [GDS submitted](https://github.com/yubex/tt04-metastability-experiment/actions/runs/6658825833)
* HDL project
* [Extra docs]()
* Clock: try various Hz
* External hardware: none

![picture](images/picture.png)

### How it works

Generally a Flip Flop can enter a metastable state if the setup or hold time is violated. In this design I try to reach this usually unwanted behaviour.  
A toggle Flip Flop is used to create edges on the data inputs of the other 2 Flip Flops. There are 2 modes: Manual and Auto. Manual mode uses the switch on the PCB as trigger for one edge.
Auto mode generates a cyclic trigger within the ASIC. The data output of the toggle Flip Flop is connected to the next Flip Flop by a programmable delay line.
The delay line is created by pairs of inverters. The verilog keep attribute is necessary here, to avoid optimization during synthesis.
The delay_ctrl input selects the number of inverters which are used as delay. The number of inverters used is the delay_ctrl input value times 2. If you set delay_ctrl to 1, 2 inverters are used.
The maximum number of inverters is 128. After each state change of the toggle Flip Flop (exactly 3 clock cycles after that) the output of all Flip Flops are compared.
In case the states are different, metastability has occured.


### How to test

For testing select the mode you want to try out. Set the mode to 0 for auto mode and to 1 for manual mode.
You can experiment with delay_ctrl input an try to produce metastability. Also try different clock frequency's.
In case of metastability the dot of the 7 segment display should change its state.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | trigger  | segment a, mode | none |
| 1 | mode  | segment b, toggle_dff_en | none |
| 2 | delay_ctrl[0]  | segment c, toggle_dff | none |
| 3 | delay_ctrl[1]  | segment d, delayed_toggle_dff | none |
| 4 | delay_ctrl[2]  | segment e, meta_dff_0 | none |
| 5 | delay_ctrl[3]  | segment f, meta_dff_1 | none |
| 6 | delay_ctrl[4]  | segment g, toggle_dff_en_3t | none |
| 7 | delay_ctrl[5]  | dot, meta_err_detected | none |
