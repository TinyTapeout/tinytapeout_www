---
hidden: true
title: "16 Stream Integrator"
weight: 17
---

## 16 : 0b 000 010 000 : Stream Integrator

{{< tt-scanchain-switches "000010000" >}}

* Author: William Moyes
* Description: A silicon implementation of a simple optical computation
* [GitHub repository](https://github.com/moyesw/tt02-moyesw-StreamIntegrator)
* [Most recent GDS build](https://github.com/moyesw/tt02-moyesw-StreamIntegrator/actions/runs/3357095237)
* [Wokwi](https://wokwi.com/projects/346553315158393428) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It is possible to generate a pseudorandom bit sequence optomechanically using four loops of punched paper tape. Each of the four tape loops, labeled A, B, C, and D, encodes one bit of information per linear position using a tape specific hole pattern. The patterns are TapeA_0=XOOO, TapeA_1=OXOO, TapeB_0=OOXO, TapeB_1=OOOX, TapeC_0=OOXX, TapeC_1=XXOO, TapeD_0=OXOX, TapeD_1=XOXO, where O is a hole, and X is filled. The pseudorandom sequence is obtained by physically stacking the four tapes together at a single linear point, and observing if light can pass through any of the four hole positions. If all four hole positions are blocked, a 0 is generated. If any of the four holes allows light to pass, a 1 is generated. The next bit is obtained by advancing all four tapes by one linear position and repeating the observation. By using the specified bit encoding patterns, the expression (C ? A : B) ^ D is calculated. If all four tapes are punched with randomly chosen 1 and 0 patterns, and each tape's length is relatively prime to the other tape lengths, then a maximum generator period is obtained. This TinyTapeout-02 minimal project was inspired by the paper tape pseudorandom bit sequence generator. It implements the core (C ? A : B) ^ D operation electrically instead of optomechanically. An extra ^ E term is added for ease of use.

### How to test

Run through the 32 possible input patterns, and verify the expected output value is observed. Counting from 00000 to 111111, where IN0 is the LSB (i.e. Tape A), and IN4 (i.e. Extra E) is the MSB should yield the pattern: 01010011101011001010110001010011.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | Value from Tape A  | Output |
| 1 | Value from Tape B  | none |
| 2 | Value from Tape C  | none |
| 3 | Value from Tape D  | none |
| 4 | Extra term XORed with generator output  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
