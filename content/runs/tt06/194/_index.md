---
hidden: true
title: "194 8-bit CPU with Debugger"
weight: 115
---

## 194 : 8-bit CPU with Debugger

* Author: Sean Patrick O'Brien
* Description: 8-bit CPU with debugger accessible via I2C
* [GitHub repository](https://github.com/obriensp/tt06-spo-be8-nomacro)
* [GDS submitted](https://github.com/obriensp/tt06-spo-be8-nomacro/actions/runs/8757129187)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

### How it works

The CPU is based on Ben Eater's [8-bit breadboard CPU](https://eater.net/8bit). A built-in debugger allows pausing the CPU, loading programs, inspecting/modifying registers, etc.

### How to test

The debugger is accessible over I2C at address 0x2A (0x54 write, 0x55 read). The provided `dbg` program can be used to load programs, inspect registers, etc.

### External hardware

Optionally, data can be provided on the input pins and consumed on the output pins. They are accessible to the CPU as the IN and OUT registers.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Input Port | Output Port |  |
| 1 | Input Port | Output Port |  |
| 2 | Input Port | Output Port | SCL |
| 3 | Input Port | Output Port | SDA |
| 4 | Input Port | Output Port | HALTED |
| 5 | Input Port | Output Port |  |
| 6 | Input Port | Output Port |  |
| 7 | Input Port | Output Port |  |

### Chip location

{{< shuttle-map "tt06" "194" >}}
