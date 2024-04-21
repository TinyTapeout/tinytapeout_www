---
hidden: true
title: "683 PWM_Sinewave_UART"
weight: 47
---

## 683 : PWM_Sinewave_UART

* Author: Luis Gerardo Avila
* Description: This project is a PWM signal generator that creates a sine wave, with frequency variation between 100 Hz and 700 Hz with steps of 100 in 100 Hz, which is manipulated through a UART interface
* [GitHub repository](https://github.com/JerryAvila06/PWM_Sinewave)
* [GDS submitted](https://github.com/JerryAvila06/PWM_Sinewave/actions/runs/8757359809)
* HDL project
* [Extra docs](None)
* Clock: 25000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Through UART communication, a number from 1 to 7 is sent, indicating the frequencies set in the code, which are from 100 Hz to 700 Hz, then through a pin I generate a PWM signal which varies in time to generate a sine wave of the frequency that was requested.

### How to test

Only physical tests were carried out with the circuit, a Bluetooth antenna was added to the UART communication port, and a low pass filter was added to the output of the system to improve the signal a little and then it was measured with the oscilloscope and I verify that it delivers the requested frequencies.

### External hardware

-Bluetooth HC05.
-oscilloscope.
-A low pass filter.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | uart_rx | uart_tx | no use |
| 1 | no use | no use | no use |
| 2 | no use | pwm_outx | no use |
| 3 | no use | no use | no use |
| 4 | sw_11 | no use | no use |
| 5 | sw_01 | no use | no use |
| 6 | rst1 | no use | no use |
| 7 | no use | no use | no use |

### Chip location

{{< shuttle-map "tt06" "683" >}}
