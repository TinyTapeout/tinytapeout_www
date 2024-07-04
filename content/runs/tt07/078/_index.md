---
hidden: true
title: "78 fractran-tt"
weight: 40
---

## 78 : fractran-tt

* Author: Jack Leightcap
* Description: Hardware implementation of John Conway's estoeric turing-complete lanugage Fractran
* [GitHub repository](https://github.com/jleightcap/tt07)
* [GDS submitted](https://github.com/jleightcap/tt07/actions/runs/9332763685)
* HDL project
* [Extra docs]()
* Clock: 1 Hz

### How it works

*Fractran* is an esoteric programming language built around prime factorization.

Fractran programs are lists of positive fractions: e.g.,

$$
\frac{17}{91},
\frac{78}{85},
\frac{19}{51},
\frac{23}{38},
\frac{29}{33},
\frac{77}{29},
\cdots
$$

Execution follows 3 rules:

1. The program is given an initial input integer $n \in \mathbb{N}$. This is the "accumulator" value.
2. To compute the next state, $n \leftarrow qn$ where $q \in \mathbb{Q}$ is the first fraction in the program where $qn \in \mathbb{N}$.
3. Repeat (2) until no such $q$ exists, then halt with output $n$.

Depending on how terms are represented, (2) is a very simple operating to implement in hardware.
The "cheat" is to operate on pre-factored values: for example, the first few fractions of the above example:

$$
2^0    3^0    5^0    7^{-1} 11^0    13^{-1} 17^1,
2^1    3^1    5^{-1} 7^0    11^0    13^1    17^{-1},
2^0    3^{-1} 5^0    7^0    11^0    13^0    17^{-1} 19^1,
2^{-1} 3^0    5^0    7^0    11^0    13^0    17^0    19^{-1} 23^1,
2^0    3^{-1} 5^0    7^0    11^{-1} 13^0    17^0    19^0    23^0 29^1,
\cdots
$$

For $n = 825 = 3^1 5^2 11^1$, $nq \in \mathbb{N}$ if all pairwise added prime factor degrees are positive: testing $825 \times \frac{17}{91}$:

$$
3^1 5^2 11^1 \times 7^{-1} 13^{-1} = 3^1 5^2 7^{-1} 11^1 13^{-1}
$$

The negative degrees are not cancelled by the terms of $n$: testing $825 \times \frac{29}{33}$,

$$
3^1 5^2 11^1 \times 3^{-1} 11^{-1} 29^1 = 5^2 29^1
$$

All negative degrees cancel, and the result is written as the new accumulator.

### How to test

See port mapping in [info.yaml](../info.yaml).

Encodings:

- accumulator: 8-bit unsigned integer degrees. Value `0b11111111` reserved as sentinel "STOP" value.
- fraction: 8-bit signed (one's complement) degrees. Value `0b11111111` (the "second zero") reserved as sentinel "STOP" value.

Apply to these two inputs pair of streams of prime factor degrees.
When the each stream is exhausted, apply the "STOP" value.

For each input, there is output:

- resultant degree, or "STOP" when both input streams exhausted, indicating a positive result and accumulator writeback.
- HALT, when a negative degree is calculuated, indicating the start of the next fraction.

### External hardware

The logic implemented internally is quite small, requiring support circuitry.
This might include:

1. fraction counter: program counter
2. degree pointer: counter for current prime term
3. fraction ROM: storing prime degrees, punctuaed by "STOP"s
4. banked accumulator RAM: two banks of memory to store current accumulator, and calculated value.
   on an integral result, the 'scratch' bank is switched to accumulator, old accumulator becomes 'scratch'.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | accumulator stream [0]  | factorized stream [0]  | fraction stream [0]        |
| 1 | accumulator stream [1]  | factorized stream [1]  | fraction stream [1]        |
| 2 | accumulator stream [2]  | factorized stream [2]  | fraction stream [2]        |
| 3 | accumulator stream [3]  | factorized stream [3]  | fraction stream [3]        |
| 4 | accumulator stream [4]  | factorized stream [4]  | fraction stream [4]        |
| 5 | accumulator stream [5]  | factorized stream [5]  | fraction stream [5]        |
| 6 | accumulator stream [6]  | factorized stream [6]  | fraction stream [6]        |
| 7 | accumulator stream [7]  | factorized stream [7]  | fraction stream [7]        |


### Chip location

{{< shuttle-map "tt07" "78" >}}
