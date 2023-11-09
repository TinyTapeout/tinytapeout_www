---
hidden: true
title: "100 Hardware Trojan Example"
weight: 8
---

## 100 : Hardware Trojan Example

* Author: Jeremy Hong
* Description: Simple hardware trojan circuit described by Ryan Cornateanu in a medium article
* [GitHub repository](https://github.com/hongselectronics/HW_Trojan_hongseleco)
* [GDS submitted](https://github.com/hongselectronics/HW_Trojan_hongseleco/actions/runs/6750975645)
* [Wokwi](https://wokwi.com/projects/380409568391147521) project
* [Extra docs](README.md)
* Clock: 0 Hz
* External hardware: No external hardware required, just TinyTapeout Carrier Board



### How it works

Based off of medium article by Ryan Cornateanu: "Hardware Trojans IUnder a Microscope https://ryancor.medium.com/hardware-trojans-under-a-microscope-bf542acbcc29


### How to test

Use DIP switches as input, 1- 4 is for normal circuit that would be considered "secure", and 5 - 8 for compromised circuit with embedded Hardware Trojan


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | r0_normal  | Output from r0_normal - r3_normal circuit | none |
| 1 | r1_normal  | segment b not used | none |
| 2 | r2_normal  | segment c not used | none |
| 3 | r3_normal  | segment d not used | none |
| 4 | r0_trojan  | segment e not used | none |
| 5 | r1_trojan  | segment f not used | none |
| 6 | r2_trojan  | Output from r0_trojan - r3_trojan circuit | none |
| 7 | r3_trojan  | dot not used | none |
