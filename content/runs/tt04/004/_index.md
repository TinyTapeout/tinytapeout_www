---
hidden: true
title: "4 Number Factorizer"
weight: 42
---

## 4 : Number Factorizer

* Author: Marno van der Maas
* Description: Takes the input and computes its factors
* [GitHub repository](https://github.com/marnovandermaas/tiny-factorizer)
* [GDS submitted](https://github.com/marnovandermaas/tiny-factorizer/actions/runs/6010005415)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: seven-segment display



### How it works

This design uses a set of registers to compute the modulo of all factors up to 19 in one or two steps.
The modulus of non-trivial numbers is calculated using the following trick:

```
n % k = (
          (2^0 % k) * n[0] +
          (2^1 % k) * n[1] +
          ...              +
          (2^6 % k) * n[6] +
          (2^7 % k) * n[7]
        ) % k
      = big_sum % k
```

The values of `2^x % k` can be computed ahead of time and are hardcoded in the design.
Also we don't actually care about the modulus but rather about when the modulus is equal to zero, because that means that `k` is a factor.
Since the final result of `big_sum` is guaranteed to be less than or equal to `(k - 1) * 8`, we can exhaustively list all the values for which the modulus is zero by:

```
(n % k == 0) = (
                 big_sum == (k * 0) ||
                 big_sum == (k * 1) ||
                 big_sum == (k * 2) ||
                 ...                ||
                 big_sum == (k * m)
               )
```

Where `m` is the largest integer for which `k * m &lt;= (k - 1) * 8`.

Factors between 0x1 (decimal 1) and 0xF (decimal 15) are shown in a loop on the seven segment display with a one second delay between each factor.
This design uses some combinatorial logic to convert from binary to hexadecimal for the seven segment display.
The second delay is achieved by a clock divider logic.

The output pins show the prime factors of the input number.
If the input is zero, the output is set to the bottom 8 bits of the counter for debugging purposes.


### How to test

After reset and input set to 0, the counter on the seven segment display should increase by one every second with a 10 MHz input clock from `0x1` to `0xF`.
The outputs are the lower bits of the internal counter that increases every cycle.
The dot on the seven segment display should be off.

For inputs other than 0, the seven segment display shows the factors one by one, cycling back at the end.
The factor 1 is displayed for all inputs and only factors up to 15 are shown.
For example for 6, the factors 1, 2, 3 and 6 will be shown on the display.
For 7, the factors 1 and 7 will be shown on the display.
For 23, only the factor 1 will be show on the display.
It will also use the output pins to indicate the prime factors, where the least significant bit represents 2 and the most significant bit represents 19.
For example for 6, only 2 and 3 are set to 1.
For 7, only 7 is set to 1.
For 23, all the outputs are zero.
The dot on the seven segment display is only on when the input number is prime.

Hexadecimals are displayed using the [decimal configurations (without modifications)](https://en.wikipedia.org/wiki/Seven-segment_display#Decimal).
And then the hexadecimal values specified [here](https://en.wikipedia.org/wiki/Seven-segment_display#Hexadecimal).

Please reset the design before giving your input.
Also, you can have a look at the [testbench](https://github.com/marnovandermaas/tiny-factorizer/blob/main/src/test.py) for more thorough testing.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Fist bit of number to factor  | Segment a (hex) | Is  2 a factor? |
| 1 | Second bit of number to factor  | Segment b (hex) | Is  3 a factor? |
| 2 | Third bit of number to factor  | Segment c (hex) | Is  5 a factor? |
| 3 | Fourth bit of number to factor  | Segment d (hex) | Is  7 a factor? |
| 4 | Fifth bit of number to factor  | Segment e (hex) | Is 11 a factor? |
| 5 | Sixth bit of number to factor  | Segment f (hex) | Is 13 a factor? |
| 6 | Seventh bit of number to factor  | Segment g (hex) | Is 17 a factor? |
| 7 | Eigth bit of number to factor  | Segment dot (is prime) | Is 19 a factor? |
