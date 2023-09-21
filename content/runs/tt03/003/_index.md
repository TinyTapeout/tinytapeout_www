---
hidden: true
title: "3 Another Piece of Pi"
weight: 4
---

## 3 : Another Piece of Pi

* Author: Meinhard Kissich, EAS Group, Graz University of Technology
* Description: This design takes up the idea of James Ross [1], who submitted a circuit to Tiny Tapeout 02 that stores and outputs the first 1024 decimal digits of the number Pi (including the decimal point) to a 7-segment display. In contrast to his approach, a densely packed decimal encoding is used to store the data. With this approach, 1400 digits can be stored and output within the design area of 150um x 170um. However, at 1400 decimals and utilization of 38.99%, the limitation seems to be routing. Like James, I'm also interested to hear about better strategies to fit more information into the design with synthesizable Verilog code. [1] https://github.com/jar/tt02_freespeech
* [GitHub repository](https://github.com/meiniKi/tt03-another-piece-of-pi)
* [Most recent GDS build](https://github.com/meiniKi/tt03-another-piece-of-pi/actions/runs/4335463507)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 7-segment display



### How it works

The circuit stores each triplet of decimals in a 10-bit vector encoded as densely packed decimals. An index vector selects the current digits to be output to the 7-segment display. It consists of an upper part `index[11:2]` that selects the triplet and a lower part `index[1:0]` that specifies the digit within the triplet. First, the upper part decides on the triplet, which is then decoded into three decimals. Afterwards, the lower part selects one of the three decimals to be decoded into 7-segment display logic and applied to the outputs. The index is incremented at each primary clock edge. However, when the lower part equals three, i.e., `index[1:0]==1'b10`, two is added, as the triplet consists of three (not four) digits.

- `index == 'b0000000000|00`: triplet[0], digit 0 within triplet  
- `index == 'b0000000000|01`: triplet[0], digit 1 within triplet  
- `index == 'b0000000000|10`: triplet[0], digit 2 within triplet  
- `index == 'b0000000001|00`: triplet[1], digit 0 within triplet  
- `index == 'b0000000001|01`: triplet[1], digit 1 within triplet  
- `index == 'b0000000001|10`: triplet[1], digit 2 within triplet

There is one exception to the rule above: the decimal point. Another multiplexer at the input of the 7-segment decoder can either forward a digit from the decoded tripled or a constant -- the decimal point. Once the lower part of the index counter, i.e., `index[1:0]` reaches `2'b10` for the first time, the multiplexer selects the decimal point and pauses incrementing the index for one clock cycle.

- `index == 'b0000000000|00`: triplet[0], digit 0 within triplet  
- `index == 'b0000000000|01`: triplet[0], decimal point
- `index == 'b0000000000|01`: triplet[0], digit 1 within triplet  
- `index == 'b0000000000|10`: triplet[0], digit 2 within triplet  
- `index == 'b0000000001|00`: triplet[1], digit 0 within triplet  


### How to test

For simulation, please use the provided testbench and Makefile. It is important to run the `genmux.py` Python script first, as it generates the test vectors required by the Verilog testbench. For testing the physical chip, release the reset and compare the digits of Pi against a reference.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clk  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | decimal LED |
