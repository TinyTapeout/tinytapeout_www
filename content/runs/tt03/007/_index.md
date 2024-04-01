---
hidden: true
title: "7 4x4 Memory"
weight: 8
---

## 7 : 0b 000 000 111 : 4x4 Memory

{{< tt-scanchain-switches "000000111" >}}

* Author: Yannick Reiß
* Description: Store 4x4 bits of memory.
* [GitHub repository](https://github.com/yannickreiss/TT3_Memory)
* [Wokwi](https://wokwi.com/projects/357897381919942657) project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

On write enable, the four data-inputs are saved to the d-flipflops selected by the address inputs. The output is always read from the current selected flipflops.


### How to test

Connect a clock, buttons for reset and switches for address and data like shown below. The output can be read by using 4 LEDs or any other kind of binary output device.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | data1 |
| 1 | reset  | data2 |
| 2 | addr1  | data3 |
| 3 | addr2  | data4 |
| 4 | data1  | none |
| 5 | data2  | none |
| 6 | data3  | none |
| 7 | data4  | none |
