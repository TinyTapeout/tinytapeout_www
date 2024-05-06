---
hidden: true
title: "230 Pulse Width Modulation"
weight: 200
---

## 230 : Pulse Width Modulation

* Author: Shivam Bhardwaj, Sachin Sharma and Ambika Prasad Shah
* Description: This Verilog module generates a Pulse Width Modulation (PWM) signal with adjustable duty cycle. It utilizes a 50MHz clock input and debounced buttons to increase or decrease the duty cycle, producing a 5MHz PWM output for various applications like motor speed control or LED brightness adjustment.
* [GitHub repository](https://github.com/OnSachinSharma/tt06-verilog-PWM)
* [GDS submitted](https://github.com/OnSachinSharma/tt06-verilog-PWM/actions/runs/8650528686)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

We want to design Pulse width Modulation (PWM) with 50MHz input Frequency.
The Verilog code defines a module named `tt_um_shivam` responsible for generating a Pulse Width Modulation (PWM) signal. It takes a 50MHz clock input (`clk`) and provides inputs for increasing the assigned pin (`ui_in[0]`) and decreasing the assigned pin (`ui_in[0]`) in the duty cycle. The PWM signal is output through the assigned pin `PWM_OUT` at a frequency of 5MHz.

The code implements debouncing logic for the increase and decrease duty cycle buttons using D flip-flops (`DFF_PWM` modules) to prevent rapid fluctuations due to button bouncing. It also includes counters for generating slow clock enable signals to facilitate debouncing.

The duty cycle can be adjusted by pressing the increase or decrease buttons, which are debounced to ensure reliable operation. The duty cycle can vary from 0% to 90% (in 10% increments), and the PWM signal is generated based on this duty cycle.

Overall, the code provides a flexible and robust PWM signal generator with adjustable duty cycle control.

### How to test

We check our design with the help of OpenROAD flow script (ORFS).

### External hardware

default


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | clk  | PWM_OUT  |      |
| 1 | ui_in[0]  |   |      |
| 2 | ui_in[1]  |   |      |
| 3 |   |   |      |
| 4 |   |   |      |
| 5 |   |   |      |
| 6 |   |   |      |
| 7 |   |   |      |


### Chip location

{{< shuttle-map "tt06" "230" >}}
