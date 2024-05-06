---
hidden: true
title: "901 Gate Guesser"
weight: 168
---

## 901 : Gate Guesser

* Author: Fabio Ramirez Stern
* Description: A very simple gate guessing game - which I/O is connected to what?
* [GitHub repository](https://github.com/faramire/TT06-gate-guesser)
* [GDS submitted](https://github.com/faramire/TT06-gate-guesser/actions/runs/8654554716)
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

The input and inout (used as inpputs) pins are connected to 8 different logic gates, which lead to the outputs. Only one logic layer of combinatoric logic.
Each input is hooked up to only one gate.

### How to test

No clock, enable or reset is used. As this is just one layer of combinatoric logic, you can simply check against a precalculated truth table. To play, flip the inputs and observe the output until you recognise what it must be.

### External hardware

Connect 16 switches to the input and inout pins, the 8 outputs are hooked up to one LED each (or other display hardware of your choice).

The solution is:

<details> 
  <summary> SPOILER </summary>


out0 = in0 and in2

out1 = not in1

out2 = in5 and in7 and inA

out3 = in6 xor inC

out4 = in4 nand in9

out5 = in8 xnor B

out6 = inE nor inF

out7 = in3 or inD

</details>


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | switch0  | gatey0  |      |
| 1 | switch1  | gatey1  |      |
| 2 | switch2  | gatey2  |      |
| 3 | switch3  | gatey3  |      |
| 4 | switch4  | gatey4  |      |
| 5 | switch5  | gatey5  |      |
| 6 | switch6  | gatey6  |      |
| 7 | switch7  | gatey7  |      |


### Chip location

{{< shuttle-map "tt06" "901" >}}
