---
hidden: true
title: "65 Delta Modulation Spike Encoding"
weight: 122
---

## 65 : Delta Modulation Spike Encoding

* Author: John Madden
* Description: Delta Modulation for Spiking Neural Networks (SNN) based on snnTorch's implementation.
* [GitHub repository](https://github.com/jmadden173/tt05-delta-modulation)
* [GDS submitted](https://github.com/jmadden173/tt05-delta-modulation/actions/runs/6741523954)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

A spike is generated if the difference between the current and previous data inputs is greater than a specified input threshold. The design is meant to mimic the implementation of delta modulation in the [snnTorch](https://snntorch.readthedocs.io/en/latest/snntorch.spikegen.html#snntorch.spikegen.delta) python package. Each clock cycle is treated as an input/output, therefore there can be consecutive spikes that appear to be constantly high.

The input parameter, `off_spike`, enables spike generation when negative threshold is exceeded. A negative spike is represented by `spike[1] = 0`. A positive spike is represented by `spike[0] = 1`.

All numerical inputs and outputs are unsigned 4-bit integers. You are able to (1) input the `data` value, the input (2) the `threshold` for a spike to be generated, and (3) a value for the previous register for debugging.

The previous data register is included to be facilitate debugging with the ability to read the current value in the register and force the register to a specific value.


### How to test

The module is intended to have a digital input, such as an ADC with a parallel output that is directly fed into the `data` input with a shared `clk` signal. The `threshold` is meant to be tied to a constant value. The module outputs through `spikes` net.

For simpler testing, the input does not need to be matched to the `clk`. With the `threshold` set, `data` can be changed and spikes can be viewed on an oscilloscope.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input threshold bit 0  | spike bit 0 | parameter off_spike |
| 1 | input threshold bit 1  | spike bit 1 | input load_prev bit |
| 2 | input threshold bit 2  | nc, constant output low | nc, constant output low |
| 3 | input threshold bit 3  | nc, constant output low | nc, constant output low |
| 4 | input data bit 0  | reg prev bit 0 | input force_prev bit 0 |
| 5 | input data bit 1  | reg prev bit 1 | input force_prev bit 1 |
| 6 | input data bit 2  | reg prev bit 2 | input force_prev bit 2 |
| 7 | input data bit 3  | reg prev bit 3 | input force_prev bit 3 |

### Chip location

{{< shuttle-map "tt05" "65" >}}
