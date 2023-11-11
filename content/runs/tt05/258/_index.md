---
hidden: true
title: "258 PWM signal generation with Winner-Take-All selection"
weight: 153
---

## 258 : PWM signal generation with Winner-Take-All selection

* Author: Ruibin Mao
* Description: 8-channel 12-bit PWM signal generation. Time-domain Winner-Take-All (WTA) able to find smallest PWM signal and k-smallest signal
* [GitHub repository](https://github.com/Jaylenne/tt05-wta-pwm)
* [GDS submitted](https://github.com/Jaylenne/tt05-wta-pwm/actions/runs/6749507447)
* HDL project
* [Extra docs](README.md)
* Clock: 20000000 Hz
* External hardware: 



### How it works

- General Description
  This design aims to build a PWM generation and a Winner-Take-All selection circuit for smallest PWM duration detection. The circuit has 8 built-in 12-bit PWM signal generation with a common trigger. The circuit can also accept external 8-bit PWM signals with internal 8-bit switch. User can choose for each channel whether to use internal PWM signals or external signals. The 8-channel PWM signal will go through a synchronization stage to make sure it synchronizes with the internal clock.
  The winner-take-all is done by sensing the falling edge of the PWM signal. The falling edge detection pulse will be stored in the falling edge register once it's been triggered. The nearest neighbor (NN) signal or smallest duration signal will be detected once a first falling edge is triggered. An internal counter will count how many falling edges are triggered and once it reaches threshold K, the falling edge register will latch the address. So that the K nearest results are stored.
- Detail of the internal modules
  `SPI 1`: It's for the pulse-width configuration of 8 PWM signals. Users should latch 96-bit signals through the SPI 1 to configure all PWM signals. This channel can also shift out the results of 8-channel time-to-digital converter (TDC) which is used to convert the PWM duration into digital signals.
  `SPI 2`: It's for the configuration of internal switch of 8-channel. Each switch will select either internal PWM or external signal is used. Another 3-bit signal is used to set the number K which is K-smallest duration of input PWM signal. The MISO will shift out the 8-bit smallest PWM address and 8-bit K-smallest PWM address.
  `PWM_sync`: It synchronize the PWM signals comming in and convert it to digital signal with TDC and detect the falling edge.
  `k_nn`: It senses the 8 falling edges and store them once it's been triggered. An internal counter will count the number of falling edges at each clock cycle and latch the address of existing falling edges.


### How to test

The testing can refer to the testbench in `src/test.py`
After resetting, the user should do

1. Config the 8 channel PWM pulse width and 3-bit threshold K using SPI 1 and SPI 2. For SPI 1, user should send 12*8=96 bit signals using FPGA, the order is "Channel 0-1-2-3-4-5-6-7".
2. Config the switch and 3-bit threshold using SPI 2, the order is "8-bit switch - 3-bit threshold". For each channel, external signal will be used if switch bit is '1' or the internal PWM is used if switch bit is '0'.
3. Activate the PWM trigger which is ui_in[4].
4. Wait for at least 2**12 clock cycles.
5. Readout the 12-bit TDC result with SPI 1, the order is "Channel 0-1-2-3-4-5-6-7".
6. Readout the 8-bit smallest address and K-smallest address, the order is "nn - k_nn"


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | SPI 1 SS  | SPI 1 MISO | External PWM signal 0 |
| 1 | SPI 2 SS  | SPI 2 MISO | External PWM signal 1 |
| 2 | SPI 1 MOSI  | PWM[0] signal | External PWM signal 2 |
| 3 | SPI 2 MOSI  | PWM[0] after cross-domain synchronization | External PWM signal 3 |
| 4 | PWM Trigger  | PWM[0] falling edge detection | External PWM signal 4 |
| 5 | None  | PWM[7] signal | External PWM signal 5 |
| 6 | None  | PWM[7] after cross-domain synchronization | External PWM signal 6 |
| 7 | None  | PWM[7] falling edge detection | External PWM signal 7 |

### Chip location

{{< shuttle-map "tt05" "258" >}}
