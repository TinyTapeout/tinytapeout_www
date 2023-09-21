---
hidden: true
title: "272 another ring oscillator based temperature sensor"
weight: 134
---

## 272 : another ring oscillator based temperature sensor

* Author: Rodrigo Munoz (UCH)
* Description: 4 differents Ring oscillator whose frecuency depends on temperature. It project is based on https://github.com/JorgeMarinN/tt03_ac3e-usm_ro-based_tempsens
* [GitHub repository](https://github.com/rodrigomunoz1/tt04-verilog-ro-temperature-sensor)
* [GDS submitted](https://github.com/rodrigomunoz1/tt04-verilog-ro-temperature-sensor/actions/runs/6113983145)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

After ena=1 and the reset cycle, a counter counts the number of cycles of
the selected ring oscillator in one period of the system clock. the ring
oscillator is selected by osc_sel input, each oscillator have different
frequency.

This count is added cumulatively, the number of counts added is given by
the entry sum_sel: (sum_sel+1)*4 = number of counts added.

When the data 0x00 (START CODE) is received by the uart, the sum total of
three bytes long is sent back in LSB first.

additionally, on each clock cycle the output of the oscillator cycle
counter is divided by 2 and sent to the output uo_out[7:1] and uio_out[7:0].


### How to test

After reset and enable are set, the ring oscillator should start and then
when a START code (0x00) is received by UART, the cumulative sum value of
3 bytes is sent back. The oscillator counter divided by 2 is present on
uo_out[7:1] and uio_out[7:0].


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ui_in[0] = clk_external  | uo_out[0] = tx (UART tx) | ['uio_out[7:0] = oscillator counter bits 15 to 8'] |
| 1 | ui_in[1] = clk_sel (select the system clock input)  | uo_out[7:1] = oscillator counter bits 7 to 1 | n/a |
| 2 | ui_in[4:2] = sum_sel (number of oscillator counts added (sum_sel+1)*4)  | n/a | n/a |
| 3 | ui_in[5] = rx (UART RX)  | n/a | n/a |
| 4 | ui_in[7:6] = osc_sel (select one of 4 ring oscillators)  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |
