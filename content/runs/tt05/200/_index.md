---
hidden: true
title: "200 4-Bit ALU"
weight: 93
---

## 200 : 4-Bit ALU

* Author: CE JMU Wuerzburg
* Description: A simple 4-Bit ALU which contains two types of adders, multipliers, a comparator and a barrel-shifter
* [GitHub repository](https://github.com/CEJMU/tt05-alu)
* [GDS submitted](https://github.com/CEJMU/tt05-alu/actions/runs/6756737942)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

The ALU contains a ripple carry adder, a carry lookahead adder, a matrix multiplier, a wallace-tree multiplier, a comparator and a barrel-shifter. Everything is implemented fully combinational. A 3-bit opcode is used to select the respective component.


### How to test

No clock is required. The first 4 input bits a[3...0] form the first operand, the last 4 input bits b[3...0] form the second operand. The outputs s[7...0] are used for the compuational results, the results for shifting a, or the results of comparing a with b. The bidirectional input bits 0, 1 and 2 are used as opcode to select the component, c.f. Figure above. If the barrel-shifter is used, a[3...0] will be shifted, b[1...0] is used to specify the shift width, whereas b[2] selects the shift direction.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | a[0]  | s[0] (1, if $a > b$) | opcode[0] |
| 1 | a[1]  | s[1] (1, if $a < b$) | opcode[1] |
| 2 | a[2]  | s[2] (1, if $a == b$) | opcode[2] |
| 3 | a[3]  | s[3] | none |
| 4 | b[0]  | s[4] | none |
| 5 | b[1]  | s[5] | none |
| 6 | b[2] (0 = shift right, 1 = shift left)  | s[6] | none |
| 7 | b[3]  | s[7] | none |

### Chip location

{{< shuttle-map "tt05" "200" >}}
