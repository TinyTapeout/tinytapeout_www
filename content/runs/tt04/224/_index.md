---
hidden: true
title: "224 Simple PWM Generator"
weight: 82
---

## 224 : Simple PWM Generator

* Author: Daniel Barrios
* Description: Generates a PWM signal with a duty cycle that can be varied with inputs pins
* [GitHub repository](https://github.com/DanielBarrios2190/tt04-submission-pwmgen)
* [GDS submitted](https://github.com/DanielBarrios2190/tt04-submission-pwmgen/actions/runs/6058996989)
* HDL project
* [Extra docs]()
* Clock: 5000000 Hz
* External hardware: 



### How it works

The PWM Generator takes a clock and generates a PWM by comparating the selected bus against a counter. Another input is added to determine the maximum resolution for the counter (meaning high resolution requires more bits for counting, which results in an overall lower frequency). By dinamically changing the counter max it is easy to generate the new signal. Also a DFF is added to the output of the comparator in order to synchronize the signal and reduce the possible glitches that can arise by changing values mid-run.


### How to test

To test, just connect the duty bus to the desired value at the output, while also setting the Maximum Bits in the bidirectional pins to the desired quantity (max - 111). After pressing restart the PWM should work as desired.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Duty[0]  | PWM output | Bit selector [0] |
| 1 | Duty[1]  | none | Bit selector [1] |
| 2 | Duty[2]  | none | Bit selector [2] |
| 3 | Duty[3]  | none | none |
| 4 | Duty[4]  | none | none |
| 5 | Duty[5]  | none | none |
| 6 | Duty[6]  | none | none |
| 7 | Duty[7]  | none | none |
