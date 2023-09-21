---
hidden: true
title: "99 VC 16-bit CPU"
weight: 52
---

## 99 : VC 16-bit CPU

* Author: Paul Campbell
* Description: VC 16-bit CPU - RISV-C cpu
* [GitHub repository](https://github.com/MoonbaseOtago/tt04-vc)
* [GDS submitted](https://github.com/MoonbaseOtago/tt04-vc/actions/runs/5696879617)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

See the README.MD for more info


### How to test

Included is an assembler and a memory image for executing


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ReadData0  | AddressData0 | AddressLSB |
| 1 | ReadData1  | AddressData1 | WriteStrobe |
| 2 | ReadData2  | AddressData2 | AddressLatchHi |
| 3 | ReadData3  | AddressData3 | AddressLatchLo |
| 4 | ReadData4  | AddressData4 | unused4 |
| 5 | ReadData5  | AddressData5 | unused5 |
| 6 | ReadData6  | AddressData6 | unused6 |
| 7 | ReadData7  | AddressData7 | InterruptIn |
