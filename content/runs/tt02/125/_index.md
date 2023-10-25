---
hidden: true
title: "125 w5s8: universal turing machine core"
weight: 126
---

## 125 : 0b 001 111 101 : w5s8: universal turing machine core

{{< tt-scanchain-switches "001111101" >}}

* Author: Andrew Foote
* Description: State transition logic for a 5-state, 8-symbol universal turing machine
* [GitHub repository](https://github.com/andars/tt02-universal-turing-machine-w5s8)
* [Most recent GDS build](https://github.com/andars/tt02-universal-turing-machine-w5s8/actions/runs/3599725395)
* HDL project
* [Extra docs](https://github.com/andars/tt02-universal-turing-machine-w5s8#readme)
* Clock: 1000 Hz
* External hardware: 



### How it works

Uses combinational logic to implements a (state, symbol) -> (state, symbol, direction) transition function

### How to test

Provide state & symbol as inputs, and the module should output the state, symbol, and direction according to the table in test.py.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | none |
| 1 | state_in[0]  | next_direction |
| 2 | state_in[1]  | new_sym[0] |
| 3 | state_in[2]  | new_sym[1] |
| 4 | sym_in[0]  | new_sym[2] |
| 5 | sym_in[1]  | new_state[0] |
| 6 | sym_in[2]  | new_state[1] |
| 7 | mode  | new_state[2] |
