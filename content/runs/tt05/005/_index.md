---
hidden: true
title: "5 SAP-1 Computer"
weight: 76
---

## 5 : SAP-1 Computer

* Author: Brandon Cruz
* Description: Simple as Possible  computer into ASIC
* [GitHub repository](https://github.com/brandcrz88/SAP-1_Computer)
* [GDS submitted](https://github.com/brandcrz88/SAP-1_Computer/actions/runs/6740984456)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: Oscilloscope



### How it works

Originally, Malvino and Brown presented the SAP-1 architecture in a book called Digital Computer Electronics.
The design gained massive popularity when it was build as a bread board computer by Ben Eater on a series of YouTube videos.
The architecture contains various modules, including
the instruction execution set gives the SAP-1 a total of six stages from 0 to 5, repeating all over again.

- Clock
- Program Counter
- Register A
- Register B
- Adder
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

The more important module      is the controller. It controlls the assertion execution according to the stimuli from the stages.
The stages 3 to 5 five depend on the instructions of the operation codes.


### How to test

Design Output Reading Section
The design is engineered to read the output signal generated from the bus, which contains the information
of the add and subtract operations executed by the design. Currently, the only method to read the signals
is through an oscilloscope. However, a significant enhancement would be the implementation of a state machine
controlling a 3 7-segment display to show the numbers on the 8-bit bus (up to 255).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | n/a  | bus[0] | n/a |
| 1 | n/a  | bus[1] | n/a |
| 2 | n/a  | bus[2] | n/a |
| 3 | n/a  | bus[3] | n/a |
| 4 | n/a  | bus[4] | n/a |
| 5 | n/a  | bus[5] | n/a |
| 6 | n/a  | bus[6] | n/a |
| 7 | n/a  | bus[7] | n/a |

### Chip location

{{< shuttle-map "tt05" "5" >}}
