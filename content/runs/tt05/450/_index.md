---
hidden: true
title: "450 ChatGPT designed Spiking Neural Network"
weight: 119
---

## 450 : ChatGPT designed Spiking Neural Network

* Author: Michael Tomlinson, Joe Lie, ChatGPT-4, Andreas Andreou - mtomlin5@jh.edu
* Description: SPI Programmable spiking neural network with 6 LIF neurons ( 3 input - 3 output ) with fully programmable weights (8-bit)
* [GitHub repository](https://github.com/AndreouLab/tinytapeout_05_chatgpt_snn)
* [GDS submitted](https://github.com/AndreouLab/tinytapeout_05_chatgpt_snn/actions/runs/6750464443)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz
* External hardware: fpga



### How it works

This project implements 6 programmable digital LIF neurons. The neurons are arranged in 2 layers (3 in each). Spikes_in directly maps to the inputs of the first layer neurons. When an input spike is received, it is first multiplied by an 8 bit weight, programmable from the spi interface, 1 per input neuron. This 8 bit value is then added to the membrane potential of the respective neuron.

When the first layer neurons activate, its pulse is routed to each of the 3 neurons in the next layer. There are 9 programmable weights describing the connectivity between the first and second layers. Output spikes from the 2nd layer drive spikes_out.


### How to test

After reset, program the neuron threshold, leak rate, and refractory period. Additionally program the first and 2nd layer weights (all programming is done over spi). Once programmed activate spikes_in to represent input data, track spikes_out synchronously (1 clock cycle pulses).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ui_in[7] - unused  | uo_out[7] - unused | GPIO pins are wired to outputs and driven high (unused by the design). |
| 1 | ui_in[6] - unused  | uo_out[6] - unused | unused |
| 2 | ui_in[5] - spikes_in[2]  | uo_out[5] - unused | unused |
| 3 | ui_in[4] - spikes_in[1]  | uo_out[4] - unused | unused |
| 4 | ui_in[3] - spikes_in[0]  | uo_out[3] - cipo | unused |
| 5 | ui_in[2] - copi  | uo_out[2] - spikes_out[2] | unused |
| 6 | ui_in[1] - cs_n  | uo_out[1] - spikes_out[1] | unused |
| 7 | ui_in[0] - sclk  | uo_out[0] - spikes_out[0] | unused |

### Chip location

{{< shuttle-map "tt05" "450" >}}
