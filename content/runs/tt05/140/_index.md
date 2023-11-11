---
hidden: true
title: "140 Matrix multiply coprocessor (8x8 1bit)"
weight: 167
---

## 140 : Matrix multiply coprocessor (8x8 1bit)

* Author: Nick Hay
* Description: Implements a 1bit 8x8 matrix multiple using a systolic array.
* [GitHub repository](https://github.com/nickjhay/tt05-submission-template)
* [GDS submitted](https://github.com/nickjhay/tt05-submission-template/actions/runs/6756272108)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works


### How to test

Explain how to test your project


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | data 0  | output 0 | sayhi: outputs greeting |
| 1 | data 1  | output 1 | read out multiplied matrix |
| 2 | data 2  | output 2 | use xor rather than or |
| 3 | data 3  | output 3 | none |
| 4 | data 4  | output 4 | none |
| 5 | data 5  | output 5 | none |
| 6 | data 6  | output 6 | none |
| 7 | data 7  | output 7 | none |

### Chip location

{{< shuttle-map "tt05" "140" >}}
