---
hidden: true
title: "224 Leaky-Integrated Fire Neuron"
weight: 84
---

## 224 : Leaky-Integrated Fire Neuron

* Author: Ruhai Lin
* Description: Adaptive LIF Neuron
* [GitHub repository](https://github.com/ruhai-lin/tt05-lif-demo)
* [GDS submitted](https://github.com/ruhai-lin/tt05-lif-demo/actions/runs/6753170503)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

When a LIF (Leaky - Integrate and Fire) neuron integrates enough current stimulation,
it will be activated and Fire once spike. This current is introduced by the 8-bit chip input pin, but while integrating,
the LIF neuron gradually loses the previously accumulated current like an hourglass,
so it is called Leaky. this module implements this biological behavior with a mathematical equation.
The state of the neuron can be monitored externally through the 8-bit chip output pins.

The LIF neuron module also includes adaptive threshold and adaptive decay rate to
dynamically adjust its own fire threshold or decay rate. The adaptive threshold can be enabled by
setting bit 0 of the bidirectional IO, and the adaptive decay rate can be enabled by setting bit 1 of the bidirectional IO.
simulations show that this allows the LIF neuron to enhance the sparsity of spikes while preserving the input features,
which improves the efficiency of the chip.


### How to test

LIF neurons will receive current inputs in three different gears (strong, medium, and weak).
The spike rate should be higher when the current is stronger and lower when the current is weaker.
After turning on adaptive threshold and adaptive decay rate the chip needs to retain this feature
while trying to enhance sparsity to avoid neurons that fire frequently or not at all,
to make it consistent with realistic biological characteristics.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | membrane a | adaptive_threshold_enable bit 0 |
| 1 | current bit 12  | membrane b | adaptive_beta_enable bit 1 |
| 2 | current bit 13  | membrane c | second counter bit 2 |
| 3 | current bit 14  | membrane d | second counter bit 3 |
| 4 | current bit 15  | membrane e | second counter bit 4 |
| 5 | current bit 16  | membrane f | second counter bit 5 |
| 6 | current bit 17  | membrane g | second counter bit 6 |
| 7 | current bit 18  | membrane h | spike bit 7 |

### Chip location

{{< shuttle-map "tt05" "224" >}}
