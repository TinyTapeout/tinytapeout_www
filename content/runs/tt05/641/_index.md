---
hidden: true
title: "641 PRBS Generator"
weight: 163
---

## 641 : PRBS Generator

* Author: Ivan M Bow
* Description: Generates a PRBS that is configureable up to 16-bits.
* [GitHub repository](https://github.com/wulfhednar02/tt05_prbs_generator)
* [GDS submitted](https://github.com/wulfhednar02/tt05_prbs_generator/actions/runs/6622301402)
* [Wokwi](https://wokwi.com/projects/377426511818305537) project
* [Extra docs]()
* Clock: The input drives the output frequency. Hz
* External hardware: Connection to SPI port, clock input, and analyzer to observe.



### How it works

#### Pseudo Random Binary Sequence (PRBS) generator.

##### Features:

- Implements a Galois LSFR with XOR taps for PRN generation.
- Estimated 1.5MHz Max output PRBS rate, at PRBS2.
  - With 16-bit polynomial, 30-50 MHz may be achievable.
  - Max frequency reduces as PRBS size is reduced.
    - Estimated Max = (30 MHz / 2 ^ (16 - Nbits))
- Has a fail safe all 0's check to ensure the generator does not get locked up.
- Clock Divider
- SPI Interface
  - CLK, MOSI, CS
  - SPI Mode 0, CS Active Low, MSB First
- Register access for configuration
- Differential Output
- Look-ahead Outputs
  - For each of the differential outputs, the next bit coming is output.
  - Useful for waveshaping or other information.
- Logic added in so a bit cannot be XOR'ed if the previous bit is disabled.
  - The highest order bit is not XOR'ed with the output bit, despite being in teh poly.

##### Registers

- 4 registers control the PRBS generator
  - Register 0: Command and Address of register to configure
  - Register 1: Clock Divider
  - Register 2: Bits to enable
  - Register 3: Polynomial XOR taps to enable
- Addressing and commands happen in a single CS session.
  - CS low -> command + 2-bit address -> 8- or 16-bit data -> CS high
- Reset_N clears registers

##### Interface

###### Inputs:

- SPI Chip Select
- SPI Clock
- SPI Data (MOSI)

###### Outputs:

- PRBS OUT
- PRBS OUT +1 CLK
- PRBS OUT (Inverse) +1 CLK
- PRBS OUT (Inverse)

###### Bidirectional:

- none

##### Commands and Registers

- All commands and registers are sent to the device in SPI Mode 0, MSB first.
- Command structure is as follows:
  - {Command Byte} {Data Byte or Word}
    - Command Byte contains the address of the register.
    - The Data Byte / Word is placed into the regester at that address.
    - Register 1 is 8-bit.
    - Register 2 is 16-bit.
    - Register 3 is 16-bit.

###### Commands

- 1: Write to Register
- Currently there is only one command. Not sure what else to command...

###### Register 0: Command & Address

- : 7  : 6  : 5  : 4  : 3  : 2  : 1  : 0  :
- : C0 : X  : X  : X  : X  : X  : A1 : A0 :
  - bits [7]   - 0: Nothing occurs.
    1: Writes the following word into the register
  - bits [6:2] - Do Not Care
  - bits [1:0] - 2-bit address of register to place the following data in.
    - (Address 0 is this register.)

###### Register 1: Clock Divider

- : 7  : 6  : 5  : 4  : 3  : 2  : 1  : 0  :
- : X  : X  : X  : X  : X  : D2 : D1 : D0 :
  - bits [7:3] - Do Not Care
  - bits [2:0] - Clock Divider
    - 0: /1
    - 1: /2
    - 2: /4
    - 3: /8
    - 4: /16
    - 5: /32
    - 6: /64
    - 7: /128

###### Register 2: Polynomial Enable Bits

- : 15 : 14 : 13 : 12 : 11 : 10 : 9  : 8  : 7  : 6  : 5  : 4  : 3  : 2  : 1  : 0  :
- : E16: E15: E14: E13: E12: E11: E10: E9 : E8 : E7 : E6 : E5 : E4 : E3 : E2 : E1 :
  - bits [15:0] - E(n) is the enable bit for the polynomial size.
    - E(n) is 1 indexed to match the polynomial exponents.
      - 3-bit ploynomial is b'111 or h'7.
      - 12-bitpolynomial is b'111111111111 or h'FFF.
    - Bits must be sequenctial from bit 0. Other values are undefined.

###### Register 3: Polynomial Tap Bits

- : 15 : 14 : 13 : 12 : 11 : 10 : 9  : 8  : 7  : 6  : 5  : 4  : 3  : 2  : 1  : 0  :
- : E16: E15: E14: E13: E12: E11: E10: E9 : E8 : E7 : E6 : E5 : E4 : E3 : E2 : E1 :
  - bits [15:0] - E(n) is the enable bit for the polynomial taps.
    - E(n) is 1 indexed to match the polynomial exponents.
      - x^4 + x^2 + 1 is b'1010 or h'A.
      - x^5 + x^4 + x^3 + 1 is b'11100 or h'1C.
    - Bits must be sequenctial from bit 0. Other values are undefined.


### How to test

1) Reset to ensure known states.
2) Configure the registers using SPI.
3) Connect Input Clock (If not already done).
4) Observe Output.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | spi_cs  | prbs_out_0 | none |
| 1 | spi_clk  | prbs_out_1 | none |
| 2 | spi_mosi  | prbs_out_n_1 | none |
| 3 | none  | prbs_out_n_0 | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |
