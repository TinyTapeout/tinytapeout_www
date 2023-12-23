---
hidden: true
title: "13 Continued Fraction Calculator"
weight: 111
---

## 13 : Continued Fraction Calculator

* Author: Kevin You
* Description: Calculates the continued fraction of the square root of a natural number
* [GitHub repository](https://github.com/kskyou/tt05)
* [GDS submitted](https://github.com/kskyou/tt05/actions/runs/6749942296)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

This continued fraction calculator computes the convergents in the standard manner. It computes the coefficients of the continued fraction, and then recursively computes the convergents.
It turns out that when the target is the square of a natural number, one can avoid the need of comparisons or taking the floor (except on the first step) and only use addition, multiplication, and integer division.
Still, squeezing the design in roughly 1000 cells proved quite difficult, and various simplifications were necessary (such as changing the output from 7-segment to binary).

This calculator, in conjunction with a mobile phone calculator, or paper and pencil, can be used to calculate the fundumental solution of Pell's equation x^2 - Dy^2 = 1. To do this, simply
enter D, compute convergents, and verify whether the convergents satisfy Pell's equation P^2 - DQ^2 = 1. The first convergents that satisfy Pell's equation is the fundumental solution.
This procedure combines the continued fraction calculator's ability to store various intermediate values and a mobile phone calculator's ability to calculate large numbers.


### How to test

Enter 14 bit binary number D input via switches, press button 0 to generate the next convergents P and Q, where sqrt(D) ~ P/Q.
Press button 1 to read through the values of P and Q in order of P[15:8], P[7:0], Q[15:8], Q[7:0].


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | button  | status LED | switch |
| 1 | button  | status LED | switch |
| 2 | switch  | status LED | switch |
| 3 | switch  | status LED | switch |
| 4 | switch  | status LED | switch |
| 5 | switch  | status LED | switch |
| 6 | switch  | status LED | switch |
| 7 | switch  | status LED | switch |

### Chip location

{{< shuttle-map "tt05" "13" >}}
