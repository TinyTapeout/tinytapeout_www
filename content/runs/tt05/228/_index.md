---
hidden: true
title: "228 Spike-timing dependent plasticity (Verilog Demo)"
weight: 112
---

## 228 : Spike-timing dependent plasticity (Verilog Demo)

* Author: Binh Nguyen
* Description: Update neuron weight using spike-timing dependent plasticity
* [GitHub repository](https://github.com/howyoubinh/tt05-stdp-demo)
* [GDS submitted](https://github.com/howyoubinh/tt05-stdp-demo/actions/runs/6753237357)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Uses a set of registers to implement a leaky integrate-and-fire (LIF) neuron for spike-timing dependent plasticity learning (STDP) rule.
Two LIF neurons are instantiated and a stdp module handles the logic for the timing and weight update.


### How to test

After reset, a current is applied at different amplitudes and the input to the neuron is integrated at every clock cycle
If a pre-synaptic spike and post-synaptic spike occurs, time difference is measured and applied to the synatic weight update
for this connection.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | drive current  | LIF spike | second counter bit 0 |
| 1 | n/a  | LIF state | second counter bit 1 |
| 2 | n/a  | synaptic weight | second counter bit 2 |
| 3 | n/a  | n/a | second counter bit 3 |
| 4 | n/a  | n/a | second counter bit 4 |
| 5 | n/a  | n/a | second counter bit 5 |
| 6 | n/a  | n/a | second counter bit 6 |
| 7 | n/a  | n/a | second counter bit 7 |
