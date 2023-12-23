---
hidden: true
title: "654 KianV uLinux SoC"
weight: 24
---

## 654 : KianV uLinux SoC

* Author: Hirosh Dabui
* Description: A RISC-V ASIC that can boot μLinux.
* [GitHub repository](https://github.com/splinedrive/KianV_rv32ia_uLinux_SoC)
* [GDS submitted](https://github.com/splinedrive/KianV_rv32ia_uLinux_SoC/actions/runs/6643719714)
* HDL project
* [Extra docs]()
* Clock: 50MHz Hz
* External hardware: 



### How it works

Here is an RV32IMA RISC-V processor that can boot and run uLinux.


### How to test

You need to flash the bootloader, dtb, and the Linux image onto the NOR flash.
It was tested on the ICE40 with the same design at 35MHz.
There is a divider register located at 0x10_000_010.
With the upper 16 bits, the CLINT can be configured, and with the lower 16 bits, the UART can be configured.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | uart_rx  | uart_tx | sio0_mosi |
| 1 | none  | led[0] | sio1_miso |
| 2 | none  | led[1] | sio2 |
| 3 | none  | ce0 | sio3 |
| 4 | none  | sclk_ram | none |
| 5 | none  | ce1 | none |
| 6 | none  | sclk_nor | none |
| 7 | none  | dot | none |

### Chip location

{{< shuttle-map "tt05" "654" >}}
