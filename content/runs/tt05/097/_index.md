---
hidden: true
title: "97 Matrix Vector Multiplication (Verilog Demo)"
weight: 54
---

## 97 : Matrix Vector Multiplication (Verilog Demo)

* Author: Aled dela Cruz
* Description: Multiplies inputted vector by 
* [GitHub repository](https://github.com/alrdelcr/tt05-verilog-alrdelcr)
* [GDS submitted](https://github.com/alrdelcr/tt05-verilog-alrdelcr/actions/runs/6742173805)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Used to multiply a vector by a matrix. The matrix is initially filled with all zeros, but can be set to 0s by
the user. The first input switch, when flipped, will initialize a matrix multiplication between the current set
vector and the empty matrix. If the user wants to set the matrix, it can done line by line using the second bit.
Flipping the second bit causes the current 6 right most bits to be set to a certain value in the matrix. NO current
functionality to know which row of the matrix is set


### How to test

After reset, the counter should increase by one every second with a 10MHz input clock.
Experiment by changing the inputs to change the counting speed.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | compare bit 11  | segment a | second counter bit 0 |
| 1 | compare bit 12  | segment b | second counter bit 1 |
| 2 | compare bit 13  | segment c | second counter bit 2 |
| 3 | compare bit 14  | segment d | second counter bit 3 |
| 4 | compare bit 15  | segment e | second counter bit 4 |
| 5 | compare bit 16  | segment f | second counter bit 5 |
| 6 | compare bit 17  | segment g | second counter bit 6 |
| 7 | compare bit 18  | dot | second counter bit 7 |

### Chip location

{{< shuttle-map "tt05" "97" >}}
