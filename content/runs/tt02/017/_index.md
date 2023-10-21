---
hidden: true
title: "17 tiny-fir"
weight: 18
---

## number : 0b000010001 : tiny-fir

* Author: Tom Schucker
* Description: 4bit 2-stage FIR filter
* [GitHub repository](https://github.com/Tschucker/tt02-submission-tiny-fir)
* [Most recent GDS build](https://github.com/Tschucker/tt02-submission-tiny-fir/actions/runs/3432858126)
* [Wokwi](https://wokwi.com/projects/347894637149553236) project
* [Extra docs](FIR_README.md)
* Clock: 0 Hz
* External hardware: Arduino or FPGA



### How it works

Multiplies the input by the tap coefficient for each stage and outputs the sum of all stages

### How to test

Load tap coefficients by setting the value and pulsing 2 times, then repeat for second tap. Change input value each clock to run filter. Select signals change output to debug 00(normal) 01(output of mult 2) 10(tap values in mem) 11(output of mult 1). FIR output discards least significant bit due to output limitations

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | fir1/mult0/tap10 |
| 1 | data0/tap0  | fir2/mult1/tap11 |
| 2 | data1/tap1  | fir3/mult2/tap12 |
| 3 | data2/tap2  | fir4/mult3/tap13 |
| 4 | data3/tap3  | fir5/mult4/tap20 |
| 5 | select0  | fir6/mult5/tap21 |
| 6 | select1  | fir7/mult6/tap22 |
| 7 | loadpulse  | fir8/mult7/tap23 |
