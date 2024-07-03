---
hidden: true
title: "494 mixed_signal_pulse_gen"
weight: 63
---

## 494 : mixed_signal_pulse_gen

* Author: Aravind, Allwan
* Description: Mixed signal pulse generator
* [GitHub repository](https://github.com/saranya-iiitmk/mux_test)
* [GDS submitted](https://github.com/saranya-iiitmk/mux_test/actions/runs/9329620112)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

When input is given, pulse is generated accordingly.

### How to test

give input

### External hardware

NA


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | pulse_period[0]  | s_out_lines[1]  | pulse_count[1]        |
| 1 | pulse_period[1]  | s_out_lines[0]  | pulse_count[2]        |
| 2 | pulse_period[2]  |   | pulse_count[3]        |
| 3 | pulse_period[3]  |   | pulse_count[4]        |
| 4 | percentage[0]  |   | pulse_count[5]        |
| 5 | percentage[1]  | pwm_out2  | pulse_count[6]        |
| 6 | start  | pwm_out1  | pulse_count[7]        |
| 7 | pulse_count[0]  | vout_1  | pulse_count[8]        |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 5 | s_in_lines[1]           |
| 1 | 0 | s_in_lines[0]           |
| 2 | 4 | vss           |
| 3 | 1 | vout_4           |
| 4 | 3 | vout_3           |
| 5 | 2 | vout_2           |

### Chip location

{{< shuttle-map "tt07" "494" >}}
