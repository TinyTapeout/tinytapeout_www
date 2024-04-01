---
hidden: true
title: "171 Cheap and quick STDP"
weight: 19
---

## 171 : Cheap and quick STDP

* Author: J. Przepioski
* Description: Due to schedule: Implement most basic functional STDP
* [GitHub repository](https://github.com/jkprz/tt05-verilog-demo)
* [GDS submitted](https://github.com/jkprz/tt05-verilog-demo/actions/runs/6753581320)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Apply an input current injection to the LIF neuron using switches.

This gets added to a membrane potential which is decayed over time.
If the membrane potential exceeds the threshold then trigger a spike.


### How to test

After reset, the membrane potential will be set to 0.

Then change the inputs to change the current. A higher current should
trigger a higher firing rate.


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

{{< shuttle-map "tt05" "171" >}}
