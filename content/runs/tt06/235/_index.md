---
hidden: true
title: "235 Programmable Thing"
weight: 218
---

## 235 : Programmable Thing

* Author: James Meech
* Description: One inverter and a programmable resistor with one terminal connected to ground
* [GitHub repository](https://github.com/JamesTimothyMeech/tt06-programmable-thing)
* [GDS submitted](https://github.com/JamesTimothyMeech/tt06-programmable-thing/actions/runs/8746902919)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The project is a programmable resistor controlled by setting ui[0] to ui[7] and ui[0] to ui[7] high to connect a set of 58.218 k ohm  resistors between pin ua[0] and ground in parallel using programmable analog switches. There is also an inverter with analog pin ua[5] as an input and analog pin ua[4] as an output. Try using the inverter as an amplifier as explained here: https://www.youtube.com/watch?v=03Ds1TnoMbA&ab_channel=MSMTUE and see if you get the same results when trying to use the inverters in my digital tile as an amplifier: https://github.com/JamesTimothyMeech/TT06/blob/main/info.yaml

### How to test

Apply inputs to the inverters with a square wave or other signal generator and measure the output. To test the programmable resistor connect the supply voltage in series with an ammeter to pin ua[0]. Set ui[0] to ui[7] and ui[0] to ui[7] high to connect a set of 58.218 k ohm resistors to ground internally inside the chip. You should be able to measure differences in current as you connect each resistor to ground by setting the corresponding digital input pin high.

### External hardware

TT06 printed circuit board, signal generator, an oscilliscope or similar to measure the input and output.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 1 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 2 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 3 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 4 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 5 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 6 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |
| 7 | Control pin to connect one of the 16 resistors between ua[0] and ground using an analog switch  | Not used, grounded internally  |      |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 5 | Internal programmable resistor connected to this pin           |
| 1 | 0 | Analog pin not used           |
| 2 | 4 | Analog pin not used           |
| 3 | 1 | Analog pin not used           |
| 4 | 3 | Analog inverter output           |
| 5 | 2 | Analog inverter input           |

### Chip location

{{< shuttle-map "tt06" "235" >}}
