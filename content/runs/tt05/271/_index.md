---
hidden: true
title: "271 TT05 Analog Testmacro (Ringo, DAC)"
weight: 106
---

## 271 : TT05 Analog Testmacro (Ringo, DAC)

* Author: Harald Pretl and Jakob Ratschenberger
* Description: For future analog enablement of TinyTapeout we designed a few simple analog blocks for testing the flow. The first block is a ca. 500kHz ring oscillator outputting a square-wave signal. The second block is a 3bit R-2R DAC outputting a programmable dc voltage. Both analog output signals can be gated or shorted using integrated transmission gates. To add a further level of madness, we have placed and routed this analog macro using an experimental automatic analog PnR tool, currently under development by the authors.
* [GitHub repository](https://github.com/iic-jku/tt05-analog-test)
* [GDS submitted](None)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: scope, multimeter



### How it works

A ring oscillator (ca. 500kHz) produces a square-wave signal available at UA[0].
A 3-bit R-2R DAC produces a dc voltage availabel at UA[1].


### How to test

Enable the respective blocks, and enable the transmission gates to connect the block outputs to UA[0] and UA[1], respectively. The DAC voltage can be changed by setting the digital inputs accordingly.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | {'IN[2:0]': 'Digital input for DAC'}  | {'UA[0]': 'Ringo output (if TG enabled)'} | not used |
| 1 | {'IN[3]': 'Enable TG for DAC output to UA[1]'}  | {'UA[1]': 'DAC output (if TG enabled'} | n/a |
| 2 | {'IN[4]': 'Not used'}  | n/a | n/a |
| 3 | {'IN[5]': 'Enable TG for ringo output to UA[0]'}  | n/a | n/a |
| 4 | {'IN[6]': 'Enable ringo'}  | n/a | n/a |
| 5 | {'IN[7]': 'Short UA[0] and UA[1] for testing'}  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |

### Chip location

{{< shuttle-map "tt05" "271" >}}
