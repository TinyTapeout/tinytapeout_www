---
hidden: true
title: "9 Integrate-and-Fire Neuron. (Verilog Demo)"
weight: 12
---

## 9 : Integrate-and-Fire Neuron. (Verilog Demo)

* Author: Kembay  Assel
* Description: Implement a IF neuron in silicon.
* [GitHub repository](https://github.com/mountains-high/tt05-mountains-high-if)
* [GDS submitted](https://github.com/mountains-high/tt05-mountains-high-if/actions/runs/6740782751)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Apply an input current injection to the IF neuron using switches.

The IF neuron model fires a spike as soon as the input voltage crosses
the specified threshold without considering any leakage or time-dependent state.

#This gets added to a membrane potential
If the membrane potential exceeds the threshold then trigger a spike.


### How to test

After reset, the membrane potential set to 0.

Then change the inputs to change the current. A higher current should trigger a higher firing rate.


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
