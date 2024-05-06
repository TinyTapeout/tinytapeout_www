---
hidden: true
title: "514 AudioChip_V2"
weight: 121
---

## 514 : AudioChip_V2

* Author: Thorsten Knoll
* Description: The AudioChip plays waveforms on PWM outputs. The inputs alter these waveforms in many ways.
* [GitHub repository](https://github.com/ThorKn/TT06_AudioChip_V2)
* [GDS submitted](https://github.com/ThorKn/TT06_AudioChip_V2/actions/runs/7992627667)
* HDL project
* [Extra docs](None)
* Clock: 12000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is an AudioChip that outputs two Audiosignals as PWM. It can be used as a audio generating device for electronic instruments, namely modular synthesizers. It is planned to build a Eurorack module for a modular synthesizer around this mikrochip. The inputs and outputs are designed to fit into the concept of such instruments. The source code of AudioChip is written in spinalHDL and generates verilog. The SpinalHDL source resides in this repository: Add link here.

### How to test

Attach a lowpass filters to the PWM outputs and you get analog audio signal waveforms. The inputs alter the waveforms.

### External hardware

Lowpass filters for the PWM outputs.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | freq_bit_in_0 | pwm_1_out | adsr_choice_in_0 |
| 1 | freq_bit_in_1 | pwm_2_out | adsr_choice_in_1 |
| 2 | freq_bit_in_2 |  | adsr_choice_in_2 |
| 3 | freq_bit_in_3 |  | adsr_switch_in |
| 4 | freq_bit_in_4 |  | freq_bit_in_8 |
| 5 | freq_bit_in_5 |  | freq_bit_in_9 |
| 6 | freq_bit_in_6 |  | freq_bit_in_10 |
| 7 | freq_bit_in_7 |  | freq_bit_in_11 |

### Chip location

{{< shuttle-map "tt06" "514" >}}
