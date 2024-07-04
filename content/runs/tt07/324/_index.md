---
hidden: true
title: "324 Real Time Motor Controller"
weight: 31
---

## 324 : Real Time Motor Controller

* Author: J. R. Petrus
* Description: Controls a stepper motor with precise timing between steps.
* [GitHub repository](https://github.com/jrpetrus/tt_rtmc)
* [GDS submitted](https://github.com/jrpetrus/tt_rtmc/actions/runs/9260460961)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

### Introduction

The Real Time Motor Controller (RTMC) is designed to control a stepper motor such as the SEQ_28BYJ_48. The step_table
is programmed with the coil positions for the motor, and each step advances the table_idx to the next coil position.
The size of the step is programmable via step_size. The step_size may be positive or negative. The example motor
supports step_size in [-2, -1, 1, 2]. The table_last set the limit for the table_idx before resetting to 0. It would
be set to 7 for the example motor if abs(step_size) == 1 or 6 if abs(step_size) == 2.

The step control increments the table_idx + step_size. The run control continously increments table_idx, with a
pause of step_delay cycles between increments.

### SPI Peripheral Protocol

Control of the RTMC is accomplished via its SPI peripheral interface and simple read/write protocol.

SPI must be byte-oriented and send most significant bit first.

SPI mode must be CPOL=0, CPHA=0.

1-byte OPCODE: NOP=0, RD=1, WR=2.

1-byte ADDRESS: Select the register

2-byte DATA: Transfer in two bytes, MSB first.

1-byte RESULT: BUSY=0, ACK=1, ACK_DATA=2

The SPI peripheral *should* operate at up to 1/2 the core clock frequency. My target is 50 MHz core and 25 MHz SCK.

#### Write Operation

Tx: WR, ADDR, DATA0, DATA1

Rx: Loop reading 1-byte RESULT until ACK seen.

#### Read Operation

Tx: RD, ADDR

Rx: Loop reading 1-byte RESULT until ACK_DATA seen.

Rx: DATA0, DATA1

### Memory Map

| 16-bit Register   | Offset  | Access | Description                                                                |
| ----------------- | ------- | ------ | ---------------------------------------------------------------------------|
| id                |  0x00   | R      | ID: {version, idcode}                                                      |
| gpio              |  0x01   | RW     | GPIO: {mc_oe[7:0], gpo[3:0], gpi[3:0]}                                     |
| step_ctrl         |  0x02   | RW     | Step Control: {run, step, reserved[4:0], table_last[3:0], step_size[4:0]}  |
| step_stat         |  0x03   | R      | Step Status: {reserved[7"0], state[3:0], table_idx[3:0]}                   |
| step_delay0       |  0x04   | RW     | Step Delay: Most significant 16 bits, unsigned.                            |
| step_delay1       |  0x05   | RW     | Step Delay: Least significant 16 bits, unsigned.                           |
| step_count0       |  0x06   | R, WC  | Step Count: Most significant 16 bits, signed. WC = write-to-clear          |
| step_count1       |  0x07   | R, WC  | Step Count: Least significant 16 bits, signed.                             |
| delay_count0      |  0x08   | R, WC  | Delay Count: Most significant 16 bits, unsigned.                           |
| delay_count1      |  0x09   | R, WC  | Delay Count: Least significant 16 bits, unsigned.                          |
| step_table[0]     |  0x10   | RW     | Motor State 0: 8-bits mapped to uio[7:0].                                  |
| ...               |         |        | ...                                                                        |
| step_table[15]    |  0x1F   | RW     | Motor State 15: 8-bits mapped to uio[7:0].                                 |

### Pinout

#### Inputs

ui[0]: General Purpose Input gpi[0]

ui[1]: General Purpose Input gpi[1]

ui[2]: General Purpose Input gpi[2]

ui[3]: General Purpose Input gpi[3]

ui[4]: SPI0.cs

ui[5]: SPI0.sck

ui[6]: SPI0.tx

ui[7]: Connected to uo[6]

#### Outputs

uo[0]: General Purpose Output gpo[0]

uo[1]: General Purpose Output gpo[1]

uo[2]: General Purpose Output gpo[2]

uo[3]: General Purpose Output gpo[3]

uo[4]: Connected to ^uio_in

uo[5]: Connected to ui[7]

uo[6]: Connected to ena

uo[7]: SPI0.rx

#### Bidirectional pins

uio[0]: Motor Control mc[0]

uio[1]: Motor Control mc[1]

uio[2]: Motor Control mc[2]

uio[3]: Motor Control mc[3]

uio[4]: Motor Control mc[4]

uio[5]: Motor Control mc[5]

uio[6]: Motor Control mc[6]

uio[7]: Motor Control mc[7]

### How to test

Connect up the external hardware, program the registers, and write a 1 to the run bit.
MicroPython code in the works, but not until the chips come back.

### External hardware

Assuming use of the TT Demo board.

Utilize the RP2040 SPI0 in controller mode to communicate with the RTMC.

Connect uio[3:0] to a SEQ_28BYJ_48 motor + ULN2003 Driver.

uio[7:4] could optionally be connected to a second motor driven in tandem.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | General Purpose Input gpi[0]  | General Purpose Output gpo[0]  | Motor Control mc[0]        |
| 1 | General Purpose Input gpi[1]  | General Purpose Output gpo[1]  | Motor Control mc[1]        |
| 2 | General Purpose Input gpi[2]  | General Purpose Output gpo[2]  | Motor Control mc[2]        |
| 3 | General Purpose Input gpi[3]  | General Purpose Output gpo[3]  | Motor Control mc[3]        |
| 4 | SPI0.cs  | Connected to ^uio_in  | Motor Control mc[4]        |
| 5 | SPI0.sck  | Connected to ui[7]  | Motor Control mc[5]        |
| 6 | SPI0.tx  | Connected to ena  | Motor Control mc[6]        |
| 7 | Connected to uo[6]  | SPI0.rx  | Motor Control mc[7]        |


### Chip location

{{< shuttle-map "tt07" "324" >}}
