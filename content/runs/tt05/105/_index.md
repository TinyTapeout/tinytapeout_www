---
hidden: true
title: "105 ECE 183 - Integrate and Fire Network Chip Design"
weight: 173
---

## 105 : ECE 183 - Integrate and Fire Network Chip Design

* Author: Manju Shettar
* Description: Count up to 10, one second at a time.
* [GitHub repository](https://github.com/manjushettar/tt-183)
* [GDS submitted](https://github.com/manjushettar/tt-183/actions/runs/6752057196)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

This project emulates a two-layer neural network using a series of integrate and fire neurons defined in Verilog. The neurons accumulate incoming spikes and when their cummulative signal surpasses a defined threshold, they generate a spike and reset their potential.

The network is composed of two neuron layers. The first input layer accepts two 16-bit inputs, corresponding to external stimuli or current, which the neurons of the first layer will processes. Based on the internal states of these neurons, they may or may not fire to generate spikes.

The spikes that are generated from the first layer are used as input to the second layer. In this model, a spike is defined asw a binary high signal, translated into a 16-bit value to mimic the input current standard. If there is no spike, there is no input current (zero).

The second layer defines the neural network's output. Each neuron in the second layer may generate a spike, which is represented again with a bit.


### How to test

Testing involves applying different input stimuli (current) and observing spiking states.

By changing the values of 'input1' and 'input2', and observing the output layers, we can observe different spiking outputs from the neural network.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | {'input1[15:0]': "16-bit stimulus input to the first layer's first neuron."}  | {'output_layer2[1]': 'Spiking status of the first neuron in the second layer'} | {'uio_in': 'Reserved for future use.'} |
| 1 | {'input2[15:0]': "16-bit stimulus input to the first layer's second neuron."}  | {'output_layer2[0]': 'Spiking status of the second neuron in the second layer'} | n/a |
| 2 | {'clk': 'Clock signal.'}  | n/a | n/a |
| 3 | {'rst_n': "Reset signal; when low, it resets the neurons' current and output spikes."}  | n/a | n/a |
| 4 | n/a  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |

### Chip location

{{< shuttle-map "tt05" "105" >}}
