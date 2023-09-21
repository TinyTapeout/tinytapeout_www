---
hidden: true
title: "19 YKM 7-seg driver"
weight: 36
---

## 19 : YKM 7-seg driver

* Author: Yeo Kheng Meng
* Description: Shows the string ykM_1St_CHIP character by character
* [GitHub repository](https://github.com/yeokm1/tt4-ykm-7-seg)
* [GDS submitted](https://github.com/yeokm1/tt4-ykm-7-seg/actions/runs/5771567991)
* [Wokwi](https://wokwi.com/projects/372184284115580929) project
* [Extra docs](https://github.com/yeokm1/tt4-ykm-7-seg/blob/main/README.md)
* Clock: 0.5 Hz
* External hardware: 7-segment LCD



### How it works

The string is shown by individual characters to the 7-segment LCD.
By default with all pins except Clock being Low, the chip will cycle through all the characters depending on clock speed.
To display individual characters manually, set HIGH to counter pin and BCD. Then select the bits 0-3 manually.


### How to test

See how_it_works.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock  | 7-segment a | none |
| 1 | none  | 7-segment b | none |
| 2 | none  | 7-segment c | none |
| 3 | none  | 7-segment d | none |
| 4 | Disable counter. This is active-high.  | 7-segment e | none |
| 5 | Driven by BCD or counter. High for BCD, Low for counter.  | 7-segment f | none |
| 6 | BCD bit 3  | 7-segment g | none |
| 7 | BCD bit 2  | none | none |
