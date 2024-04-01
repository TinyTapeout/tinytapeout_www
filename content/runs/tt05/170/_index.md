---
hidden: true
title: "170 Perceptron Hardcoded"
weight: 154
---

## 170 : Perceptron Hardcoded

* Author: Sathyaprakash Narayanan
* Description: Hardcoded Perceptron
* [GitHub repository](https://github.com/satabios/ttf-perceptron)
* [GDS submitted](https://github.com/satabios/ttf-perceptron/actions/runs/6752612099)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Uses a set of registers to divide the clock, and then some combinational logic
to convert from binary to decimal for the display.

Puts the bottom 8 bits of the counter on the bidirectional outputs.

With all the inputs set to 0, the internal 24 bit compare is set to 10,000,000. This means the
counter will increment by one each second.

If any inputs are non zero, then the input will be used as an bits 11 to 18 of the 24 bit compare register.
Example: setting the inputs to 00010000 will program 16384 into the compare register.
With a 10MHz clock the counter will increment ~610 times per second.


### How to test

After reset, the counter should increase by one every second with a 10MHz input clock.
Experiment by changing the inputs to change the counting speed.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | unspecified  | perceptron_output a | unspecified |
| 1 | unspecified  | perceptron_output b | unspecified |
| 2 | unspecified  | perceptron_output c | unspecified |
| 3 | unspecified  | perceptron_output d | unspecified |
| 4 | unspecified  | perceptron_output e | unspecified |
| 5 | unspecified  | perceptron_output f | unspecified |
| 6 | unspecified  | perceptron_output g | unspecified |
| 7 | unspecified  | perceptron_output h | unspecified |

### Chip location

{{< shuttle-map "tt05" "170" >}}
