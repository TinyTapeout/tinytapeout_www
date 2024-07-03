---
hidden: true
title: "334 Neural Network dinamic"
weight: 96
---

## 334 : Neural Network dinamic

* Author: Kevin Gajardo, David Tapia
* Description: One line description
* [GitHub repository](https://github.com/Kevomlml/tt07_chipusm_neural_network)
* [GDS submitted](https://github.com/Kevomlml/tt07_chipusm_neural_network/actions/runs/9278106145)
* HDL project
* [Extra docs]()
* Clock: 66000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The project consists of a neural network of 4  (parameterizable and reusable) neurons, thanks to control signals.

From an 8-bit input, the inputs will be introduced into a reusable neural network of 4 neurons.
Through a shift register, 4 different inputs are captured. Furthermore, thanks to a state machine, the parameters associated with each neuron are obtained: 4 weights and 1 bias, in total 20 parameters per network layer.

State changes are made using a binary signal, where the input data and neuron parameters are received and then the neurons are fed back their outputs to the next layer.
To observe the network's output one need to bring the state machine to the first state using the pin "Finished", then, in the next 4 clock cycles the outputs of the neurons 3 to 0 will be shown on the output at the same time some new external inputs can be introduced to a new neural network without the need for a reset

| State  | Description|
| ------------- | ------------- |
| State_IN  | The inputs of the neurons are found entering and the outputs are shown.  |
| State_BUFF  | Neuron inputs are maintained while network parameters are entered  |
| State_OUT  | Feedback of neurons with their previous result  |

Below is the structure for inputting the neurons entries:

![ChipUSM1 (1)](https://github.com/Kevomlml/tt07_chipusm_neural_network/assets/158077239/308f0b48-d2a9-49f5-822f-4b13980fadf6)

Node A corresponds to the output of the state machine, and node B to the parameters for each neuron.

Regarding the parameters, they are fed in sequence, from neuron 3 to neuron 0. And the weights correspond to powers of 2, so, if w00=3, the input0 to the neuron0 will be multiplied by 2³.

![ChipUSM2](https://github.com/Kevomlml/tt07_chipusm_neural_network/assets/158077239/abb3bc67-820e-453c-9c4b-f3741869816d)

### How to test

The input signals must be coordinated to achieve correct testing, where the following order must be followed to enter the inputs and parameters considering multiple layers.

in_3 > in_2 > in_1 > in_0 > b3 > w33 > w32 > w31 > w30 > b2 > w23 > w22 > w21 > w20 > b1 > w13 > w12 > w11 > w10 > b0 > w03 > w02 > w01 > w00

Each entry must be maintained for 2 clk, to be captured on the rising edge and thus there is displacement with the shift registers.

### External hardware

An FPGA is recomended in to perform the tests and feed the weights correctly.
Also, the weights must be trained first in some other system, e.g. in a pc using Python or Matlab.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | data_in[0]  | data_out[0]  | selector[0]        |
| 1 | data_in[1]  | data_out[1]  | selector[1]        |
| 2 | data_in[2]  | data_out[2]  | selector_out[0]        |
| 3 | data_in[3]  | data_out[3]  | selector_out[1]        |
| 4 | data_in[4]  | data_out[4]  |         |
| 5 | data_in[5]  | data_out[5]  |         |
| 6 | data_in[6]  | data_out[6]  |         |
| 7 | data_in[7]  | data_out[7]  |         |


### Chip location

{{< shuttle-map "tt07" "334" >}}
