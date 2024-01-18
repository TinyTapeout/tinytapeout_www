---
hidden: true
title: "67 Hamming(7,4) encoder decoder"
weight: 68
---

## 67 : 0b 001 000 011 : Hamming(7,4) encoder decoder

{{< tt-scanchain-switches "001000011" >}}

* Author: Robbert
* Description: Encodes and decodes data using Hamming 7,4 codes.
* [GitHub repository](https://github.com/robbertvanginkel/tt03-hamming74)
* [Most recent GDS build](https://github.com/robbertvanginkel/tt03-hamming74/actions/runs/4785845575)
* HDL project
* [Extra docs]()
* Clock:  Hz
* External hardware: 



### How it works

Encodes and decodes data using Hamming 7,4 codes.


### How to test

See src/test.py


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | word / codeword  | codeword / word |
| 1 | word / codeword  | codeword / word |
| 2 | word / codeword  | codeword / word |
| 3 | word / codeword  | codeword / word |
| 4 | none / codeword  | codeword / error |
| 5 | none / codeword  | codeword / none |
| 6 | none / codeword  | codeword / none |
| 7 | mode (0: encode, 1: decode)  | none |
