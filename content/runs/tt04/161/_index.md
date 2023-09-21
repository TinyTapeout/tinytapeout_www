---
hidden: true
title: "161 Pulsed Plasma Thruster (PPT) Controller"
weight: 124
---

## 161 : Pulsed Plasma Thruster (PPT) Controller

* Author: Jurica Kundrata
* Description: Controller module which generates triggering pulses for a Pulse Plasma Thruster, configurable via I2C interface.
* [GitHub repository](https://github.com/jk2102/tt04-submission-ppt-controller)
* [GDS submitted](https://github.com/jk2102/tt04-submission-ppt-controller/actions/runs/6098759438)
* HDL project
* [Extra docs]()
* Clock: 32768 Hz
* External hardware: 



### How it works

The controller generates a given number of pulses at a given frequency and pulse width.
The controller is to be used to control a Pulsed Plasma Thruster, i.e. its HV driver.
The parameters of the controller can be given using the I2C slave interface.
The I2C address is defined by 0b101 and the lower nibble of the input port.
The I2C register map is:

ADDR  |  XX   |     Description

0x00               | RW  |     Clock divider value for the controller

0x01               | RW  |     Lower byte of pulse period

0x02               | RW  |     Higher byte of pulse period (6 LSBs used)

0x03               | RW  |     Lower byte of pulse width

0x04               | RW  |     Higher byte of pulse width (6 LSBs used)

0x05               | RW  |     Total number of pulses

0x06               | --  |     N/A

0x07               | RW  |     Run command - initiate the pulse train

0x08               | RO  |     Number of pulses fired

0x09               | --  |     N/A

0x0A               | RO  |     Done signal - active when the pulse train is finished

The controller can be run without configuration via I2C using the fifth bit of the input port (run_override signal).

Verified by iverilog simulations and FPGA prototyped on Xilinx Basys 3 board.


### How to test

Controller is designed to be used with a 32.768 kHz clock.
It can be used without configuration via I2C interface by pulling HIGH the run_override signal (ui_in[4]).
After reset the controller will produce a pulse train with 0.25 Hz frequency, 1/32s width and 16 pulses.
The pulses are shown on the 7-seg display as alternating between dash '-' and zero '0'.
Also it will produce a 1 Hz divided clock at div_clock port, i.e. dot port of the output port (7-seg display).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | I2C address bit 0  | ON if pulse train HIGH | I2C SCL bus line |
| 1 | I2C address bit 1  | ON if pulse train HIGH | I2C SDA bus line |
| 2 | I2C address bit 2  | ON if pulse train HIGH | none |
| 3 | I2C address bit 3  | ON if pulse train HIGH | none |
| 4 | run_override  | ON if pulse train HIGH | none |
| 5 | none  | ON if pulse train HIGH | none |
| 6 | none  | OFF if pulse train HIGH | none |
| 7 | none  | div_clk | none |
