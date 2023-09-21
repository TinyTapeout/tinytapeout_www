---
hidden: true
title: "273 RO-based temperature sensor with hysteresis"
weight: 86
---

## 273 : RO-based temperature sensor with hysteresis

* Author: Francisco Aguirre, Francisca Donoso, based on design by Daniel Arevalos and Jorge Marín
* Description: Ring oscillator whose frequency depends on temperature, with a hysteresis module for temperature detection.
* [GitHub repository](https://github.com/Grimrist/tt04_usm_ro-based_tempsens-hyst)
* [GDS submitted](https://github.com/Grimrist/tt04_usm_ro-based_tempsens-hyst/actions/runs/6103450513)
* HDL project
* [Extra docs]()
* Clock: 1000000 Hz
* External hardware: 



### How it works

This temperature sensor uses a ring oscillator connected to a counter to determine the number of cycles within a clock period.
The numbers of cycles are averaged across 4 samples, using a simple 2-bit right shift, and then sent through UART as well as the
standard I/O pins. As a ring oscillator's frequency is related to the temperature, we can then use this output to determine the
temperature vs frequency characteristic.


### How to test

After reset and enable are set, the ring oscillator should start. You can then use the UART rx channel to send the START code,
which will kick-start the data-sending module. This module will start outputting the average of the last 4 samples of the ring oscillator to the UART tx channel.
These samples are taken every clock cycle, which you can adjust by providing an external clock through the external clock pin,
and then using the selector pin to switch to it.
We suggest using a clock around 1MHz, as otherwise the counter may either be too fast or too slow.
Additionally, you can send a REG code to adjust the registers used by the hysteresis module, allowing you
to set the upper threshold, and then the lower threshold, through transmission from the tx channel.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clk_internal  | tx | counter[0] |
| 1 | clk_sel  | temp_warn | counter[1] |
| 2 | enable_inv_osc  | n/a | counter[2] |
| 3 | enable_nand_osc  | n/a | counter[3] |
| 4 | rx  | n/a | counter[4] |
| 5 | osc_sel  | n/a | counter[5] |
| 6 | n/a  | n/a | counter[6] |
| 7 | n/a  | n/a | counter[7] |
