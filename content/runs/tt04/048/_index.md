---
hidden: true
title: "48 OpenSource PWM Peripheral"
weight: 23
---

## 48 : OpenSource PWM Peripheral

* Author: Medinceanu Paul-Catalin
* Description: The purpose of this project is to develop an Opensource PWM Peripheral with advanced functions and configurations. These capabilities are needed mostly in Power Electronics, where fine tuning of the control signals is crucial. The two standout functions that I have implemented are the deadband and the synchronization between counters.
* [GitHub repository](https://github.com/EldritchIHC/tt04-pwm-peripheral)
* [GDS submitted](https://github.com/EldritchIHC/tt04-pwm-peripheral/actions/runs/6052912575)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

The peripheral contains 3 counters, each of them with 2 comparators and 2 deadband generators. The counter is set to go to a value, the comparator is wired to the registers of the counter and decides when to set or clear the squarewave signal. By setting the counter to switch at different values, any duty cycle can be achieved.
The project can be configured to generate specific PWM signals by writing the desired configuration at the right address in the register file. The register map can be found in the 'doc' folder of the repo.


### How to test

To test the project, it should be tied through the input and bidirectional pins to a microcontroller. A C code(for a specific microcontroller) will be available on the repo to configure the peripheral through the serial terminal. After the setup is done, the PWM signals will be visible at the output pins.
An alternative way to configure the peripheral is through the onboard switches. The write enable is held high, the address is set next on the input pins and finally the data is set at the bidirectional pins. The process is repeated for each register of the PWM module in use.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | i_address[5]  | unused | io_data[7] |
| 1 | i_address[4]  | unused | io_data[6] |
| 2 | i_address[3]  | o_pwm1A | io_data[5] |
| 3 | i_address[2]  | o_pwm1B | io_data[4] |
| 4 | i_address[1]  | o_pwm2A | io_data[3] |
| 5 | i_address[0]  | o_pwm2B | io_data[2] |
| 6 | unused  | o_pwm3A | io_data[1] |
| 7 | i_write_en  | o_pwm3B | io_data[0] |
