---
hidden: true
title: "208 Chisel 16-bit GCD with scan in and out"
weight: 209
---

## 208 : 0b 011 010 000 : Chisel 16-bit GCD with scan in and out

{{< tt-scanchain-switches "011010000" >}}

* Author: Steve Burns
* Description: Simple chisel based design based on Knuth's BinaryGDC algorithm using scan chains for I/O.
* [GitHub repository](https://github.com/stevenmburns/tt02-scannable-gcd)
* [Most recent GDS build](https://github.com/stevenmburns/tt02-scannable-gcd/actions/runs/3598246612)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: None



### How it works

With the `ld` signal true, the `u_bit` and `v_bit` inputs are used to scan the `n`-bit numbers into the block. Simulataneously, the high-order bit of the `u` register is scanned out, allowing access to the result of the last computation. Upon lowering the `ld` signal, the Euclid iteration starts. When done, the `done` signal is raised.

### How to test

Chiseltest enabled tests. Go to `chisel` and run `sbt test`.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | z_bit |
| 1 | reset  | done |
| 2 | ld  | none |
| 3 | u_bit  | none |
| 4 | v_bit  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
