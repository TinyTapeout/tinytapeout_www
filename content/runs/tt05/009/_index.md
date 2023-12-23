---
hidden: true
title: "9 Integrate-and-Fire Neuron."
weight: 132
---

## 9 : Integrate-and-Fire Neuron.

* Author: Kembay  Assel
* Description: Implement an IF neuron in silicon.
* [GitHub repository](https://github.com/mountains-high/tt05-mountains-high-if)
* [GDS submitted](https://github.com/mountains-high/tt05-mountains-high-if/actions/runs/6740782751)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

Apply an input current injection to the IF neuron using switches.
This gets added to a membrane potential.
If the membrane potential exceeds the threshold, then it triggers a spike.


### How to test

An 8-bit input current is applied to the IF neuron through the designated input (i.e., uio_in).
The membrane potential of the IF neuron will respond to the applied input current.
Larger currents will lead to a higher membrane potential.
The neuron is designed to generate a spike when the membrane potential exceeds a certain threshold.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | membrane potential bit a | spike bit 0 |
| 1 | current bit 12  | membrane potential bit b | unspecified |
| 2 | current bit 13  | membrane potential bit c | unspecified |
| 3 | current bit 14  | membrane potential bit d | unspecified |
| 4 | current bit 15  | membrane potential bit e | unspecified |
| 5 | current bit 16  | membrane potential bit f | unspecified |
| 6 | current bit 17  | membrane potential bit g | unspecified |
| 7 | current bit 18  | membrane potential bit h | unspecified |

### Chip location

{{< shuttle-map "tt05" "9" >}}
