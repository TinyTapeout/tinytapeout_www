---
hidden: true
title: "15 small FFT"
weight: 16
---

## 15 : 0b 000 001 111 : small FFT

{{< tt-scanchain-switches "000001111" >}}

* Author: Rice Shelley
* Description: Computes a small fft
* [GitHub repository](https://github.com/RiceShelley/tiny-fft)
* [Most recent GDS build](https://github.com/RiceShelley/tiny-fft/actions/runs/3429738875)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

Takes 4 4-bit signed inputs (real integer numbers) and outputs 4 6-bit complex numbers

### How to test

after reset, use the write enable signal to write 4 inputs. Read the output for the computer FFT.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | rd_idx_zero |
| 1 | reset  | none |
| 2 | wrEn  | data_out_0 |
| 3 | none  | data_out_1 |
| 4 | data_in_0  | data_out_2 |
| 5 | data_in_1  | data_out_3 |
| 6 | data_in_2  | data_out_4 |
| 7 | data_in_3  | data_out_5 |
