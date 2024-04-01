---
hidden: true
title: "236 Perceptron (Neuromeme)"
weight: 102
---

## 236 : Perceptron (Neuromeme)

* Author: Dylan Louie
* Description: A perceptron or a 9 + 10 adder
* [GitHub repository](https://github.com/Sinfinite01/tt05-verilog-Sinfinite)
* [GDS submitted](https://github.com/Sinfinite01/tt05-verilog-Sinfinite/actions/runs/6753376088)
* HDL project
* [Extra docs]()
* Clock:  Hz
* External hardware: 



### How it works

Reads from two 8-bit input and creates a weighted sum  
of the 16 bits.

The 8-bit wieights are default 10000000 and are unuptatable.
(10000000 represents 0.5 if the you conceptualize a . on the far left
or represents 128 if you conceptualize a . on the far right)

If the weighted sum is greater than the threshold, 11111110, than it
will classify the input as 1 otherwise it will classify it as 0.

9 + 10 = 21

Credit/Thanks to my Professor: UCSC's Neuromorphic Lab's Jason K Eshraghian Ph.D.


### How to test

Any input with all 0's should be classified as 0.

Math:

Note: The threshold is 11111110 which can be thought of as 0.99993896484

w0*i0 + w1*i1 + ... + w15*i15

0.5*0 + 0.5*0 + ... + 0.5*0 = 0

Any input with fifteen 0's and one 1's should be classified as 0.

Math:

w0*i0 + w1*i1 + ... + w15*i15

0.5*1 + 0.5*0 + ... + 0.5*0 = 0.5

Any input with two or more 1's should be classified as 1.

Math:

w0*i0 + w1*i1 + w2*i2 + ... + w15*i15

0.5*1 + 0.5*1 + 0.5*0 + ... + 0.5*0 = 1

0.5*1 + 0.5*1 + 0.5*1 + 0.5*0 + ... + 0.5*0 > 1


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input 0 asssociated with weight 0  | Read as an 8 bit output along with other outputs | input 9 asssociated with weight 9 |
| 1 | input 1 asssociated with weight 1  | Read as an 8 bit output along with other outputs | input 10 asssociated with weight 10 |
| 2 | input 2 asssociated with weight 2  | Read as an 8 bit output along with other outputs | input 11 asssociated with weight 11 |
| 3 | input 3 asssociated with weight 3  | Read as an 8 bit output along with other outputs | input 12 asssociated with weight 12 |
| 4 | input 4 asssociated with weight 4  | Read as an 8 bit output along with other outputs | input 13 asssociated with weight 13 |
| 5 | input 5 asssociated with weight 5  | Read as an 8 bit output along with other outputs | input 14 asssociated with weight 14 |
| 6 | input 6 asssociated with weight 6  | Read as an 8 bit output along with other outputs | input 15 asssociated with weight 15 |
| 7 | input 7 asssociated with weight 7  | None | input 16 asssociated with weight 16 |

### Chip location

{{< shuttle-map "tt05" "236" >}}
