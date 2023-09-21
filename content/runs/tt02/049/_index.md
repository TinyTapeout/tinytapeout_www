---
hidden: true
title: "49 TinyTapeout2 4-bit multiplier."
weight: 50
---

## 49 : TinyTapeout2 4-bit multiplier.

* Author: Tholin
* Description: Multiplies two 4-bit numbers presented on the input pins and outputs an 8-bit result.
* [GitHub repository](https://github.com/89Mods/tt2-4x4-multiply)
* [Most recent GDS build](https://github.com/AvalonSemiconductors/tt2-4x4-multiply/actions/runs/3603903621)
* HDL project
* [Extra docs]()
* Clock: 6000 Hz
* External hardware: DIP switches for the inputs, and LEDs on the outputs, to be able to read the binary result.

![picture](images/circuit.png)

### How it works

The multiplier is implemented using purely combinatorial logic. One 6-bit adder and two 8-bit adders as well as a heap of AND gates are the only used components.

### How to test

Input any two numbers on the input ports, and check if the 8-bit result is correct.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | A0  | R0 |
| 1 | A1  | R1 |
| 2 | A2  | R2 |
| 3 | A3  | R3 |
| 4 | B0  | R4 |
| 5 | B1  | R5 |
| 6 | B2  | R6 |
| 7 | B3  | R7 |
