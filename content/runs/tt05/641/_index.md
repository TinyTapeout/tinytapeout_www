---
hidden: true
title: "641 PRBS Generator"
weight: 90
---

## 641 : PRBS Generator

* Author: Ivan M Bow
* Description: Generates a PRBS that is configureable up to 8-bits.
* [GitHub repository](https://github.com/wulfhednar02/tt05_prbs_generator)
* [GDS submitted](https://github.com/wulfhednar02/tt05_prbs_generator/actions/runs/6622301402)
* [Wokwi](https://wokwi.com/projects/377426511818305537) project
* [Extra docs]()
* Clock: The input drives the output frequency. Hz
* External hardware: Connection to SPI port, clock input, and analyzer to observe.



### How it works

#### **Pseudo Random Binary Sequence (PRBS) Generator**

######### Author: Ivan M Bow

This project was created using [Wokwi][Wokwi] and submitted to [Tiny Tapeout][Tiny Tapeout] for fabrication. The goal
is to create a fully configurable, burst PRBS output. See [Wiki][Wiki] for implementation details of PRBS
and details on the operations of and polynomials for Linear-Feedback-Shift-Registers (LFSR).

##### Features

- Implements a Galois LFSR with XOR taps for PRN generation.
- Estimated 500kHz Max output PRBS rate, at PRBS2.
  - With 8-bit polynomial, 30 MHz should be achievable.
  - Max frequency reduces as PRBS size is reduced.
    - Estimated Max = (30 MHz / 2 ^ (8 - Nbits))
- Fail safe all 0's check to ensure no lock up.
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
  - The highest order bit is not XOR'ed with the output bit, despite being in the poly.
- Enable pin for starting and resetting the output.
- Data pin for inverting the output.

##### Description

The 8-bit PRBS generator has several 8-bit registers that are used to configure the output.
Using the [Tiny Tapeout][Tiny Tapeout] board that is supplied with each project, the PRBS generator will take in a
clock of any frequency output by the RP2040. The input clock is divided by the configured factor of 2,
then this frequency is used to run the generator. The bit length and the polynomial of the output
are configured in the registers. The output of the PRBS generator starts when the enable pin is set high.

There are 2 counters that control the output of the PRBS generator. The binary sequence will
run for a configured number of times, with an output "clock" indicating this "rate". For Example,
if the register is set to 20, the PRBS will be repeated 10 times, the output clock goes low, then
another 10 times, and the output clock goes high. The idea behind this clock output is to signal
to an external device for sending data. When the output clock goes low, the data needs to be set.
When the output clock goes high, the data on the input pin is clocked in for the remainder of the
output clock period.

The data bit is XOR'ed with the PRBS output to create a non-inverted or inverted sequence. A
register is configured to have the number of data bits that will be clocked into the PRBS
generator. This number of data bits is the number of clock periods that are given from the output
clock. Once the number of data bits has been completed, the PRBS generator automatically stops
running. The generator remains off until the enable pin goes low, which resets the generator, and
then high again to start another "data bits" cycles of the PRBS.

Registers are configured using SPI. For setting up each 8-bit register, the first byte sent is the
command byte and must be hexadecimal 0x80, plus the address of the register to be configured. The
second byte sent is the data that will be placed in the register and stored until changed or reset.
The address field is the last 3-bits of the command byte and valid range is 1-5. Chip select high
resets the command byte, and only 1 register may be written to per cycle of chip select.

A debug setup has been included for easy setup and testing. The debug mode sets the generator to
divide the input clock by 16, the sequences per data bit to 7, the data bits count to 7, enables
bits 0x0F (4 bits), and the polynomial to 0x0C (x^4 + x^3 + 1). To use the debug feature, start by
placing all inputs low (including RST_N) to reset all registers and counters. Then:

1) Set the RST_N line high.
2) Set DEBUG high.
3) Set ENABLE high.

The PRBS generator is now running, and the data line can be toggled to invert the output.

##### Registers

- 5 registers control the PRBS generator

  - Register 0: Command and Address of register to configure *
  - Register 1: Clock Divider **
  - Register 2: PRBS count per data bit ***
  - Register 3: Count of data bits ***
  - Register 4: Bits to enable ****
  - Register 5: Polynomial XOR taps to enable *****

- Addressing and commands happen in a single CS session.

  - CS low -> 0x80 + 3-bit address -> 8-bit data -> CS high

- Reset_N clears all registers

##### Inputs

- **CLK** (RP2040 Clock)
- **RST_N** (Reset Low)
- **IN0**: SPI CS (Active Low)
- **IN1**: SPI CLK (Active High)
- **IN2**: SPI MOSI
- **IN3**: ENABLE (PRBS Generator Enable - Active High)
- **IN4**: DATA Bit Input
- **IN5**: No Connect
- **IN6**: No Connect
- **IN7**: DEBUG (Debug mode - Active high)

##### Outputs

- **OUT0**: PRBS_OUT_1   (PRBS Positive Look-ahead)
- **OUT1**: PRBS_OUT     (PRBS Positive)
- **OUT2**: PRBS_OUT_N   (PRBS Negative)
- **OUT3**: PRBS_OUT_N_1 (PRBS Negative Look-ahead)
- **OUT4**: DATA_CLK     (Data Clock Output)
- **OUT5**: BUSY         (PRBS Running)
- **OUT6**: CLK_OUT      (RP2040 Clock)
- **OUT7**: CLK_PRBS_OUT (PRBS Generator Clock)

##### Bidirectional

(All DIO are set to output and used for debug purposes.)

- **D0**: REG_SEL_0
- **D1**: REG_SEL_1
- **D2**: REG_SEL_2
- **D3**: PRBS_CLK_BYPASS
- **D4**: DATA_COUNT_CLK
- **D5**: DATA_COUNT_COMB_OUT
- **D6**: SEQ_COUNT_COMB_OUT
- **D7**: No Connect

##### Register Contents

###### Register 0: Command & Address

| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|-|-|-|-|-|-|-|-|
| C0 | X | X | X | X | A2 | A1 | A0 |

- bits [7]   - 0: Nothing occurs.
  1: Writes the following word into the register
- bits [6:3] - Do Not Care
- bits [1:2] - 3-bit address of register to place the following data in.
  - (Address 0 is this register.)

###### Register 1: Clock Divider

| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|-|-|-|-|-|-|-|-|
| X | X | X | X | X | D2 | D1 | D0 |

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

| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|-|-|-|-|-|-|-|-|
| E8 | E7 | E6 | E5 | E4 | E3 | E2 | E1 |

- bits [7:0] - E(n+1) is the enable bit for the polynomial size.
  - E() is 1 indexed to match the polynomial exponents.
    - 3-bit polynomial is b'111 or h'7.
    - 8-bit polynomial is b'11111111 or h'FF.
  - Bits must be sequential from bit 0. Other values are undefined.

###### Register 3: Polynomial Tap Bits

| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|-|-|-|-|-|-|-|-|
| x^8 | x^7 | x^6 | x^5 | x^4 | x^3 | x^2 | x^1 |

- bits [7:0] - E(n+1) is the enable bit for the polynomial taps.
  - E() is 1 indexed to match the polynomial exponents.
    - x^4 + x^2 + 1 is b'1010 or h'A.
    - x^5 + x^4 + x^3 + 1 is b'11100 or h'1C.

```
*     Do not address the command byte register, address 0. If the command byte is written to as
        data, then the data could trigger the command byte to transfer to another register,
        whose address is based on the contents of bits 0-2 when bit 7 is triggered.
**    Clock divider bits 3-7 are unused and have no effect.
***   How the counters operate, a count of "0" is considered to be 65,536. Additionally, a count
        of "1" does not work as expected, and is equivalent to a count of "0".
****  Bits must be enabled sequentially, starting with bit 0. Any bit enable value that is not
        sequential is an undefined state. I do not believe it will break anything, but I have not
        looked into what this will do to the output.
***** Enabling an XOR tap bypasses the bit enable register setting. For example, if bits 0-4 are
        enabled but bit 6 has the XOR tap set, then the output polynomial will be x^6 + the rest
        of the polynomial settings.
```

[Wokwi]: https://www.wokwi.com

[Tiny Tapeout]: https://www.tinytapeout.com

[Wiki]: https://en.wikipedia.org/wiki/Linear-feedback_shift_register


### How to test

1) Clear inputs and reset to ensure known states.
2) Configure the registers using SPI or using the debug_setup pin.
3) Set "output_en" high and observe "prbs_out".
4) Toggle "data_in" to invert "prbs_out" on next rising edge of "data_clk".
5) To restart PRBS after "busy" goes low, clear "output_en" and set "output_en" again.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | spi_cs  | prbs_out_1 | debug_out_reg_sel_0 |
| 1 | spi_clk  | prbs_out | debug_out_reg_sel_1 |
| 2 | spi_mosi  | prbs_out_n | debug_out_reg_sel_2 |
| 3 | output_en  | prbs_out_n_1 | debug_out_prbs_clk_bypass |
| 4 | data_in  | data_clk | debug_out_data_count_clk |
| 5 | none  | busy | debug_out_data_count_comb_out |
| 6 | none  | debug_out_system_clk | debug_out_seq_count_comb_out |
| 7 | debug_setup  | debug_out_prbs_clk | none |

### Chip location

{{< shuttle-map "tt05" "641" >}}
