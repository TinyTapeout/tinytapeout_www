---
hidden: true
title: "483 Parallel / SPI modulation tester"
weight: 89
---

## 483 : Parallel / SPI modulation tester

* Author: Chris Merrill
* Description: PDM/PWM/PFM waveform output based on digital data in
* [GitHub repository](https://github.com/cmerrill/tt06-cmerrill)
* [GDS submitted](https://github.com/cmerrill/tt06-cmerrill/actions/runs/8739590879)
* HDL project
* [Extra docs](None)
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is an attempt to build a DAC with multiple digital modulation schemes on the output.
It was originally intended to use the analog pins to output the analog waveform as well, but I ran out of time.

The device will output four types of digital modulation to represent the analog input:

- PDM on `uo[0]`
- PFM (fixed width pulse, variable spacing) on `uo[2]`
- PFM (variable frequency, 50% duty cycle) on `uo[3]`
- PWM on `uo[4]`

The PDM signal is based on tracking an error accumulator, and has the fastest response to changing input. The PWM signal has a frequency that is 1/256th of the input clock frequency (~200kHz at 50MHz input).

The two PFM modes are less useful for actual modulation, but they can effectively do a frequency sweep of the filter on the output.

### How to test

After connecting the external RC filter, you need to set the clock rate and program the DAC.

The modulation output rate can be divided down from the main clock input by up to 15. The `uio[0:3]` pins set the clock divisor.

There are two ways to program the DAC, and they can be selected between using the `uio[7]` pin.

**`uio[7]` = 0:** Parallel data input

- The 8-bit DAC level is input via `ui[0:7]`
- The data is latched onto the output on the rising edge of `uio[4]`

**`uio[7]` = 1:** SPI data input

- There is a SPI but with the pinout
  - `uio[5]` -> SCLK
  - `uio[6]` -> SDI
  - `uio[4]` -> CS_L
- The 8-bit DAC level is input as 8 bits of data sent over the SPI bus when CS_L is low.
- The SCLK signal should be slower than the main CLK signal to the IC.
- Data is latched onto the output on the rising edge of CS_L
- This path is less validated than the parallel path.

### External hardware

The modulation outputs are all digital pulses of some sort. In order to get meaningful analog levels, you'll need to add an RC filter on the output pin that you are using. The cuttoff will depend on what your chosen frequency is and the type of modulation.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | DAC Parallel Input, bit 0 | PDM Waveform Output | CLK_DIV[0] |
| 1 | DAC Parallel Input, bit 1 |  | CLK_DIV[1] |
| 2 | DAC Parallel Input, bit 2 | PFM Output, Single cycle pulse | CLK_DIV[2] |
| 3 | DAC Parallel Input, bit 3 | PFM Output, 50% duty cycle | CLK_DIV[3] |
| 4 | DAC Parallel Input, bit 4 | PWM Waveformn Output | SPI CS_L / Parallel Latch |
| 5 | DAC Parallel Input, bit 5 |  | SPI SCLK |
| 6 | DAC Parallel Input, bit 6 |  | SPI SDI |
| 7 | DAC Parallel Input, bit 7 |  | Parallel/SPI Select (0 => Parallel, 1 => SPI) |

### Chip location

{{< shuttle-map "tt06" "483" >}}
