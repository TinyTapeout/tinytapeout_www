---
hidden: true
title: "166 TrainLED2 - RGB-LED driver with 8 bit PWM engine"
weight: 167
---

## 166 : 0b 010 100 110 : TrainLED2 - RGB-LED driver with 8 bit PWM engine

{{< tt-scanchain-switches "010100110" >}}

* Author: cpldcpu
* Description: A RGB-LED driver using the WS2812 protocol
* [GitHub repository](https://github.com/cpldcpu/tt02-TrainLED)
* HDL project
* [Extra docs](https://github.com/cpldcpu/tt02-TrainLED)
* Clock: at least 6000 Hz
* External hardware: LEDs should be connected to the three LED outputs. The data input should be driven by a microcontroller, generating input data in a slowed down WS2812 scheme.

![picture](images/tb_screenshot.png)

### How it works

A fully digital implementation of an RGB LED driver that accepts the WS2812 protocol for data input. The design is fully clocked, so the timing parameters of the protocol depend on the clock rate. A pulse between 1 and 5 clock cycles on the input will be interpreted as a zero, longer pulses as a one. Each driver accepts 3x8=24 bit of input data to set the brightness of LED1,LED2 and LED3 (R,G,B). After 24 bit have been received, additional input bits are retimed and forwarded to the data output.
After the data input was idle for 96 clock cycles, the input data is latched into the PWM engine and the data input is ready for the next data frame.
The PWM engine uses a special dithering scheme to allow flicker free LED dimming even for relatively low clock rates. 

### How to test

Execute the shell script 'run.sh' in the src folder. This will invoke the test bench.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | Dout Driver A |
| 1 | reset  | LED1A |
| 2 | Din Driver A  | LED2A |
| 3 | none  | LED3A |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |
