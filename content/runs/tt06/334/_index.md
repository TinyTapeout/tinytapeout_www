---
hidden: true
title: "334 Izhikevich Neuron"
weight: 105
---

## 334 : Izhikevich Neuron

* Author: ExAI Dmitri Lyalikov
* Description: ASIC Digital Implementation of Izhikevich Neuron Model with configurable A, B Parameters
* [GitHub repository](https://github.com/existential-ai/izhekevich_neuron)
* [GDS submitted](https://github.com/existential-ai/izhekevich_neuron/actions/runs/8747719978)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a simple Izhikevich model of a neuron. The Izhikevich model is a spiking neuron that is able to replicate the behavior of many different types of neurons. The model is described by the following equations:
v' = 0.04v^2 + 5v + 140 - u + I
u' = a(bv - u)
if v >= 30 then v = c, u = u + d

The model has four parameters: a, b, c, and d. These parameters can be adjusted to replicate the behavior of different types of neurons. The model also has an input current I that can be used to stimulate the neuron. The model is implemented in the `izhikevich_neuron` module.

The `izhikevich_neuron` module has the following ports:

- `clk`: The clock signal
- `reset`: The reset signal
- `uo_out`: The output voltage of the neuron
- `ui_in`: Configuration input for the neuron
- `uio_in`: Configuration input for the neuron

The followiing parameters and IO are exposed through these module pins:
| Name                 | Bits | Direction | Pins            | Description                 |
| ---------------------|------| ----------| ----------------|-----------------------------|
| `Input Current`      | 5    | Input     | ui[0-4]         | Input current (mA)          |
| `Neuron Mode`        | 3    | Input     | uio[0-2]        | See Table Below             |
| `A Param`            | 4    | Input     | ui[5-7], uio[3] | 4-bit custom A-parameter    |
| `B Param`            | 4    | Input     | uio[4:7]        | 4-bit custom B-parameter    |
| `Membrane Potential` | 8    | Output    | uo[0:7]         | Signed 8-bit voltage (mV)   |

| Neuron Mode | Behavior                    | A   | B    | C   | D   |
| ----------- | --------------------------- | --- | ---- | --- | --- |
| 0           | RS (Regular Spiking)        | .02 | .02  | -65 | 8   |
| 1           | IB (Intrinsically Bursting) | .02 | .02  | -55 | 4   |
| 2           | CH (Chattering)             | .02 | .02  | -50 | 2   |
| 3           | FS (Fast Spiking)           | 0.1 | 0.2  | -65 | 2   |
| 4           | TC (Thalamo-Cortical)       | .02 | 0.25 | -65 | .05 |
| 5           | RZ (Resonator)              | 0.1 | 0.25 | -65 | 2   |
| 6           | LTS (Low Threshold Spiking) | .02 | 0.25 | -65 | 2   |
| 7           | Custom                      | A   | B    | MRU | MRU |

MRU: Most Recently Used Value. For example in custom mode, if the user was previously in RS mode, the C and D values will be set to -65 and 8 respectively, but A-B will be set to the custom values.

Default state: RS mode

### How to test

The cocotb test bench provides a sweep across all neuron modes and a sweep across all A and B parameters. The test bench also provides a sweep across all input currents. The test bench checks that the output voltage of the neuron is within the expected range for each configuration. This can be used to plot the output voltage of the neuron for different configurations.

### External hardware

This module requires a driver to interface with the neuron. The driver should be able to set the input current and the neuron mode, and read the output voltage. The driver should also be able to reset the neuron and provide a clock signal.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Input Current [0]  | Membrane Potential [0]  | Neuron Select [0]        |
| 1 | Input Current [1]  | Membrane Potential [1]  | Neuron Select [1]        |
| 2 | Input Current [2]  | Membrane Potential [2]  | Neuron Select [2]        |
| 3 | Input Current [3]  | Membrane Potential [3]  | A Parameter [3]        |
| 4 | Input Current [4]  | Membrane Potential [4]  | B Parameter [0]        |
| 5 | A Parameter [0]  | Membrane Potential [5]  | B Parameter [1]        |
| 6 | A Parameter [1]  | Membrane Potential [6]  | B Parameter [3]        |
| 7 | A Parameter [2]  | Membrane Potential [7]  | B Parameter [4]        |


### Chip location

{{< shuttle-map "tt06" "334" >}}
