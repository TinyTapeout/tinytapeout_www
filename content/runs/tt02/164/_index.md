---
hidden: true
title: "164 PWM Generator"
weight: 165
---

## number : 0b010100100 : PWM Generator

* Author: Hassan Baydoun <hhb16@mail.aub.edu>, Razan Thebian <rat17@mail.aub.edu>: Electrical and Computer Engineering Department, American University of Beirut 
* Description: It is a PWM Generator with selectable duty cycle 0-10-20-..-100% with clock divider built in
* [GitHub repository](https://github.com/H-Bydn/TinyTapeout2-PWMgenerator)
* [Most recent GDS build](https://github.com/H-Bydn/TinyTapeout2-PWMgenerator/actions/runs/3619734648)
* HDL project
* [Extra docs]()
* Clock: 12500Hz Hz
* External hardware: You can control the intensity of an external LED using the PWM Output



### How it works

The design uses an external clock and 4 bits to select the duty cycle. It outputs a PWM signal with 1/10 the frequency of the clock supplied and a duty cycle depending on the 4 selected bits.

### How to test

Use clock on input 0, reset on input 1, Turn bits of duty cycle select (input 2:5) to choose duty cycle (0000 -> 0%, 0001 -> 10%, 0010 -> 20%,.., 1010 ->100% ) and choose freq0 and freq1 as clock dividers (1x, 1/2x, 1/4x, 1/8x)

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | PWM_Out |
| 1 | reset  | none |
| 2 | duty0  | none |
| 3 | duty1  | none |
| 4 | duty2  | none |
| 5 | duty3  | none |
| 6 | freq0  | none |
| 7 | freq1  | none |
