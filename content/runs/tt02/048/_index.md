---
hidden: true
title: "48 Shiftregister Challenge 40 Bit"
weight: 49
---

## 48 : 0b 000 110 000 : Shiftregister Challenge 40 Bit

* Author: Thorsten Knoll
* Description: The design is a 40 bit shiftregister with a hardcoded 40 bit number. The challenge is to find the correct 40 bit to enable the output to high. With all other numbers the output will be low.
* [GitHub repository](https://github.com/ThorKn/tinytapeout02_shiftregister_challenge)
* [Most recent GDS build](https://github.com/ThorKn/tinytapeout02_shiftregister_challenge/actions/runs/3476978715)
* [Wokwi](https://wokwi.com/projects/341516949939814994) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: To test when knowing the correct 40 bit, only a dipswitch (data), a button (clk) and a LED (output) is needed. Without knowing the number it becomes the challenge and more hardware might be required.

![picture](images/shiftregister_challenge.png)

### How it works

Shift a 40 bit number into the chip with the two inputs data (IN0) and clk (IN1). If the shifted 40 bit match the hardcoded internal 40 bit, then and only then the output will become high. Having only the mikrochip without the design files, one might need reverse engineering and/or side channel attacks to fing the correct 40 bit.

### How to test

Get the correct 40 bit from the design and shift them into the shiftregister. Each rising edge at the clk will push the next bit into the register. At the correct 40 bit, the output will enable high.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | data  | output |
| 1 | clk  | none |
| 2 | none  | none |
| 3 | none  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
