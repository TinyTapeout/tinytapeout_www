---
hidden: true
title: "36 Pi (π) to 1000+ decimal places"
weight: 37
---

## 36 : 0b 000 100 100 : Pi (π) to 1000+ decimal places

{{< tt-scanchain-switches "000100100" >}}

* Author: James Ross
* Description: This circuit outputs the first 1024 decimal digits of Pi (π), including the decimal after the three. The repository started out as something else, but after completing the 16x8 SRAM circiut (128 bits), I became curious about just how much information could be packed into the circuit area.  The D flip flops in SRAM aren't particularly dense and the circuit has other functionality beyond information storage.  For this demonstration, I needed something without a logical pattern, something familiar, and something which would exercise all the LEDs in the seven segment display.  The Pi constant was perfect.  After a number of experiments in Verilog, trying the Espresso Heuristic Logic Minimizer tool, the best results ended up being a large boring block of case statements and letting the toolchain figure it out. The information limit I found was 1023*log2(10)+1 ~= 3,400 bits, after which the toolchain struggled.  However, it appears in this case that the layout is limited by metal, not combinatorial logic.  I am interested to hear about better strategies to do something like this with synthesizable Verilog.
* [GitHub repository](https://github.com/jar/tt02_freespeech)
* [Most recent GDS build](https://github.com/jar/tt02_freespeech/actions/runs/3597726759)
* HDL project
* [Extra docs](https://github.com/jar/tt02_freespeech/blob/main/README.md)
* Clock: 0 Hz
* External hardware: The seven segment display is used directly.

![picture](images/pi.png)

### How it works

There is some combinatorial logic which generates the first 1024 decimal digits and then decodes those digits (and the decimal) to the 7 segment display.

### How to test

The clock is used to drive the incremental changes in the display.  The reset pin is used to zero the index.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | segment a |
| 1 | reset  | segment b |
| 2 | None  | segment c |
| 3 | None  | segment d |
| 4 | None  | segment e |
| 5 | None  | segment f |
| 6 | None  | segment g |
| 7 | None  | decimal LED |
