---
hidden: true
title: "198 Byte Computer"
weight: 13
---

## 198 : Byte Computer

* Author: Rutuparn Pawar
* Description: An 8 bit turing complete computer
* [GitHub repository](https://github.com/InputBlackBoxOutput/Byte-Computer)
* [GDS submitted](https://github.com/InputBlackBoxOutput/Byte-Computer/actions/runs/6722234412)
* HDL project
* [Extra docs](https://github.com/InputBlackBoxOutput/Byte-Computer)
* Clock: 0 Hz
* External hardware: 



### How it works

Byte computer is an in-order, no register file, no-cache, non-pipelined and no branch predictor implementation of an 8-bit Turing complete computer thus making it extremely simple and small enough for TinyTapeout.
The computer fetches instruction at the address in the program counter which has an initial value of zero.
The instruction is decoded and then executed followed by setting appropriate condition flags.
The program counter is incremented and the fetch -> decode -> execute process repeats until a halt instruction is fetched and executed.
See README in project repository for waveform illustrating the fetch -> decode -> execute process.


### How to test

External memory and memory control logic is required to test the design which can be implemented using a microcontroller.
The memory should be preloaded with a program created using the available instructions and the data processed by the program.
The expected memory behaviour is to write data to memory at address indicated by the addr signal when we signal is high and vice versa.
The halt signal indicates that the computer has encountered and ececuted a halt instruction.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | data[7]  | data[7] | we |
| 1 | data[6]  | data[6] | halt |
| 2 | data[5]  | data[5] | none |
| 3 | data[4]  | data[4] | addr[4] |
| 4 | data[3]  | data[3] | addr[3] |
| 5 | data[2]  | data[2] | addr[2] |
| 6 | data[1]  | data[1] | addr[1] |
| 7 | data[0]  | data[0] | addr[0] |

### Chip location

{{< shuttle-map "tt05" "198" >}}
