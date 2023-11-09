---
hidden: true
title: "235 Matrix Vector Multiplication Accelerator"
weight: 59
---

## 235 : Matrix Vector Multiplication Accelerator

* Author: Mathias Eriksen
* Description: This project takes in a 3x3 weight matrix in Compressed Sparse Row format, value is quantized and 8 bits long. It also takes in the corresponding 3 bit spike train. It then computes the matrix vector multiplication product and outputs the resulting vector on the output line
* [GitHub repository](https://github.com/MathiasTEriksen/tt05-SparcityAware)
* [GDS submitted](https://github.com/MathiasTEriksen/tt05-SparcityAware/actions/runs/6756294706)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Uses a set of registers and flags from the CPU to fetch the weight matrix in CSR format
as well as the spike train. The values are passed in one at a time, and the entire matrix
is loaded into registers that are internal to the IC

Once the full sparse matrix and spike train are loaded in, an algorithm is used to compute
the resultant vector of the matrix vector multiplication of the weight matrix and the spike train

Finally, the output vector is transmitted on the output line, along with a flag bit which flips
each time a new value is sent out.


### How to test

After reset, send values in CSR format using the input bits described below. Send a value by toggling
the sending CPU flag for one clock cycle while the values are in their respective registers. Repeat
for the entire matrix, toggling the sending CPU flag low between each value. Then, check the return
values by waiting for the sending out flag from the IC to flip. After the first flip, the other
two values will be sent on each clock edge.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Input Value bit 0  | Output Value bit 0 | FETCH Ready flag (out) |
| 1 | Input Value bit 1  | Output Value bit 1 | Sending out flag  (out) |
| 2 | Input Value bit 2  | Output Value bit 2 | Done sending flag (in) |
| 3 | Input Value bit 3  | Output Value bit 3 | Sending CPU flag (in) |
| 4 | Input Value bit 4  | Output Value bit 4 | Column Value bit 0 |
| 5 | Input Value bit 5  | Output Value bit 5 | Column Value bit 1 |
| 6 | Input Value bit 6  | Output Value bit 6 | Row Value bit 0 |
| 7 | Input Value bit 7  | Output Value bit 7 | Row Value bit 1 |
