---
hidden: true
title: "83 r2rdac"
weight: 84
---

## 83 : 0b 001 010 011 : r2rdac

* Author: youngpines
* Description: small r2r
* [GitHub repository](https://github.com/youngpines/tt02-youngpines-submission)
* [Most recent GDS build](https://github.com/youngpines/tt02-youngpines-submission/actions/runs/3555030367)
* [Wokwi](https://wokwi.com/projects/341571228858843732) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: resistors, opamp, and you



### How it works

add a resistor ladder on the d flip flop outputs and you get a dac. AND gate is removed, pin2 is a passthrough

### How to test

attach a r2r ladder and a non-inverting op-amp on the output and you can control the adc output

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | none |
