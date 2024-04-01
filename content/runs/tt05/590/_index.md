---
hidden: true
title: "590 Hodgkin-Huxley Neuron"
weight: 126
---

## 590 : Hodgkin-Huxley Neuron

* Author: Jason Eshraghian
* Description: Implement a Hodgkin-Huxley neuron in silicon.
* [GitHub repository](https://github.com/jeshraghian/tt05-hodgkin-huxley)
* [GDS submitted](https://github.com/jeshraghian/tt05-hodgkin-huxley/actions/runs/6756828351)
* HDL project
* [Extra docs]()
* Clock: 20000000 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

Apply an input current injection to the LIF neuron.
This will modify a neuron membrane potential, and with sufficient current injection, will cause periodic action potentials.


### How to test

After reset, all state variables will be initialized. A minimum of 2 clock cycles of reset is needed.

An 8-bit input current is then applied to uio_in. The current is treated as the LSB of a 16-bit signal by concatenating 8x0's to the front.
The first bit is a sign bit, the following 8-bits are treated as the whole number while the final 7-bits are the fraction.
The current is interpreted in dimensions of uA/cm^2.
This means the maximum value that can be represented is 1.992 uA/cm^2.

The membrane potential of the neuron will respond accordingly. Larger currents will elicit more firing.
Simulations show that the neuron will start firing, reach a steady state where it stops firing in absence of input stimulus, and start firing again if the current exceeds approximately 8'b00001100 = 8'd12.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | membrane potential bit a | membrane potential output bit i |
| 1 | current bit 12  | membrane potential bit b | membrane potential fractional output bit j |
| 2 | current bit 13  | membrane potential bit c | membrane potential fractional output bit k |
| 3 | current bit 14  | membrane potential bit d | membrane potential fractional output bit l |
| 4 | current bit 15  | membrane potential bit e | membrane potential fractional output bit m |
| 5 | current bit 16  | membrane potential bit f | membrane potential fractional output bit n |
| 6 | current bit 17  | membrane potential bit g | membrane potential fractional output bit o |
| 7 | current bit 18  | membrane potential bit h | membrane potential fractional output bit p |

### Chip location

{{< shuttle-map "tt05" "590" >}}
