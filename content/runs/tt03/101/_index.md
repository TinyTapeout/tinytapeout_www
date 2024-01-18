---
hidden: true
title: "101 Water-Level-Indicator-With-Auto-Motor-Control"
weight: 102
---

## 101 : 0b 001 100 101 : Water-Level-Indicator-With-Auto-Motor-Control

{{< tt-scanchain-switches "001100101" >}}

* Author: Ashutosh Kumar
* Description: As water level of tank decreases/increases LED glow according to it.when water level touches the last then motor start and run until full the tank.
* [GitHub repository](https://github.com/kashi1729/tt03-submission-Water-Level-Indicator-With-Auto-Motor-controller)
* [Most recent GDS build](https://github.com/kashi1729/tt03-submission-Water-Level-Indicator-With-Auto-Motor-controller/actions/runs/4785332822)
* [Wokwi](https://wokwi.com/projects/362788954641333249) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

First 4 flip flop uses as synchroniser. Total four state define as full  Half1  Half2  Empty. These four state mapped with 00  01  10  11 and further it  mapped with 4 Led. Logic circuits design to control the states using D-flip flop. Another Logic design with help of one D flip flop to control motor. Motor only start when it goes to last stage and it OFF only when water level of tank full.

### How to test

Explain how to test your project:
it have 3 input 
clock 
input A 
input B 
Total 5 output 
out1 -- connect to red Led (Full)
out2 -- connect to yellow1 Led (Half1)
out3 -- connect to yellow2 Led (Half2)
out4 -- connect to Red Led (Empty)
out5 -- connect to Red Led (moto)    


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | c  | segment a -- Red Led (Full) |
| 1 | l  | segment b -- Yellow1 (Half1) |
| 2 | o  | segment c -- Yellow2 ( Half2) |
| 3 | c  | segment d -- RED (Empty) |
| 4 | k  | segment e -- RED (motor) |
| 5 |    | segment f |
| 6 | i  | segment g |
| 7 | n  | dot |
