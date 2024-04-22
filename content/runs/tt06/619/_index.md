---
hidden: true
title: "619 SAP-1 Computer"
weight: 90
---

## 619 : SAP-1 Computer

* Author: Jonathan Zhou, Rana Singh, Anika Agarwal
* Description: Simple as Possible computer with multiplier and divider into ASIC
* [GitHub repository](https://github.com/kevinwguan/tt06-SAP-1_Computer-)
* [GDS submitted](https://github.com/kevinwguan/tt06-SAP-1_Computer-/actions/runs/8747673059)
* HDL project
* [Extra docs](None)
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

```
  (Forked from Brandon Cruz's SAP-1 Design)

  Originally, Malvino and Brown presented the SAP-1 architecture in a book called Digital Computer Electronics.
  The design gained massive popularity when it was build as a bread board computer by Ben Eater on a series of YouTube videos.
  The architecture contains various modules, including
  - Clock
  - Program Counter
  - Register A
  - Register B
  - Adder
  - Multiplier
  - Divider
  - Memory
  - Instruction Register
  - Bus
  - Controller
  This design doesn't have inputs, it is dependent only on the clock that coordinates sequence of the computer's operation.
  Its operation consists on the communication that that bus provides between modules; the signal load dumps information into a module
  and the enable signal allows the bus to receive a signal. The bus is 8-bit width since it is an 8 bit computer, and the registers
  are also 8-bit registers.
  The computer can only perform addition, whether it is positive numbers or negative numbers (substraction).
  The signals information is stored within the memory module. There bus operations are coordinated with a series of multiplexers and
  the instruction execution set gives the SAP-1 a total of six stages from 0 to 5, repeating all over again.
  The more important module      is the controller. It controlls the assertion execution according to the stimuli from the stages.
  The stages 3 to 5 five depend on the instructions of the operation codes.
```

### How to test

```
  Design Output Reading Section
  The design is engineered to read the output signal generated from the bus, which contains the information
  of the add and subtract operations executed by the design. Currently, the only method to read the signals
  is through an oscilloscope. However, a significant enhancement would be the implementation of a state machine
  controlling a 3 7-segment display to show the numbers on the 8-bit bus (up to 255).
```

### External hardware

List external hardware used in your project (e.g. PMOD, LED display, etc), if any

Oscilloscope


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  | bus[0] |  |
| 1 |  | bus[1] |  |
| 2 |  | bus[2] |  |
| 3 |  | bus[3] |  |
| 4 |  | bus[4] |  |
| 5 |  | bus[5] |  |
| 6 |  | bus[6] |  |
| 7 |  | bus[7] |  |

### Chip location

{{< shuttle-map "tt06" "619" >}}
