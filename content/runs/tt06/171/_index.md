---
hidden: true
title: "171 Frequency to digital converters (asynchronous and synchronous)"
weight: 51
---

## 171 : Frequency to digital converters (asynchronous and synchronous)

* Author: Eduardo Holguin
* Description: This chip combines asynchronous and synchronous frequency-to-digital converters, offering two options in a single package.
* [GitHub repository](https://github.com/EduHolg/FDC_chip)
* [GDS submitted](https://github.com/EduHolg/FDC_chip/actions/runs/8670266733)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The system incorporates two Frequency-to-Digital Converters (FDCs), one synchronous and one asynchronous. A selector controls a multiplexer, which chooses between these two FDCs. Both frequency signals are sent to the inputs of the chip. Depending on the selected mode, either the asynchronous or synchronous FDC processes the input signal. The chosen FDC then converts the frequency signal into a digital value, representing the frequency, which can be further processed or transmitted as needed.

### How to test

To test this chip, connect the inputs as follows: ui[0] (selec) controls the multiplexer selector, ui[1] (clk_ref) receives the reference clock signal or frequency, ui[2] (VCO) is the frequency beig measured, and ui[3] (reset) is the reset input. Ensure all connections are secure and provide appropriate signals to these inputs. Monitor the outputs uo[0] to uo[4], which represent the digital values of the frequency measurements. Apply power to the chip, vary input signals, and toggle the selector pin to observe the chip's behavior under different conditions. Analyze the digital output values to verify the accuracy and performance of the chip, comparing them against expected frequency measurements to ensure compliance with specifications and requirements.

### External hardware

Waveform Generator and Logic Analyzer.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | selec | out[0] |  |
| 1 | clk_ref | out[1] |  |
| 2 | VCO | out[2] |  |
| 3 | reset | out[3] |  |
| 4 |  | out[4] |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |

### Chip location

{{< shuttle-map "tt06" "171" >}}
