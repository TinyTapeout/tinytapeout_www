---
hidden: true
title: "11 Simple Leaky Integrate and Fire (LIF) Neuron"
weight: 39
---

## 11 : Simple Leaky Integrate and Fire (LIF) Neuron

* Author: Phillip Marlowe
* Description: Given input current, spike when threshold is reached (also assume any files with the letters LFI should be LIF)
* [GitHub repository](https://github.com/phillipmmarlowe/tt05-verilog-HLS-LFI)
* [GDS submitted](https://github.com/phillipmmarlowe/tt05-verilog-HLS-LFI/actions/runs/6751554350)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Based on input current, calculation is made using it and previous membrane potential.
If current membrane potential is above pre-set threshold then spike!


### How to test

After reset, input some current and see what happens. Should see an increase on output and possibly a spike eventually.

A current input of 100 after 20 cycles should produce a spike.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk_i is the clock  | nu_o is the next membrane potential | msb bit of uio_oe is connected to spike_o |
| 1 | current_i is the current input to the LFI neuron  | spike_o is the single bit to show when the neuron is firing | n/a |
| 2 | rst_n is for reset  | n/a | n/a |
| 3 | n/a  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |

### Chip location

{{< shuttle-map "tt05" "11" >}}
