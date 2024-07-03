---
hidden: true
title: "588 KianV RISC-V RV32E Baremetal SoC"
weight: 110
---

## 588 : KianV RISC-V RV32E Baremetal SoC

* Author: Dipl.-Ing. Hirosh Dabui
* Description: A baremetal RISC-V RV32E ASIC with audio, spi, uart
* [GitHub repository](https://github.com/splinedrive/RISCV-KianV-BareMetalStyle)
* [GDS submitted](https://github.com/splinedrive/RISCV-KianV-BareMetalStyle/actions/runs/8907808872)
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

After implementing a KianV uLinux TT06, I felt like implementing a KianV bare
metal edition, which is an RV32E RISC-V32 SoC. This SoC is equipped with a
UART, qspi memory controller (psram/flash), a generic SPI interface, and a sigma-delta emulator for playing audio
files. In the firmware folder, the kernelboot.c and crt0.S files display all
hardware registers and their initialization in the code.

### How to test

First, one must build the toolchain for an RV32E, as you can see here:

```
sudo apt-get update
sudo apt-get install autoconf automake autotools-dev curl python3 libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev
git clone --recursive https://github.com/riscv/riscv-gnu-toolchain.git
cd riscv-gnu-toolchain
./configure --prefix=/opt/riscv32e --with-arch=rv32e --with-abi=ilp32e
make
export PATH=/opt/riscv32e/bin:$PATH
```

The following hardware addresses are given:

```
#define LSR_DR 0x01
#define LSR_TEMT 0x40
#define LSR_THRE 0x20
#define PWM_ADDR (IO_BASE + 0x14)
#define REG_DIV (IO_BASE + 0x10)
#define SPI_DIV (IO_BASE + 0x500010)
#define UART_LSR (IO_BASE + 0x5)
#define UART_RX (IO_BASE)
#define UART_TX (IO_BASE)
```

The use of the registers can be determined from the C, linker script and assembly program.
The CPU starts to execute the instruction stored in the NOR Flash at an offset of 1MiB.
When the chip comes into my hands, I will provide demos that I test on the
chip, including audio playback with appropriate documentation.

### External hardware

It's very important to use the PMOD Flash + PSRAM. We only use 8MB of PSRAM
address space.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | uart_rx  | spi_cen0  | ce0 flash        |
| 1 | spi_sio1_so_miso0  | spi_sclk0  | sio0        |
| 2 |   | spi_sio0_si_mosi0  | sio1        |
| 3 |   | pwm_o  | sck        |
| 4 |   | uart_tx  | sd2        |
| 5 |   | led[0]  | sd3        |
| 6 |   | led[1]  | cs1 psram        |
| 7 |   | led[2]  | always high        |


### Chip location

{{< shuttle-map "tt07" "588" >}}
