---
hidden: true
title: "974 LISA 8-Bit Microcontroller"
weight: 92
---

## 974 : LISA 8-Bit Microcontroller

* Author: Ken Pettit
* Description: 8-Bit Microcontroller SOC with 128 bytes DFFRAM module
* [GitHub repository](https://github.com/kdp1965/tt06-um-lisa)
* [GDS submitted](https://github.com/kdp1965/tt06-um-lisa/actions/runs/8757401400)
* HDL project
* [Extra docs](None)
* Clock: 22000000 Hz

### How it works

```
                             
```

This is a Microprocessor build around an 8-Bit Little ISA (LISA) processor.
The following is a block diagram of the project:
+------+  
+----->|config|  
|      | regs |  
|\   +----+----+ +------+  +------+   +------+
rx1 -----*-| |  |         |           | lisa |   | lisa |
| | |  |  Debug  |           | qspi |   | qqspi| QSPI
rx2 ---*-|-| +->|  Intf   +---------->|      +<->|      +---->
| | | |  |         |           | QSPI |   | QPSI | CEs
rx3 -*-|-|-| |  |         +-------+   | ARB  |   | Ctrl +---->
| | | |/   +---------+  Ctrl |   +--+---+   +------+
| | |  |                     |      |  
| | |  |Port                 V      |       +--------+  
V V V  |Sel                +-+------+---+   | lisa   |  
+---------+-+   +--------+    |            +---+ debug  |  
|  debug    |   | HW Int |    |    LISA    |   +--------+  
| autobaud  |   |  Mul/  |<-->|    CORE    |   +--------+  
|           |   |  Div   |    |            +---+ Periph |  
+-----------+   +--------+    +-+-------+--+   |        |  
|       |      |    gpio+-->
+-------+   +-----+-+ +---+---+  |     i2c+-->
| RAM32 +---+ DATA  | | INST  |  |    UART+->
| 128B  |   | CACHE | | CACHE |  | timer  |  
+-------+   +-------+ +-------+  +--------+

- The LISA Core as a minimal set of register that allow it to run C programs:

  - Program Counter + Return Address Resister
  - Stack Pointer and Index Register (Indexed DATA RAM access)
  - Accumulator

- Harvard architecture LISA Core (16-bit instruction, 15-bit address space)

- Debug interface

  * UART controlled
  * Auto detects port from one of 3 interfaces
  * Auto detects the baud rate
  * Interfaces with SPI / QSPI SRAM or FLASH
  * Can erase / program the (Q)SPI FLASH
  * Read/write LISA core registers
  * Set LISA breakpoints, single step, etc.
  * SPI/QSPI programmability (single/quad, port location, CE selects)

- (Q)SPI interface for instruction fetch

- Onboard 128 Byte RAM for DATA / DATA CACHE

- Data bus CACHE controller with 8 16-byte CACHE lines

- Instruction CACHE with a single 4-instruction CACHE line

- 16-bit programmable timer (with pre-divide)

- Debug UART available to LISA core also

- 8-bit Input port (PORTA)

- 8-bit Output port (PORTB)

- 4-bit BIDIR port (PORTC)

- I2C Master controller

- Hardware 8x8 integer multiplier

- Hardware 16/8 or 16/16 integer divider

- Programmable I/O mux for maximum flexibility of I/O usage.

It uses a 32x32 1RW [DFFRAM](https://github.com/AUCOHL/DFFRAM) macro to implement a 128 bytes (1 kilobit) RAM module.
The 128 Byte ram can be used either as a DATA cache for the processor data bus, giving a 32K Byte address range,
or the CACHE controller can be disabled, connecting the Lisa processor core to the RAM directly, limiting the
data space to 128 bytes.

Reseting the project **does not** reset the RAM contents.

### How to test

You will need to download and compile the C-based assembler, linker and C compiler I wrote (will make available)
Also need to download the Python based debugger.

- Assembler is fully functional
  - Includes limited libraries for crt0, signed int compare, math, etc.
  - Libraries are still a work in progress
- Linker is fully functional
- C compiler is functional (no float support at the moment) but is a work in progress.
- Python debugger can erase/program the FLASH, program SPI SRAM, start/stop the LISA core, read SRAM and registers.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | pa_in[0]/baud_div[0] | pb_out[0] | ce0/ce_latch |
| 1 | pa_in[1]/baud_div[1] | pb_out[1] | mosi/dq1/ce0 |
| 2 | pa_in[2]/baud_div[2] | pb_out[2] | miso/dq2/ce1 |
| 3 | pa_in[3]/baud_div[3]/rx | pb_out[3] | sclk |
| 4 | pa_in[4]/baud_div[4] | pb_out[4]/tx | rx  /pc_io[0]/scl/sda |
| 5 | pa_in[5]/baud_div[5] | pb_out[5] | tx  /pc_io[1]/sda/scl |
| 6 | pa_in[6]/baud_div[6] | pb_out[6] | scl /pc_io[2]/dq2/rx |
| 7 | pa_in[7]/baud_set | pb_out[7]/baud_clk | sda/pc_io[3]/dq3 |

### Chip location

{{< shuttle-map "tt06" "974" >}}
