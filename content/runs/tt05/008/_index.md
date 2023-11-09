---
hidden: true
title: "8 Spiking LSTM Network"
weight: 79
---

## 8 : Spiking LSTM Network

* Author: Skye Gunasekaran
* Description: A leaky integrate and fire neuron with adaptive threshold.
* [GitHub repository](https://github.com/SkyeGunasekaran/TinyTapeout-ECE183)
* [GDS submitted](https://github.com/SkyeGunasekaran/TinyTapeout-ECE183/actions/runs/6747408157)
* HDL project
* [Extra docs](None)
* Clock: None Hz
* External hardware: None



### How it works

A Leaky Integrate-and-Fire (LIF) neuron is a simple mathematical model used in
neuroscience and computational neuroscience to describe the behavior of individual neurons.
It provides a simplified yet effective way to simulate the behavior of real neurons. In the
neuron, there are two key elements: the current and the threshold. If the current surpasses
the threshold, a spike is emitted, otherwise, the spike is 0 (resting). In this spiking LSTM
implementation, the neuron's threshold is adaptive, and will increase when the threshold is
passed. When the neuron fails to reach the threshold, it will slowy decay back to the initial
threshold.


### How to test

After applying the reset, the variables should be initialized, and a current can be applied.
The testbench will record the current, threshold, and spiking behavior of the neuron.
When a higher current is applied, you can see how the threshold increases, and vice versa when
a spike is not emitted.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk     Clock input  | uo_out  Spike output | uio_in  Unused |
| 1 | rst_n   Reset signal  | n/a | uio_out Threshold |
| 2 | ui_in   Voltage current  | n/a | uio_oe  Unused |
| 3 | ena     Unused  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
