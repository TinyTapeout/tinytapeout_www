---
hidden: true
title: "36 Binary to DEC and HEX"
weight: 37
---

## 36 : 0b 000 100 100 : Binary to DEC and HEX

{{< tt-scanchain-switches "000100100" >}}

* Author: Norberto Hernandez-Como
* Description: Converts a 4 digit binary number to decimal or to hexadecimal using a 7-segment display
* [GitHub repository](https://github.com/jedicomo22/Norberto_IPN_V1)
* [Wokwi](https://wokwi.com/projects/361684719151591425) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Converts a 4 digit binary number to decimal or to hexadecimal using a 7-segment display


### How to test

Select binary to decimal with input 6 (named Dec, the dot is displayed) or binary to hexadecimal with input 7 (named Hex).
Input a 4 digit binary number using inputs B3, B2, B1, B0 and see in the 7-segment display the converted number in decimal or hexadecimal.
All forbiden combinations are not displayed.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | B0  | segment a |
| 1 | B1  | segment b |
| 2 | B2  | segment c |
| 3 | B3  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | Dec  | segment g |
| 7 | Hex  | dot |
