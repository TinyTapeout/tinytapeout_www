---
hidden: true
title: "175 Leaky Integrate-and-Fire Neuron"
weight: 23
---

## 175 : Leaky Integrate-and-Fire Neuron

* Author: Muhammad Hadir Khan
* Description: A Leaky Integrate-and-Fire Neuron that mimics the biological neuron and is configurable from the outside world
* [GitHub repository](https://github.com/hadirkhan10/tt05-leaky-neuron)
* [GDS submitted](https://github.com/hadirkhan10/tt05-leaky-neuron/actions/runs/6724145146)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

The state machine first configures the different parameters of the neuron which is then provided a synaptic current to read out the membrane potential and spiking of the neuron.

The configurable parameters of the neuron are: 1) beta (which controls the decay of the membrane potential) 2) threshold (which is used in comparison with the membrane potential to generate a spike)

Initially, the neuron is in an IDLE state where everything remains 0. Upon configuring the setting bits with `uio_in[7:1]` the state goes to BETA where the `beta` value of the neuron is configured using the `ui_in[7:0]` bits. After which the setting bits is again configured to make the state go
to THRESH state which configures the threshold value of the neuron. Finally, the setting bits are used to go to the READ state and the current injection is provided with `ui_in` where the neuron starts to integrate the current onto the membrane potential.

At each timestep, the membrane potential is analyzed with `uo_out[7:0]` and the spike is outputted through `uio_out[0]`.


### How to test

After reset, the neuron is in the idle state and remains there unless the setting bits are configured. Setting the `uio_in[7:1]` bits to 1 changes the state to BETA. After configuring the beta value changing the setting bits to 2 takes to the THRESH state where the threshold of
the neuron is configured. Then changing the setting bits to 3 takes to the READ state where the current is integrated and the membrane potential changes as well as the spike is outputted if the membrane potential becomes equal or greater than the configured threshold.

Experiment by changing the beta, threshold and input current values to see how the neuron reacts.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | configure beta, threshold and current  | membrane potential | spike output |
| 1 | configure beta, threshold and current  | membrane potential | configure the state |
| 2 | configure beta, threshold and current  | membrane potential | configure the state |
| 3 | configure beta, threshold and current  | membrane potential | configure the state |
| 4 | configure beta, threshold and current  | membrane potential | configure the state |
| 5 | configure beta, threshold and current  | membrane potential | configure the state |
| 6 | configure beta, threshold and current  | membrane potential | configure the state |
| 7 | configure beta, threshold and current  | membrane potential | configure the state |
