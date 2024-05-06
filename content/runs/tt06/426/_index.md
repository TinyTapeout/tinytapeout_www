---
hidden: true
title: "426 Inverters"
weight: 33
---

## 426 : Inverters

* Author: James Meech
* Description: A set of inverters
* [GitHub repository](https://github.com/JamesTimothyMeech/TT06-beta)
* [GDS submitted](https://github.com/JamesTimothyMeech/TT06-beta/actions/runs/8680786206)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

I made this design with the goal of seeing what different measurements I could perform on an inverter with an analog Tiny Tapeout tile: https://github.com/JamesTimothyMeech/tt06-programmable-thing compared to this digital one.
This project contains a set of inverters of different sizes connected between the input and output pins. Input and output zero is a D Flip Flop. All other pins have an inverter connected between them. Please see the Wokwi circuit diagram: https://wokwi.com/projects/395134712676183041 or the info.yaml: https://github.com/JamesTimothyMeech/TT06/blob/main/info.yaml to see which pins are inverter inputs and which are inverter outputs.

### How to test

Apply inputs to the inverters with a square wave or other signal generator and measure the output. Experiment by putting inverters in parallel and see if you can measure any differences in their speed. Try connecting a large capacitor to the input and a resistor between the input and the output to use the inverters as an amplifier: https://www.youtube.com/watch?v=03Ds1TnoMbA&ab_channel=MSMTUE does this work in the same way as the inverter on the analog tile? If not, why?

### External hardware

TT06 printed circuit board, signal generator, an oscilliscope or similar to measure the input and output.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | D Flip Flop Input  | D Flip Flop output  |      |
| 1 | Inverter 1 input  | Inverter 1 output  |      |
| 2 | Inverter 2 input  | Inverter 2 output  |      |
| 3 | Inverter 3 input  | Inverter 3 output  |      |
| 4 | Inverter 4 input  | Inverter 4 output  |      |
| 5 | Inverter 5 input  | Inverter 5 output  |      |
| 6 | Inverter 6 input, also the output enable for all bidirectional pins connected to inverter inputs  | Inverter 6 output  |      |
| 7 | Inverter 7 input, also the output enable for all bidirectional pins connected to inverter output  | Inverter 7 output  |      |


### Chip location

{{< shuttle-map "tt06" "426" >}}
