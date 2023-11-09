---
hidden: true
title: "462 Collatz conjecture brute-forcer"
weight: 7
---

## 462 : Collatz conjecture brute-forcer

* Author: Vytautas Šaltenis
* Description: Runs a Collatz sequence calculation for a given number, outputs the number
of steps it took to reach 1 (a.k.a. orbit length) and the upper 16 bits of
the highest number of the sequence.

* [GitHub repository](https://github.com/rtfb/tt05-collatz)
* [GDS submitted](https://github.com/rtfb/tt05-collatz/actions/runs/6523335236)
* HDL project
* [Extra docs](https://github.com/rtfb/tt05-collatz/blob/main/README.md)
* Clock: 0 Hz
* External hardware: 



### How it works

The module takes a (large) integer number `N` as an input and computes the
[Collatz sequence][1] until it reaches 1. When it does, it allows reading
back two numbers:

1) The orbit length (i.e. the number of steps it took to reach 1)
2) The highest recorded value of the upper 16 bits of the 144-bit internal
   iterator

The latter number is an indicator for good candidates for computing [path
records][2]. The non-zero upper bits indicate that the highest iterator
value `Mx(N)` is in the range of the previous path records and should be
recomputed in the full offline. (Holding on to the entire 144 bits of
`Mx(N)` number would be more obvious, but this almost doubles the footprint
of the design, hence, this optimisation).

[1]: https://en.wikipedia.org/wiki/Collatz_conjecture

[2]: http://www.ericr.nl/wondrous/pathrecs.html


### How to test

The module can be in 2 states: IO and COMPUTE. After reset, the chip will
be in IO mode. Since the input is intended to be much larger that the
available pins, the input number is uploaded one byte at a time,
increasing the address of where in the internal 144-bit-wide register that
byte should be stored.

Same for reading the output, except that the output numbers are limited to
16-bits each, so it takes much fewer operations to read them.

The full loop of computations works like this:

1) Set input (see below)
2) Pull `start compute` pin to high. The chip will start computations and
   will pull `compute busy indicator` pin to high
3) Keep reading `compute busy indicator` pin until it gets low again
4) Read the output (see below)

Writing input:

1) Set `write enable` pin to low
2) Wait at least one cycle
3) Expose your input byte to `input0-7`
4) Expose the target address for that byte to `address0-4`
5) Wait at least one cycle
6) Set `write enable` pin to high

Reading output:

1) Set `orbit/max select` pin to low
2) Set `address0-4` to 0
3) Read low byte of orbit length from `output0-7`
4) Set `address0-4` to 1
5) Read high byte of orbit length from `output0-7`
6) Set `orbit/max select` pin to high
7) Repeat steps 2-5 to read the upper `Mx(N)` bits


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input0  | output0 | address0 |
| 1 | input1  | output1 | address1 |
| 2 | input2  | output2 | address2 |
| 3 | input3  | output3 | address3 |
| 4 | input4  | output4 | address4 |
| 5 | input5  | output5 | orbit/max select |
| 6 | input6  | output6 | start compute |
| 7 | input7  | output7 | write enable or compute busy indicator |
