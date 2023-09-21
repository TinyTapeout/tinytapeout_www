---
hidden: true
title: "240 Two Bit Universal FSM"
weight: 241
---

## 240 : Two Bit Universal FSM

* Author: Emilio Alvarez
* Description: A two bit FSM inspired by Rue Mohr's 1Bit CPU
* [GitHub repository](https://github.com/emilio-a/1bitCPU)
* [Most recent GDS build](https://github.com/emilio-a/1bitCPU/actions/runs/4793155297)
* HDL project
* [Extra docs]()
* Clock: 1-1000 Hz
* External hardware: A microcomputer to load the RAM instructions (can be an Arduino), and a clock to run the FSM



### How it works

It's a Moore Finite State Machine where the "next step logic" is sinthetized by a Dual-port RAM and latched in a register. "Instructions" are loaded 
into the ram using port A through a 16 bit shift registed, clocked in A7-A0-D7-D0 format; once loaded they are written into RAM gating the RW pin.
The FSM itself uses port B of ram. Two inputs are concatenated with the address, forming the "next state", and the two ouputs are taken from the 
Data bus memory. The CLK runs the machine.


### How to test

- Initial conditions: clk_shft=0, clk_data=0, wr_shft=0, reset=0; clk_cpu=0, entradas=00 (sorry for the spanish)
- Pulse reset line (0->1->0)
- Gate 16 bits using clk_shft and data_shft inputs, knowing that (MSB)(LSB) are (A7 downto A0)(D7 downto D0) "instructions", rising edge clock active. 
- Once 16 clocks are gated, pulse wr_shft to 1 (0->1->0). Now, contents of shift register are written into RAM
- Once the 256 (or desired) instructions are written in ram, start clk_cpu.
- Output salidas(Q1,Q0) should start responding to input entradas(D1,D0) in a finite state machine fashion, in synch with cl.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | {'clk_shft': 'clock to the 16 bit shift register, risign clock active.'}  | {'salidaQ0': 'bit Q0'} |
| 1 | {'data_shft': 'data to be gated into the 16 bit shift register'}  | {'salidaQ1': 'bit Q1'} |
| 2 | {'wr_shft': 'a pulse here transfers the contents from shift register to RAM'}  | {'none': 'unused'} |
| 3 | {'reset': 'active high, resets the 16bit shift reg and the Next State reg'}  | {'none': 'unused'} |
| 4 | {'clk_cpu': 'clock to run the FSM'}  | {'none': 'unused'} |
| 5 | {'entradaD0': 'input bit D0'}  | {'none': 'unused'} |
| 6 | {'entradaD1': 'input bit D1'}  | {'none': 'unused'} |
| 7 | {'none': 'unused'}  | {'none': 'unused'} |
