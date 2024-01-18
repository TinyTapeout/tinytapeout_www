---
hidden: true
title: "92 SIMON Cipher"
weight: 93
---

## 92 : 0b 001 011 100 : SIMON Cipher

{{< tt-scanchain-switches "001011100" >}}

* Author: Fraser Price
* Description: Simon32/64 Encryption
* [GitHub repository](https://github.com/Fraserbc/tt02-simon)
* [Most recent GDS build](https://github.com/Fraserbc/tt02-simon/actions/runs/3429009161)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Encrypts data by sending it through a feistel network for 32 rounds where it is combined with the round subkey and the last round. Data is entered into the core via shift registers.


### How to test

Set shift high and shift data in lsb first, 4 bits at a time. Shift in 96 bits, 32 being data and 64 being the key, with the plaintext being shifted in first. Eg if the plaintext was 32'h65656877 and key was 64'h1918111009080100, then 96'h191811100908010065656877 would be shifted in. Once bits have been shifted in, bring shift low, wait 32 clock cycles then set it high again. The ciphertext will be shifted out lsb first.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | data_out[0] |
| 1 | shift  | data_out[1] |
| 2 | data_in[0]  | data_out[2] |
| 3 | data_in[1]  | data_out[3] |
| 4 | data_in[2]  | segment e |
| 5 | data_in[3]  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
