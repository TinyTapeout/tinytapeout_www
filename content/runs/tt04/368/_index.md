---
hidden: true
title: "368 rusty_adder"
weight: 131
---

## 368 : rusty_adder

* Author: Kevin Webb
* Description: A (tiny) 8 bit adder built using RustHDL
* [GitHub repository](https://github.com/kpwebb/tt04-kpwebb-tinycan)
* [GDS submitted](https://github.com/kpwebb/tt04-kpwebb-tinycan/actions/runs/6125740874)
* HDL project
* [Extra docs]()
* Clock: 10000 Hz
* External hardware: 



### How it works

Adds two 8 bit inputs (ui_in and uio_in) together to and outputs via uo_out. Implementation was written in rust using Rust-HDL and exported as verilog


### How to test

set ui_in and uio_in and toggle reset line


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input a bit 0  | a + b bit 0 | input b bit 0 |
| 1 | input a bit 1  | a + b bit 1 | input b bit 1 |
| 2 | input a bit 2  | a + b bit 2 | input b bit 2 |
| 3 | input a bit 3  | a + b bit 3 | input b bit 3 |
| 4 | input a bit 4  | a + b bit 4 | input b bit 4 |
| 5 | input a bit 5  | a + b bit 5 | input b bit 5 |
| 6 | input a bit 6  | a + b bit 6 | input b bit 6 |
| 7 | input a bit 7  | a + b bit 7 | input b bit 7 |
