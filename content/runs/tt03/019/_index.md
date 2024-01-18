---
hidden: true
title: "19 12-bit PDP8"
weight: 20
---

## 19 : 0b 000 010 011 : 12-bit PDP8

{{< tt-scanchain-switches "000010011" >}}

* Author: Paul Campnell
* Description: PDP8 core
* [GitHub repository](https://github.com/MoonbaseOtago/tt03-pdp8)
* [Most recent GDS build](https://github.com/MoonbaseOtago/tt03-pdp8/actions/runs/4475492751)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 



### How it works

This is a 12-bit basic PDP8 cpu - it doesn't have the extended arithmetic unit (so no
multiply or divide). Included is an assembler (mostly for test).
Bus interface is a 5-clock to get 12 bits of address and 12 bits of data though 8-bit
interfaces. Address is 2 beats of 6 bits each, data is 3 beats of 4 bits each, I/O 
cycles have an extra beat

            output bits
            7 6 5 4 3 2 1 0
            1 0 A A A A A A     address hi
            1 1 A A A A A A     address lo

            0 1 1 I I 4 2 1     IO cycle intro

            either
            0 0 0 0 - - - -     read data high nibble
            0 0 1 0 - - - -     read data med nibble
            0 1 0 0 - - - -     read data low nibble
            or
            0 0 0 1 D D D D     write data high nibble
            0 0 1 1 D D D D     write data med nibble
            0 1 0 1 D D D D     write data low nibble

Input bits are ignored except during read beats, interrupts are sampled during the first
address beat


### How to test

code in test-bench, assembler in asm dir


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | address_0_data_mux_0 |
| 1 | reset  | address_1_data_mux_1 |
| 2 | none  | address_2_data_mux_2 |
| 3 | none  | address_3_data_mux_3 |
| 4 | data_in_0  | address_4_rw_mux |
| 5 | data_in_1  | address_5_phase_lo_select_mux |
| 6 | data_in_2  | phase_hi_select |
| 7 | data_in_3  | address_data_select |
