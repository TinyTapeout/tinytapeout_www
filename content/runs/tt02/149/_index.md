---
hidden: true
title: "149 Continious Math"
weight: 150
---

## 149 : 0b010010101 : Continious Math

* Author: Sophia Li
* Description: output is a total you can ADD, SUBTRACT, XOR, or LEFT_SHIFT with the input  
* [GitHub repository](https://github.com/cmu-stuco-98154/f22-tt02-sophiali)
* [Most recent GDS build](https://github.com/cmu-stuco-98154/f22-tt02-sophiali/actions/runs/3600167212)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

uses a register and some combinational logic. There is a simple state machine so you must release the button for enable_arithmetic before enabeling it again. Basically, the same operation won't happen every clock cycle 100k times a second.

### How to test

Switch 6. after reset, the output should be zero. Hitting enable (Switch 5) will compute the current arithOp (+ = 2'b00, - = 2'b01, ^ = 2'b10, << = 2'b11

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | LED[7] |
| 1 | reset  | LED[6] |
| 2 | enable  | LED[5] |
| 3 | in_val[2]  | LED[4] |
| 4 | in_val[1]  | LED[3] |
| 5 | in_val[0]  | LED[2] |
| 6 | arithOp[1]  | LED[1] |
| 7 | arithOp[0]  | LED[0] |
