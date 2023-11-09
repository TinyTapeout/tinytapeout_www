---
hidden: true
title: "518 Field Programmable Neural Array"
weight: 165
---

## 518 : Field Programmable Neural Array

* Author: Reto Stamm
* Description: A collection of 50 interconnected simulated leaky neurons that can be programmed to do cognitive tasks.
* [GitHub repository](https://github.com/retospect/tt05-fpna-rs)
* [GDS submitted](https://github.com/retospect/tt05-fpna-rs/actions/runs/6756569598)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

Neuromorphic neural nets are more power efficient than traditional machine learning.
It replicates an array of leaky neurons, a simple structure that exists in the brain.
This design defines a Field Programmable Neural Array (FPNA). (1)

A mental model for a leaky neuron is a capacitor that drains at some rate.
It gets charged up by some amount (its weight) whenever an input (a dendrite) receives a pulse from somewhere else.
It sends a pulse (fire) its output (axon) when it reaches a specified level.

This circuit contains an array of 5*10 interconnected, heavily simplified configurable neuron blocks (CNBs).
Instead of continuous weights, we have three bits per weight.
Instead of a continuous decay of the charge in the capacitor, it halves at a somewhat configurable interval.
Each CNB has its own set of weights, and a somewhat configurable rate of decay.
In this design, each CNB had 4 inputs (dendrites), each with its own weight, one output (axon), and a choice of 8 different time decays.

An array of neuromorphic CNBs (Configurable Neuron Blocks). Each CNB has a
4 inputs, and each input has an associated weight that gets added to the CNBs membrane potential whenever the relevant input fires.
When a CNB reaches a treshhold (rolls over, in this case), it fires and sends a pulse to 3 of its neighbours.
Each CNB is subscribed to one of 8 decay clock tools.

The configuration data (Bitstream, or BS), including all the weights, the desired timing divisions, and the weights for each CNB are shifted in through the bs_in pin when the config_en pin is high.
The BS can be read back from the bs_out pin.

The naxon tool is an example that shows how to train a neural network, generate all the relevant data and the BS that is needed to configure that model into this design
<https://github.com/retospect/naxon>.
More up-to-date design documents may also be found there.

**References**
(1) [Eshraghian, Jason K., Max Ward, Emre Neftci, Xinxin Wang, Gregor Lenz, Girish Dwivedi, Mohammed Bennamoun, Doo Seok Jeong, and Wei D. Lu. 2023. “Training Spiking Neural Networks Using Lessons From Deep Learning.”](http://arxiv.org/abs/2109.12894)


### How to test

After reset, clock in the bitstream to configure all the weights and stuff.
Then clock in the test data from the generated test bench from naxon, and see the appropriate answer come out!


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | dendritic input 0  | output axon 0 | reset_nn reset neural network (active high) |
| 1 | dendritic input 1  | output axon 1 | bs_in bitstream readout |
| 2 | dendritic input 2  | output axon 2 | bs_out bitstream input |
| 3 | dendritic input 3  | output axon 3 | config_en - shift bitstream |
| 4 | dendritic input 4  | output axon 4 | output axon 8 |
| 5 | dendritic input 5  | output axon 5 | output axon 9 |
| 6 | dendritic input 6  | output axon 6 | dendritic input 9 |
| 7 | dendritic input 7  | output axon 7 | dendritic input 8 |
