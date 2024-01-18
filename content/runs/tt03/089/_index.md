---
hidden: true
title: "89 5_1MUX"
weight: 90
---

## 89 : 0b 001 011 001 : 5_1MUX

{{< tt-scanchain-switches "001011001" >}}

* Author: saurabh kumar and diksha bothra 
* Description: it's 5 is to 1 mux which trigger only  one input and gives  output according to the select lines 
* [GitHub repository](https://github.com/Secretiv/tt03-submission-template)
* [Most recent GDS build](https://github.com/Secretiv/tt03-submission-template/actions/runs/4786435280)
* [Wokwi](https://wokwi.com/projects/362833471952037889) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

when  i give change the logic of clock for diffrent combinations one input is triggered nad at output that input gives output
Explain how your project works


### How to test

when select i give logic of 000 from S1 ,S2,S3 ,I1 is trigger at 100 I2 is triggered at 001 I3 , 101 I4 and 111 I5 is triggered|
Explain how to test your project


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | Clock - S3  | segment a - OUT0 |
| 1 | I1  | segment b |
| 2 | I2  | segment c |
| 3 | I3  | segment d |
| 4 | I4  | segment e |
| 5 | I5  | segment f |
| 6 | S1  | segment g |
| 7 | S2  | dot |
