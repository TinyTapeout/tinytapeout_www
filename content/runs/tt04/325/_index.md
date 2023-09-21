---
hidden: true
title: "325 MULDIV unit (4-bit signed/unsigned)"
weight: 1
---

## 325 : MULDIV unit (4-bit signed/unsigned)

* Author: Darryl Miles
* Description: Combinational Multiply and Divide Unit (signed and unsigned)
* [GitHub repository](https://github.com/dlmiles/tt04-muldiv4)
* [GDS submitted](https://github.com/dlmiles/tt04-muldiv4/actions/runs/6122890324)
* HDL project
* [Extra docs](https://dlmiles.github.io/tt04-muldiv4/)
* Clock: 10000000 Hz
* External hardware: 



### How it works

Combinational multiply / divider unit (no clock in use)

Multiplier (signed/unsigned)
Method uses Ripple Carry Array as 'high speed multiplier'
Setup operation mode bits MULDIV=0 and OPSIGNED(unsigned=0/signed=1)
Setup A (multiplier 4-bit) * B (multiplicand 4-bit)
Expect result P (product 8-bit)

Divider (signed/unsigned)
Method uses Full Adder with Mux as 'combinational restoring array divider algorithm'.
Setup operation mode bits MULDIV=1 and OPSIGNED(unsigned=0/signed=1)
Setup Dend (dividend 4-bit) / Dsor (divisor 4-bit)
Expect result Q (quotient 4-bit) with R (remainder 4-bit)

Divider has error bit indicators that take precedence over any result.
If any error bit is set then the output Q and R should be disregarded.
When in multiplier mode error bits are muted to 0.
No input values can cause an overflow error so the bit is always reset.

The project was sketched out and tested with logisim-evolution
https://github.com/logisim-evolution/logisim-evolution then exported
direct to verilog (as if it was for a FPGA development board using the
built in process).


### How to test

Setup the input state expect immediate output (after gate propagation delays).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | MUL A[0], DIV Dend[0]  | MUL P[0], DIV Q[0] | (unused) |
| 1 | MUL A[1], DIV Dend[1]  | MUL P[1], DIV Q[1] | (unused) |
| 2 | MUL A[2], DIV Dend[2]  | MUL P[2], DIV Q[2] | (unused) |
| 3 | MUL A[3], DIV Dend[3]  | MUL P[3], DIV Q[3] | (unused) |
| 4 | MUL B[0], DIV Dsor[0]  | MUL P[4], DIV R[0] | DIV error overflow (output only) |
| 5 | MUL B[1], DIV Dsor[1]  | MUL P[5], DIV R[1] | DIV error divide-by-zero (output only) |
| 6 | MUL B[2], DIV Dsor[2]  | MUL P[6], DIV R[2] | OPSIGNED mode (input only) |
| 7 | MUL B[3], DIV Dsor[3]  | MUL P[7], DIV R[3] | MULDIV mode (input only) |
