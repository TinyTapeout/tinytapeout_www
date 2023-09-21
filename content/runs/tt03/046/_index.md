---
hidden: true
title: "46 nipple multiplier"
weight: 47
---

## 46 : nipple multiplier

* Author: ’Mohamed Nasser
* Description: multiply two 8-b numbers in 4 chunks
* [GitHub repository](https://github.com/mnasser431998/tt03-mnasser-demo)
* [Most recent GDS build](https://github.com/mnasser431998/tt03-mnasser-demo/actions/runs/4747475129)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

assign the switches with the first nibble of the first number, make valid high, at the next cycle it will be latched. 
de-assert valid and assign the switches with the second nibble of the first number, make valid high, at the next cycle it will be latched.
assign the switches with the first nibble of the second number, make valid high, at the next cycle it will be latched. 
de-assert valid and assign the switches with the second nibble of the second number, make valid high, at the next cycle it will be latched.
the result will be 16-bits however we have only 8-b output so, if the toggle bit is high the first 8-b of the result will be shown at the output.
if the toggle bit is low the second 8-b of the result will be shown at the output.


### How to test

assign the switches with the first nibble of the first number, make valid high, at the next cycle it will be latched. 
de-assert valid and assign the switches with the second nibble of the first number, make valid high, at the next cycle it will be latched.
assign the switches with the first nibble of the second number, make valid high, at the next cycle it will be latched. 
de-assert valid and assign the switches with the second nibble of the second number, make valid high, at the next cycle it will be latched.
the result will be 16-bits however we have only 8-b output so, if the toggle bit is high the first 8-b of the result will be shown at the output.
if the toggle bit is low the second 8-b of the result will be shown at the output.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | data0  | dout0 |
| 1 | data1  | dout1 |
| 2 | data2  | dout2 |
| 3 | data3  | dout3 |
| 4 | clk  | dout4 |
| 5 | reset_n  | dout5 |
| 6 | valid  | dout6 |
| 7 | toggle  | dout7 |
