---
hidden: true
title: "162 SAP-1 CPU"
weight: 21
---

## 162 : SAP-1 CPU

* Author: Jayraj Desai
* Description: Implementaion of Simple As Possible (SAP-1) CPU based on the book Digital Computer Electronics by Albert Paul Malvino and Jerald A. Brown 
* [GitHub repository](https://github.com/jayraj4021/tt04-submission-jayraj4021-SAP1)
* [GDS submitted](https://github.com/jayraj4021/tt04-submission-jayraj4021-SAP1/actions/runs/5992196613)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Clock generator and a switch to provide reset signal



### How it works

This project is an implementation of a CPU called SAP-1 as referred in the book 'Digital Computer Electronics' by  Albert Paul Malvino and Jerald A. Brown.
Book's PDF is available online, a simple internet search will point you to the PDF of the book.
Difference in my implementation versus the one mentioned in the book is that they have used shared bus architecture, which was possible due to use of TTL
tristate buffers but in CMOS implementation I am not aware of a simple way to infer a tristate buffer in verilog so made some changes to adapt their architecture.
Another important thing to notice is that even though this project has full implementation of LDA, ADD, SUB and OUT instructions, I have not implemented interface to
an external memory, instead I have hard coded a 16 x 8 bit memory in the memory_16x8_rom.v which kind of simulates memory.
Hence this CPU can run only one code.

This Project needs two input only clk and rst_n. I plan to provide input clock by generating it outside using a 555 timer and using a simple switch to provide rst_n signal.


### How to test

As mentioned in how it works this project needs two inputs clk and rst_n. Once these signals are applied after few clock pulses you should see output of a fixed
code at the output pins which can be viewed using set of 8 LEDs connected serially through resistors.  
Expected output is binary 01 (This is output of first instruction that loads accumulator with value 01 which is stored at address 0x9 in memory) , 03
(This is output of second instruction which is add accumulator with value 02 which is stored at 0xA address in memory), 06
(This is output of third instruction which is add accumulator with value 03 which is stored at 0xB address in memory) and 02 (This is output of
third instruction which is subtract accumulator with value 04 which is stored at 0xC address in memory).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk = input clock  | uo_out[0] | none |
| 1 | rst_n = active low reset  | uo_out[1] | none |
| 2 | none  | uo_out[2] | none |
| 3 | none  | uo_out[3] | none |
| 4 | none  | uo_out[4] | none |
| 5 | none  | uo_out[5] | none |
| 6 | none  | uo_out[6] | none |
| 7 | none  | uo_out[7] | none |
