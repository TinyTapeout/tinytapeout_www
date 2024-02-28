---
hidden: true
title: "242 PSRANDOM"
weight: 243
---

## 242 : 0b 011 110 010 : PSRANDOM

{{< tt-scanchain-switches "011110010" >}}

* Author: CMUA F.Segura-Quijano, J.S.Moya
* Description: Pseudo Random generator.
* [GitHub repository](https://github.com/darkfsegura/tt03-verilog-cmua-psrandom)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Uses a General Register controled with a State Machine with a Pseudo Random Generator Circuit. 

Puts a pseudo random data un wave output bus.


### How to test

After reset, push load o rand buttom. Load change one time data out bus. Rand change continius data out bus.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | BB_SYSTEM_CLOCK_50  | BB_SYSTEM_data_OutBUS[7] |
| 1 | BB_SYSTEM_RESET_InHigh  | BB_SYSTEM_data_OutBUS[6] |
| 2 | BB_SYSTEM_loadseed_InLow  | BB_SYSTEM_data_OutBUS[5] |
| 3 | BB_SYSTEM_loaddata_InLow  | BB_SYSTEM_data_OutBUS[4] |
| 4 | BB_SYSTEM_rand_InLow  | BB_SYSTEM_data_OutBUS[3] |
| 5 | BB_SYSTEM_data_InBUS[0]  | BB_SYSTEM_data_OutBUS[2] |
| 6 | BB_SYSTEM_data_InBUS[1]  | BB_SYSTEM_data_OutBUS[1] |
| 7 | BB_SYSTEM_data_InBUS[2]  | BB_SYSTEM_data_OutBUS[0] |
